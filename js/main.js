var Person = Backbone.Model.extend({
	defaults: {
		name: 'John Doe',
		age: 38,
		occupation: 'worker'
	},
	work: function() {
		return this.get('name') + ' is working.';
	}

});