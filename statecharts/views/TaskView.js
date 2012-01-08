
App.TaskView = SC.View.extend({
  templateName: 'views_task',
  classNames: ['task'],
  
  click: function() {
    this.get('parentView').get('statechart').send('taskSelected', this.get('content'));
  },
  
  selectedTaskChanged: SC.observer(function() {
    if(!this.get('parentView')) { return; }
    
    var selectedTask = this.get('parentView').get('tasksMediator').get('selectedTask');
    
    if(this.get('content') === selectedTask) {
      this.$().addClass('selected');
    } else {
      this.$().removeClass('selected');
    }
  }, 'contentView.tasksMediator.selectedTask')
});