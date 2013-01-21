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

var vent = _.extend({}, Backbone.Events);

App.Views.Appointment = Backbone.View.extend({
  initialize: function() {
    console.log("App.Views.Appointment: initialize()");
    vent.on('appointment:show', this.show, this);
  },

  show: function(id) {
    console.log("App.Views.Appointment: showAppointment() with id: " + id);
  }
});

App.Router = Backbone.Router.extend({

  routes: {
    '': 'index',
    'appointment/:id': 'showAppointment'
  },

  index: function() {
    console.log("App.Router: index()");
  },

  showAppointment: function(appointmentId) {
    console.log("App.Router: showAppointment() with id = " + appointmentId);
    vent.trigger('appointment:show', appointmentId);
  }
});

new App.Views.Appointment;
new App.Router;
Backbone.history.start();

})();
