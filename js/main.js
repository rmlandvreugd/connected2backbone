(function(){

window.App = {
  Models: {},
  Collections: {},
  Views: {},
  Router: {}
};

window.template = function(id) {
  console.log( "template with id: " + id );
  return _.template( $('#' + id).html() );
};

})();
