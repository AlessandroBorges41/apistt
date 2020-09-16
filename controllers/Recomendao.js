'use strict';

var utils = require('../utils/writer.js');
var Recomendao = require('../service/RecomendaoService');

module.exports.apiAudioPOST = function apiAudioPOST (req, res, next) {
  var audio = req.swagger.params['audio'].value;
  var car = req.swagger.params['car'].value;
  Recomendao.apiAudioPOST(audio,car)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiTextPOST = function apiTextPOST (req, res, next) {
  var text = req.swagger.params['text'].value;
  var car = req.swagger.params['car'].value;
  Recomendao.apiTextPOST(text,car)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
