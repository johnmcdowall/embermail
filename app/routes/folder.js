export default Ember.Route.extend({
  model: function(params) {
    return $.getJSON("/v3/folders/" + params.folder_id);
  }
});