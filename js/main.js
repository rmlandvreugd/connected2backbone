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

App.Models.Task = Backbone.Model.extend({});

App.Collections.Tasks = Backbone.Collection.extend({
  model: App.Models.Task
});

App.Views.Tasks = Backbone.View.extend({
  tagName: 'ul',
  render: function() {
    console.log("App.Views.Tasks: render()");
    this.collection.each(this.addOne, this);
    return this;
  },

  addOne: function(task) {
    console.log("App.Views.Tasks: addOne(task)");
    // create a new child view
    var taskView = new App.Views.Task({ model: task });

    // append to the root element
    this.$el.append(taskView.render().el);
  }
});

App.Views.Task = Backbone.View.extend({
  tagName: 'li',

  template: template('taskTemplate'),

  events: {
    'click .edit': 'editTask'
  },

  editTask: function(){
    console.log("App.Views.Task: editTask()");
    var newTaskTitle = prompt('What would you like to change the text to?', this.model.get('title'));

    this.model.set('title', newTaskTitle);
  },

  render: function() {
    console.log("App.Views.Task: render()");
    console.log(this.template(this.model.toJSON()));
    var template = this.template( this.model.toJSON() );
    this.$el.html( template );
    return this;
  }
});

  var tasksCollection = new App.Collections.Tasks([
    {
      title: 'Go to the store',
      priority: 4
    },
    {
      title: 'Go to the mall',
      priority: 3
    },
    {
      title: 'Get to work',
      priority: 5
    }
  ]);

  var tasksView = new App.Views.Tasks({ collection: tasksCollection });
  //tasksView.render();
  console.log(tasksView.$el);
  $('.tasks').html(tasksView.render().el);

})();
