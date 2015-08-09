var restful = require('node-restful');

module.exports = function(app, route){
  var rest = restful.model(
    "movie",
    app.models.movie
  ).methods(['get', 'put', 'post', 'delete']);


  //register this endpoint with the application
  rest.register(app, route);

  //return middleware
  return function(req, res, next){
    next();
  };
};
