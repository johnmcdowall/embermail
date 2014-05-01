export default Ember.Route.extend({
  model: function(params) {
    return $.getJSON("/v1/messages/" + params.message_id);
  }
});