export default Ember.ObjectController.extend({
  // Walk up tree to get parent route data.
  needs: ['folders'],
  folders: Ember.computed.alias('controllers.folders'),

  actions: {
    goBack: function() {
      history.go(-1);
    },

    moveTo: function(value) {
      alert(value);
    }
  }
});