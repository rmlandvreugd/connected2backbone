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
    console.log("'initialize()': with model ");
    console.log(this.model.toJSON());
    this.render();
  },

  render: function() {
    this.$el.html( this.model.get('name') );
    return this;
  }
});

var person = new Person();
var personView = new PersonView({ model: person });
