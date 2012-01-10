App.TimerController = SC.Object.extend({

  timer: null,
  statechart: null,
  
  pomodoroDuration: 5,
  pauseDuration: 5,
  
  elapsedSecondsBinding: 'timer.elapsedSeconds',
  neededSecondsBinding: 'timer.duration',
  
  remainingSeconds: SC.computed(function() {
    return this.get('neededSeconds') - this.get('elapsedSeconds');
  }).property('elapsedSeconds', 'neededSeconds'),
  
  reset: function() {
    this.get('timer')
      .reset()
      .set('duration', this.get('pomodoroDuration'))
  },
  
  start: function() {
    this.get('timer').start();
  },
  
  stop: function() {
    this.get('timer').stop();
  },
  
  startPausing: function() {
    this.get('timer')
      .reset()
      .set('duration', this.get('pauseDuration'))
      .start();
  },
  
  _timeUpdated: SC.observer(function() {
    if(this.get('remainingSeconds') <= 0) {
      this._timeOver();
    }
  }, 'remainingSeconds'),
  
  _timeOver: function() {
    this.get('statechart').sendAction('timerFinished');
  }
  
});