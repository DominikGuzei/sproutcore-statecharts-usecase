
App.TimerState = SC.State.extend({
  
  enterState: function() {
    App.timerView = App.TimerView.create({
      timerMediator: App.timerMediator,
      tasksMediator: App.tasksMediator,
      statechart: App.statechart
    });
    
    App.timerView.appendTo($('#app'));
  },
  
  initialSubstate: 'Inactive',
  
  Inactive: SC.State.extend({
    enterState: function() {
      App.timerController.reset();
      App.timerMediator.set('isInactive', true);
    },
    
    taskSelected: function() {
      App.timerMediator.set('isInactive', false);
      this.gotoState('Timer.Ready');
    }
  }),
  
  Ready: SC.State.extend({
    enterState: function() {
      App.timerController.reset();
      App.timerMediator.set('isReady', true);
    },
    
    startPomodoro: function() {
      App.timerMediator.set('isReady', false);
      this.gotoState('Timer.Pomodoro.Running');
    }
  }),
  
  Pomodoro: SC.State.extend({
    initialSubstate: 'Running',
    
    Running: SC.State.extend({
      
      enterState: function() {
        App.timerMediator.set('isRunning', true);
        App.timerController.start();
      },
      
      pausePomodoro: function() {
        App.timerMediator.set('isPaused', true);
        this.gotoState('Timer.Pomodoro.Paused');
      },
      
      pomodoroFinished: function() {
        this.gotoState('Timer.Pausing');
      }.handleActions('timerFinished'),
      
      exitState: function() {
        App.timerMediator.set('isRunning', false);
        App.timerController.stop();
      }
    }),
    
    Paused: SC.State.extend({
      resumePomodoro: function() {
        this.gotoState('Timer.Pomodoro.Running');
      },
      
      exitState: function() {
        App.timerMediator.set('isPaused', false);
      }
    }),
    
    cancelPomodoro: function() {
      this.gotoState('Timer.Ready');
    }
  }),
  
  Pausing: SC.State.extend({
    enterState: function() {
      App.timerMediator.set('isPausing', true);
      App.timerController.startPausing();
    },
    
    pausingFinished: function() {
      this.gotoState('Timer.Ready');
    }.handleActions('timerFinished'),
    
    cancelPausing: function() {
      this.gotoState('Timer.Ready');
    },
    
    exitState: function() {
      App.timerMediator.set('isPausing', false);
    }
  })
});