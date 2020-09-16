// carregar propriedades do ambiente de um arquivo .env para desenvolvimento local
require('dotenv').load({ silent: true });

const app = require('./app.js');

const port = process.env.PORT || 3000;

app.listen(port);
console.log('listening at:', port); // eslint-disable-lin