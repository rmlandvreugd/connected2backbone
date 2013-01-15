// Person Model
var Person = Backbone.Model.extend({
  defaults: {
    name: 'John Doe',
    age: 38,
    occupation: 'worker'
  }
});

// A List of People
var PeopleCollection = Backbone.Collection.extend({
  model: Person
});

// The View for a Person
var PersonView = Backbone.View.extend({
  tagName: 'li',

  template: _.template( $('#personTemplate').html() ),

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

//var personView = new PersonView({ model: person });

var peopleCollection = new PeopleCollection([
  {
    name: 'Jeffrey Way',
    age: 27
  },
  {
    name: 'John Doe',
    age: 50,
    occupation: 'Web designer'
  },
  {
    name: 'Sally Doe',
    age: 29,
    occupation: 'Graphic designer'
  }
]);

console.log(peopleCollection);
