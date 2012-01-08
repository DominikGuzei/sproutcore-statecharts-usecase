var App = SC.Application.create({
  
  ready: function() {
    
    App.statechart = SC.Statechart.create({
      
      statesAreConcurrent: YES,
      
      Timer: App.TimerState,
      Tasks: App.TasksState
      
    });
    
    App.tasksController = App.TasksController.create({
      statechart: App.statechart
    });
    
    App.tasksMediator = App.TasksMediator.create({
      tasksController: App.tasksController
    });
    
    App.timerController = App.TimerController.create({
      timer: App.Timer.create(),
      statechart: App.statechart
    });
    
    App.timerMediator = App.TimerMediator.create({
      timerController: App.timerController
    });
    
    App.statechart.initStatechart();
    
    this._super();
  }
  
});