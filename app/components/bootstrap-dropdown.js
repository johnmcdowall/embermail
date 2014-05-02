export default Ember.Component.extend({

  didInsertElement: function() {
    // Ember has 'this' for scoping, so you aren't leaking into the global scope.
    // The dollar sign here means jQuery.
    this.$('.dropdown-toggle').dropdown();
  }
});