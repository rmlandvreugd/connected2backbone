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

// View for all people
var PeopleView =  Backbone.View.extend({
  tagName: 'ul',

  initialize: function() {
    console.log("PeopleView: initialize()");
    console.log(this.collection);
  },

  render: function() {
    console.log("PeopleView: render()");
    // Filter through all items in a colection
    this.collection.each(function(person){
      console.log(person);
      // for each, create a new PersonView
      var personView = new PersonView({ model: person });
      console.log(personView.el);
      // append the root element to the PeopleCollection root element
      this.$el.append(personView.el);
    }, this);

    return this;
  }
});

// The View for a Person
var PersonView = Backbone.View.extend({
  tagName: 'li',

  template: _.template( $('#personTemplate').html() ),

  initialize: function() {
    console.log("PersonView: initialize()");
    this.render();
  },

  render: function() {
    console.log("PersonView: render()");
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

var peopleView = new PeopleView({ collection: peopleCollection });
$(document.body).append(peopleView.render().el);
