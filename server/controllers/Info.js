'use strict';

var url = require('url');


var Info = require('./InfoService');


module.exports.infoGET = function infoGET (req, res, next) {
  Info.infoGET(req.swagger.params, res, next);
};
