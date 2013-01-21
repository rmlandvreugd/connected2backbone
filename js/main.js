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

App.Models.Task = Backbone.Model.extend({
  validate: function(attrs) {
    if ( ! $.trim(attrs.title) ){
      return 'A task requires a valid title!';
    }
  }
});

App.Collections.Tasks = Backbone.Collection.extend({
  model: App.Models.Task
});

App.Views.Tasks = Backbone.View.extend({
  tagName: 'ul',

  initialize: function() {
    this.collection.on('add', this.addOne, this);
  },

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

  initialize: function(){
    console.log("App.Views.Task: initialize()");
    this.model.on('change', this.render, this);
    this.model.on('destroy', this.remove, this);
  },

  events: {
    'click .edit': 'editTask',
    'click .delete': 'destroy'
  },

  editTask: function(){
    console.log("App.Views.Task: editTask()");
    var newTaskTitle = prompt('What would you like to change the text to?', this.model.get('title'));

    if ( !newTaskTitle ) return;

    this.model.set('title', newTaskTitle);
  },

  destroy: function(){
    console.log("App.Views.Task: destroy()");
    this.model.destroy();
    console.log(tasksCollection.toJSON());
  },

  remove: function(){
    console.log("App.Views.Task: remove()");
    this.$el.remove();
  },

  render: function() {
    console.log("App.Views.Task: render()");
    console.log(this.template(this.model.toJSON()));
    var template = this.template( this.model.toJSON() );
    this.$el.html( template );
    return this;
  }
});

App.Views.AddTask = Backbone.View.extend({
  el: '#addTask',

  events: {
    'submit': 'submit'
  },

  initialize: function(){
    console.log("App.Views.AddTask: initialize()");
  },

  submit: function(e){
    e.preventDefault();
    console.log("App.Views.AddTask: submit()");
    var newTaskTitle = $(e.currentTarget).find('input[type=text]').val();
    console.log("new task with title: " + newTaskTitle);
    var task = new App.Models.Task({ title: newTaskTitle});
    this.collection.add(task);
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

  var addTaskView = new App.Views.AddTask({ collection: tasksCollection});

  var tasksView = new App.Views.Tasks({ collection: tasksCollection });
  //tasksView.render();
  console.log(tasksView.$el);
  $('.tasks').html(tasksView.render().el);

})();
