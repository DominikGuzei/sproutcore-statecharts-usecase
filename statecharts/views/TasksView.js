
App.TasksView = SC.View.extend({
  templateName: 'views_tasks',
  elementId: 'tasks',
  
  tasksMediator: null,
  statechart: null,
  
  contentBinding: 'tasksMediator.tasks'
});