(function(){

window.App = {
  Models: {},
  Collections: {},
  Views: {}
};

window.template = function(id) {
  console.log( "template with id: " + id );
  return _.template( $('#' + id).html() );
};

// Person Model
App.Models.Person = Backbone.Model.extend({
  defaults: {
    name: 'John Doe',
    age: 38,
    occupation: 'worker'
  }
});

// A List of People
App.Collections.People = Backbone.Collection.extend({
  model: App.Models.Person
});

// View for all people
App.Views.People =  Backbone.View.extend({
  tagName: 'ul',

  initialize: function() {
    console.log("App.Views.People: initialize()");
    //console.log(this.collection);
  },

  render: function() {
    console.log("App.Views.People: render()");
    // Filter through all items in a colection
    this.collection.each(function(person){
      console.log("Working with \'" + person.get('name') + "\'.");
      // for each, create a new PersonView
      var personView = new App.Views.Person({ model: person });
      //console.log(personView.el);
      // append the root element to the PeopleCollection root element
      this.$el.append(personView.el);
    }, this);

    return this;
  }
});

// The View for a Person
App.Views.Person = Backbone.View.extend({
  tagName: 'li',

  template: template('personTemplate'),

  initialize: function() {
    console.log("App.Views.Person: initialize()");
    this.render();
  },

  render: function() {
    console.log("App.Views.Person: render()");
    this.$el.html( this.template(this.model.toJSON()) );
    return this;
  }
});

var peopleCollection = new App.Collections.People([
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

//console.log(peopleCollection);

var peopleView = new App.Views.People({ collection: peopleCollection });
$(document.body).append(peopleView.render().el);

console.log(App.Collections);
})();
