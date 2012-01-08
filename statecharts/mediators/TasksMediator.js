
App.TasksMediator = SC.Object.extend({
  tasksController: null,
  
  contentBinding: 'tasksController.content',
  
  selectedTaskBinding: 'tasksController.selectedTask',
  workingTaskBinding: 'tasksController.workingTask',
  
  isSelecting: true,
  isTaskSelected: false,
  isDeleting: false,
  isWorkingOnTask: false,
  
});