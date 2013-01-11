var Person = Backbone.Model.extend({
  defaults: {
    name: 'John Doe',
    age: 38,
    occupation: 'worker'
  }
});

var PersonView = Backbone.View.extend({
  tagName: 'li',

  template: _.template("<strong><%= name %></strong> (<%= age %>) - <%= occupation %>"),

  initialize: function() {
    console.log("initialize()");
    this.render();
  },

  render: function() {
    console.log("render()");
    this.$el.html( this.template(this.model.toJSON()) );
    return this;
  }
});

var person = new Person();
var personView = new PersonView({ model: person });
