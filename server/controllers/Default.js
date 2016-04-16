'use strict';

var url = require('url');


var Default = require('./DefaultService');


module.exports.addMoment = function addMoment (req, res, next) {
  Default.addMoment(req.swagger.params, res, next);
};
