var Person = Backbone.Model.extend({
  defaults: {
    name: 'John Doe',
    age: 38,
    occupation: 'worker'
  }
});

var PersonView = Backbone.View.extend({
  tagName: 'li',

  initialize: function() {
    console.log(this.model);
  },

  render: function() {

  }
});

var person = new Person;
var personView = new PersonView({ model: person });
