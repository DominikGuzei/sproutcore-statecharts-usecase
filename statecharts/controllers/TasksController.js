
App.TasksController = SC.ArrayProxy.extend({
  tasksMediator: null,
  content: [{ title: "First Task"}, { title: "Second Task"}],
  
  isSelecting: true,
  isTaskSelected: false,
  isDeleting: false,
  isWorkingOnTask: false,
  
  taskSelected: function(task) {
    if(this.get('isSelecting') || this.get('isTaskSelected')) {
      this.set('isSelecting', false);
      this.get('tasksMediator').set('selectedTask', task);
      this.set('isTaskSelected', true);
    }
  },
  
  deleteSelectedTask: function() {
    if(this.get('isTaskSelected')) {
      this.set('isTaskSelected', false);
      
      this.set('isDeleting', true);
      var answer = confirm('Delete selected task?');

      if(answer) {
        var tasksMediator = this.get('tasksMediator');
        var selectedTask = tasksMediator.get('selectedTask');
        
        tasksMediator.set('selectedTask', null);
        
        this.set('isDeleting', false);
        this.set('isSelecting', true);
        this.removeObject(selectedTask);
        
      } else {
        this.set('isDeleting', false);
        this.set('isTaskSelected', true);
      }
    }
  },
  
  startPomodoro: function() {
    if(this.get('isTaskSelected')) {
      this.set('isTaskSelected', false);
      
      var tasksMediator = this.get('tasksMediator');
      tasksMediator.set('workingTask', tasksMediator.get('selectedTask'));
      
      this.set('isWorkingOnTask', true);
    }
  },
  
  finishedPomodoro: function() {
    if(this.get('isWorkingOnTask')) {
      var tasksMediator = this.get('tasksMediator');
      
      this.set('isWorkingOnTask', false);
      
      tasksMediator.set('selectedTask', tasksMediator.get('workingTask'));
      tasksMediator.set('workingTask', null);
      
      this.set('isTaskSelected', true);
    }
  },
  
  cancelPomodoro: function() {
    this.finishedPomodoro();
  }
});