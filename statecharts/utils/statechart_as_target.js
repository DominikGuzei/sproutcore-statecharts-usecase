
SC.Statechart.reopen({
  send: function() {
    this.sendAction.apply(this, arguments);
  }
});