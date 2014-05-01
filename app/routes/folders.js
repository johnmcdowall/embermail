export default Ember.Route.extend({
  model: function() {
    return $.getJSON("/v3/folders");
  }
});