var Router = Ember.Router.extend({
  location: 'auto'
});

Router.map(function() {
// First, a couple implicit routes are hit.
// this.application
  //  this.index route...
      this.route('message', {path: 'message/:message_id'});
      // Why "resource"?  Don't ask.
      this.resource('folders', function() {
        // Resource doesn't break as many things as a route.
        this.resource('folder', {path: ':folder_id'}, function() {
          // Below is easier for creating an index outlet.
          // Last routes are this.route.
          this.route('conversations', {path: '/'});
          this.route('conversation', {path: 'conversation/:conversation_id'});
        });
      });
      this.route('compose', {path: 'compose'});
});

export default Router;
