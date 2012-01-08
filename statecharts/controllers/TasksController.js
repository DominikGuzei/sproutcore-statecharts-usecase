
App.TasksController = SC.ArrayProxy.extend({

  content: [{ title: "First Task"}, { title: "Second Task"}],
  
  selectedTask: null,
  workingTask: null,
  
  deleteTask: function(task) {
    if(task === this.get('selectedTask')) {
      this.set('selectedTask', null);
      this.set('workingTask', null);
    }
    this.removeObject(task);
  }
});