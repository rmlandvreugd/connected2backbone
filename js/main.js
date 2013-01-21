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
    'show': 'show'
  },

  index: function(){
    console.log("App.Router: index()");
  },

  show: function(){
    console.log("App.Router: show()");
  }
});

new App.Router;
Backbone.history.start();

})();
