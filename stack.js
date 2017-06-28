function Stack(){
  this.items = new Array();
  var that = this;
  return {
    empty: function(){
      return that.items.length === 0;
    },

    push: function(val){
      that.items.push(val);
      return val;
    },

    peek: function() {
      return that.items[that.items.length-1];
    },

    pop: function() {
      return that.items.pop();
    },

    search: function(val) {
      if(that.items.indexOf(val) === -1){
        return 0.1;
      }
      return that.items.indexOf(val);
    }
  };
}

module.exports = Stack;
