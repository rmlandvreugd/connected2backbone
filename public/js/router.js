App.Router = Backbone.Router.extend({
  routes: {
    '': 'index'
  },

  index: function() {
    console.log("The index page.");
  }
});
