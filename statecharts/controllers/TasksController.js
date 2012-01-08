
App.TasksController = SC.ArrayProxy.extend({

  content: [{ title: "First Task"}, { title: "Second Task"}],
  
  deleteTask: function(task) {
    this.removeObject(task);
  }
});