App.Timer = SC.Object.extend({

  elapsedSeconds: 0,
  duration: 0,
  
  _updateInterval: null,
  
  start: function() {
    if(this._updateInterval) {
      this.stop();
    }
    this._updateInterval = setInterval($.proxy(this._updateTime,this), 1000);
    
    return this;
  },
  
  stop: function() {
    clearInterval(this._updateInterval);
    this._updateInterval = null;
    
    return this;
  },
  
  reset: function() {
    this.stop();
    this.set('elapsedSeconds', 0);
    
    return this;
  },
  
  _updateTime: function() {
    this.set('elapsedSeconds', this.get('elapsedSeconds') + 1);
  }
  
});