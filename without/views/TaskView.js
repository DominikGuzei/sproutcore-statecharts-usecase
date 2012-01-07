
App.TaskView = SC.View.extend({
  templateName: 'views_task',
  classNames: ['task'],
  
  editButton: SC.Button.extend({
    click: function() {
      this._getTasksController().editTask(parentView.get('content'));
    }
  }),
  
  click: function() {
    this._getTasksController().taskSelected(this.get('content'));
  },
  
  selectedTaskChanged: SC.observer(function() {
    var selectedTask = this._getTasksMediator().get('selectedTask');
    
    if(this.get('content') === selectedTask) {
      this.$().addClass('selected');
    } else {
      this.$().removeClass('selected');
    }
  }, 'contentView.tasksMediator.selectedTask'),
  
  _getTasksController: function() {
    return this.get('contentView').get('tasksController');
  },
  
  _getTasksMediator: function() {
    return this.get('contentView').get('tasksMediator');
  }
});