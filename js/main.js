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
    console.log("'initialize()': with model ");
    console.log(this.model.toJSON());
    this.render();
  },

  render: function() {
    //anti-pattern
    //this.$el.html( this.model.get('name') + ' (' + this.model.get('age') + ') - ' + this.model.get('occupation') );
    this.$el.html( this.template(this.model.toJSON()) );
    return this;
  }
});

var person = new Person();
var personView = new PersonView({ model: person });
