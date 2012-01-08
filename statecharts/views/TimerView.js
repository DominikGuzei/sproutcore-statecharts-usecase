
App.TimerView = SC.View.extend({

  templateName: 'views_timer',
  elementId: 'timer',
  timerMediator: null,
  tasksMediator: null,
  statechart: null,
  
  remainingTimeString: SC.computed(function() {
    var remainingSeconds = this.get('timerMediator').get('remainingSeconds');
    var minutes = Math.floor(remainingSeconds / 60);
    var seconds = remainingSeconds % 60;
    
    if(minutes < 10) { 
      minutes = "0" + minutes;
    }
    if(seconds < 10) {
      seconds = "0" + seconds;
    }
    
    return minutes + ":" + seconds;
    
  }).property('timerMediator.remainingSeconds'),
  
  updateTimeBar: function() {
    var needed = this.get('timerMediator').get('neededSeconds');
    var elapsed = this.get('timerMediator').get('elapsedSeconds');
    var percent = 0;
    
    if(elapsed !== 0 && needed !== 0) {
      percent = elapsed / (needed / 100);
    }
    
    if(this.get('timerMediator').get('isPausing')) {
      var cssWidth = 100 - percent + "%";
    } else {
      var cssWidth = percent + "%";
    }
    
    $(this.get('element')).find('#time-bar').css({
      width: cssWidth
    });
  }.observes('timerMediator.remainingSeconds')

});