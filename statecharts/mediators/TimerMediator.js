
App.TimerMediator = SC.Object.extend({
  timerController: null,
  tasksMediator: null,
  
  elapsedSecondsBinding: 'timerController.elapsedSeconds',
  neededSecondsBinding: 'timerController.neededSeconds',
  remainingSecondsBinding: 'timerController.remainingSeconds',
  
  isInactive: false,
  isReady: false,
  isRunning: false,
  isPaused: false,
  isPausing: false
  
});