export default Ember.Route.extend({
  redirect: function() {
    // replaceWith = don't leave an item in the history stack
    this.replaceWith('folder', 'inbox'); // second param is ID
  }
});