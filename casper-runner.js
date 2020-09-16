
require('dotenv').config({ silent: true });

if (!process.env.NATURAL_LANGUAGE_UNDERSTANDING_USERNAME
  && !process.env.NATURAL_LANGUAGE_UNDERSTANDING_IAM_APIKEY) {
  console.log('Skipping integration tests because NATURAL_LANGUAGE_UNDERSTANDING_USERNAME and NATURAL_LANGUAGE_UNDERSTANDING_IAM_APIKEY are null'); // eslint-disable-line
  process.exit(0);
}

const { spawn } = require('child_process');

const app = require('./app');

const port = 3000;

const server = app.listen(port, () => {
  console.log('Server running on port: %d', port);  // eslint-disable-line

  function kill(code) {
    server.close(() => {
      process.exit(code);
    });
  }

  function runTests() {
    const casper = spawn('npm', ['run', 'test-integration']);
    casper.stdout.pipe(process.stdout);

    casper.on('error', (error) => {
      console.log(`ERROR: ${error}`);  // eslint-disable-line
      server.close(() => {
        process.exit(1);
      });
    });

    casper.on('close', kill);
  }

  runTests();
});
