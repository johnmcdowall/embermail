export default Ember.Route.extend({
  model: function(params) {
    return $.getJSON("/v2/conversations/" + params.conversation_id);
  }
});