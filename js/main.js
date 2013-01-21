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

App.Router = Backbone.Router.extend({

  routes: {
    '': 'index',
    'show/:id': 'show'
  },

  index: function(){
    console.log("App.Router: index()");
  },

  show: function(id){
    console.log("App.Router: show() with id = " + id);
  }
});

new App.Router;
Backbone.history.start();

})();
