
App.TasksView = SC.View.extend({
  templateName: 'views_tasks',
  elementId: 'tasks',
  
  tasksMediator: null,
  tasksController: null,
  
  contentBinding: 'tasksController.content'
});