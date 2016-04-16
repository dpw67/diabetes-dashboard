'use strict';

exports.addMoment = function(args, res, next) {
  /**
   * parameters expected in the args:
  * moment (NewMoment)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "name" : "aeiou",
  "id" : 123456789,
  "tag" : "aeiou",
  "time" : "2000-01-23T04:56:07.000+0000",
  "type" : "aeiou",
  "value" : "aeiou"
};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

