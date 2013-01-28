/*
 *
 * Global App View
 *
 */

 App.Views.App = Backbone.View.extend({

   initialize: function() {
     console.log( this.collection.toJSON() );
     var addContactView = new App.Views.AddContact({ collection: App.contacts });
   }

});

/*
 *
 * Add Contact View
 *
 */

App.Views.AddContact = Backbone.View.extend({

  el: '#addContact',

  events: {
    'submit': 'addContact'
  },

  addContact: function(e){
    e.preventDefault();

    var newContact = this.collection.create({
      first_name: this.$('#first_name').val(),
      last_name: this.$('#last_name').val(),
      email_address: this.$('#email_address').val(),
      description: this.$('#description').val()
    }, { wait: true });

    console.log( newContact );
  }
});
