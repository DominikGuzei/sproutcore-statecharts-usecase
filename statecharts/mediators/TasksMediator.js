
App.TasksMediator = SC.Object.extend({
  tasksController: null,
  
  tasksBinding: 'tasksController.content',
  
  selectedTask: null,
  workingTask: null,
  
  isSelecting: true,
  isTaskSelected: false,
  isDeleting: false,
  isWorkingOnTask: false,
  
});