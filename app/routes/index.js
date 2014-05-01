export default Ember.Route.extend({
  model: function() {
    return $.getJSON("/v2/conversations");
  },

  redirect: function() {
    this.replaceWith('folder', 'inbox');
  }
});
