var Person = Backbone.Model.extend({
	defaults: {
		name: 'John Doe',
		age: 38,
		occupation: 'worker'
	},

	validate: function(attrs){
		if ( attrs.age < 0 ) {
			return 'Age must be positive!';
		}

		if ( ! attrs.name) {
			return 'Every person must have a name!';
		}
	},

	work: function() {
		return this.get('name') + ' is working.';
	}

});