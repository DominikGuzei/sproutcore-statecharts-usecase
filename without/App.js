var App = SC.Application.create({
  
  ready: function() {
    
    App.tasksMediator = App.TasksMediator.create();
    
    App.tasksController = App.TasksController.create({
      tasksMediator: App.tasksMediator
    });
    
    App.timerController = App.TimerController.create({
      timer: App.Timer.create(),
      tasksController: App.tasksController
    });
    
    App.timerMediator = App.TimerMediator.create({
      timerController: App.timerController
    });

    App.timerView = App.TimerView.create({
      timerMediator: App.timerMediator,
      timerController: App.timerController,
      tasksMediator: App.tasksMediator
    });
    
    App.tasksView = App.TasksView.create({
      tasksMediator: App.tasksMediator,
      tasksController: App.tasksController
    });

    App.timerView.appendTo($('#app'));
    App.tasksView.appendTo($('#app'));
    
    this._super();
  }
  
});