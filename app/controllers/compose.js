// Plain "Controller" controller because compose is not backed by a model.
export default Ember.Controller.extend({
  to: null,
  subject: null,
  body: null,

  cannotSend: function() {
    // return validate(this.get('to'));
    return !this.get('to')
    // Allows Ember do understsand dependency graph.  Uniform access principle - templates don't care. This is why Ember may be faster than React.
  }.property('to'),

  actions: {
    send: function() {
      var message = this.getProperties('to', 'subject', 'body');

      $.ajax("/compose", {
        type: "POST",
        data: JSON.stringify(message)
      }).then(function(newConversation){
        // debugger;
      }, function(){
        // debugger;
      });
    }
  }

})