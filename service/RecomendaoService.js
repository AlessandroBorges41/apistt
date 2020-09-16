'use strict';


/**
 * Analisa críticas contidas em um arquivo de áudio e recomenda um carro da FCA dependendo das críticas.
 * 
 *
 * audio File Áudio em formato FLAC contendo uma crítica ou comentário sobre um carro.
 * car String Nome do carro sobre o qual o comentário ou crítica é feito.
 * returns Result
 **/
exports.apiAudioPOST = function(audio,car) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "entities" : [ {
    "sentiment" : -0.95,
    "entity" : "desempenho",
    "mention" : "motor"
  }, {
    "sentiment" : -0.95,
    "entity" : "desempenho",
    "mention" : "motor"
  } ],
  "recommendation" : "Fiat Argo"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Analisa críticas contidas em um texto e recomenda um carro da FCA dependendo das críticas.
 * 
 *
 * text String Texto contendo uma crítica ou comentário sobre um carro.
 * car String Nome do carro sobre o qual o comentário ou crítica é feito.
 * returns Result
 **/
exports.apiTextPOST = function(text,car) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "entities" : [ {
    "sentiment" : -0.95,
    "entity" : "desempenho",
    "mention" : "motor"
  }, {
    "sentiment" : -0.95,
    "entity" : "desempenho",
    "mention" : "motor"
  } ],
  "recommendation" : "Fiat Argo"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

