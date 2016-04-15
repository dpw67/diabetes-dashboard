'use strict';

var url = require('url');


var Default = require('./DefaultService');


module.exports.momentsGET = function momentsGET (req, res, next) {
  Default.momentsGET(req.swagger.params, res, next);
};
