
App.TasksMediator = SC.Object.extend({
  tasksController: null,
  
  selectedTaskBinding: 'tasksController.selectedTask',
  workingTaskBinding: 'tasksController.workingTask',
  
  isSelectingBinding: 'tasksController.isSelecting',
  isTaskSelectedBinding: 'tasksController.isTaskSelected',
  isDeletingBinding: 'tasksController.isDeleting',
  isWorkingOnTaskBinding: 'tasksController.isWorkingOnTask',
});