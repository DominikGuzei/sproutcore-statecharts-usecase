
App.TasksMediator = SC.Object.extend({
  tasksController: null,
  
  contentBinding: 'tasksController.content',
  
  selectedTask: null,
  workingTask: null,
  
  isSelecting: true,
  isTaskSelected: false,
  isDeleting: false,
  isWorkingOnTask: false,
  
});