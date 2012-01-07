App.TimerController = SC.Object.extend({

  timer: null,
  tasksController: null,
  
  pomodoroDuration: 5,
  pauseDuration: 5,
  
  elapsedSecondsBinding: 'timer.elapsedSeconds',
  neededSecondsBinding: 'timer.duration',
  
  remainingSeconds: SC.computed(function() {
    return this.get('neededSeconds') - this.get('elapsedSeconds');
  }).property('elapsedSeconds', 'neededSeconds'),
  
  isInactive: true,
  isReady: false,
  isRunning: false,
  isPaused: false,
  isPausing: false,
  
  taskSelectionChanged: SC.observer(function() {
    if(this.get('isInactive')) {
      this.set('isInactive', false);
      this._setReady();
    } else if(this.get('isReady')) {
      this.set('isReady', false);
      this.set('isInactive', true);
    }
  }, 'tasksController.isTaskSelected'),
  
  startPomodoro: function() {
    if(this.get('isReady')) {
      this.set('isReady', false);
      
      this.get('timer').start();
      this.get('tasksController').startPomodoro();
      
      this.set('isRunning', true);
    }
  },
  
  pausePomodoro: function() {
    if(this.get('isRunning')) {
      this.set('isRunning', false);
      
      this.get('timer').stop();
      
      this.set('isPaused', true);
    }
  },
  
  resumePomodoro: function() {
    if(this.get('isPaused')) {
      this.set('isPaused', false);
      
      this.get('timer').start();
      
      this.set('isRunning', true);
    }
  },
  
  cancelPomodoro: function() {
    if(this.get('isRunning')) {
      this.set('isRunning', false);
    } else if(this.get('isPaused')){
      this.set('isPaused', false);
    }
    
    this.get('tasksController').cancelPomodoro();
    this._setReady();
  },
  
  cancelPause: function() {
    this.set('isPausing', false);
    this.get('tasksController').cancelPomodoro();
    this._setReady();
  },
  
  _setReady: function() {
    this.get('timer')
      .reset()
      .set('duration', this.get('pomodoroDuration'));
      
    this.set('isReady', true);
  },
  
  _setPausing: function() {
    this.get('timer')
      .reset()
      .set('duration', this.get('pauseDuration'))
      .start();
    
    this.set('isPausing', true);
  },
  
  _timeUpdated: SC.observer(function() {
    if(this.get('remainingSeconds') <= 0) {
      this._timeOver();
    }
  }, 'remainingSeconds'),
  
  _timeOver: function() {
    if(this.get('isRunning')) {
      
      this.set('isRunning', false);
      this._setPausing();
      
    } else if(this.get('isPausing')) {
      
      this.set('isPausing', false);
      this.get('tasksController').finishedPomodoro();
      this._setReady();
      
    }
  }
  
});