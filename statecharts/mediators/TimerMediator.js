
App.TimerMediator = SC.Object.extend({
  timerController: null,
  
  elapsedSecondsBinding: 'timerController.elapsedSeconds',
  neededSecondsBinding: 'timerController.neededSeconds',
  remainingSecondsBinding: 'timerController.remainingSeconds',
  
  isInactiveBinding: 'timerController.isInactive',
  isReadyBinding: 'timerController.isReady',
  isRunningBinding: 'timerController.isRunning',
  isPausedBinding: 'timerController.isPaused',
  isPausingBinding: 'timerController.isPausing'
  
});