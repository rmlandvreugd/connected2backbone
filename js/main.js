var Person = Backbone.Model.extend({
	defaults: {
		name: 'John Doe',
		age: 38,
		occupation: 'worker'
	}
});

var PersonView = Backbone.View.extend({
  tagName: 'li',
  className: 'person',
  id: 'some-person'
});
