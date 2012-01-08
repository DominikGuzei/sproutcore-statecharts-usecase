
App.TasksState = SC.State.extend({
  
  enterState: function() {
    App.tasksView = App.TasksView.create({
      tasksMediator: App.tasksMediator,
      statechart: App.statechart
    });

    App.tasksView.appendTo($('#app'));
  },
  
  initialSubstate: 'Selecting',
  
  Selecting: SC.State.extend({
    enterState: function() {
      App.tasksMediator.set('selectedTask', null);
      App.tasksMediator.set('workingTask', null);
      App.tasksMediator.set('isSelecting', true);
    },
    
    taskSelected: function(task) {
      App.tasksMediator.set('selectedTask', task);
      App.tasksMediator.set('isSelecting', false);
      this.gotoState('Tasks.TaskSelected');
    }
  }),
  
  TaskSelected: SC.State.extend({
    enterState: function() {
      App.tasksMediator.set('isTaskSelected', true);
    },
    
    taskSelected: function(task) {
      App.tasksMediator.set('selectedTask', task);
    },
    
    startPomodoro: function() {
      App.tasksMediator.set('workingTask', App.tasksMediator.get('selectedTask'));
      this.gotoState('Tasks.WorkingOnTask');
    },
    
    deleteSelectedTask: function() {
      this.gotoState('Tasks.Deleting');
    },
    
    exitState: function() {
      App.tasksMediator.set('isTaskSelected', false);
    }
  }),
  
  Deleting: SC.State.extend({
    enterState: function() {
      App.tasksMediator.set('isDeleting', true);
      var answer = confirm('Delete selected task?');
      App.tasksMediator.set('isDeleting', false);
      
      if(answer) {
        App.tasksController.deleteTask(App.tasksMediator.get('selectedTask'));
        this.gotoState('Tasks.Selecting');
      } else {
        this.gotoState('Tasks.TaskSelected');
      }
    }
  }),
  
  WorkingOnTask: SC.State.extend({
    enterState: function() {
      App.tasksMediator.set('isWorkingOnTask', true);
    },
    
    finishedPausing: function() {
      this.gotoState('Tasks.TaskSelected');
    },
    
    cancelPomodoro: function() {
      this.gotoState('Tasks.TaskSelected');
    },
    
    cancelPausing: function() {
      this.gotoState('Tasks.TaskSelected');
    },
    
    exitState: function() {
      App.tasksMediator.set('workingTask', null);
      App.tasksMediator.set('isWorkingOnTask', false);
    }
  })
});