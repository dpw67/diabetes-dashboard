'use strict';

var url = require('url');


var Moment = require('./MomentService');


module.exports.momentsGET = function momentsGET (req, res, next) {
  Moment.momentsGET(req.swagger.params, res, next);
};
