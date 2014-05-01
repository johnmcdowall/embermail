var Router = Ember.Router.extend({
  location: 'auto'
});

Router.map(function() {
  // this.route('message', {path: 'message/:message_id'});

  // this.route('conversation', {path: 'conversation/:conversation_id'});

  // this.resource('folders', function() {
  //   this.resource('folder', {path: ":folder_id"}, function() {
  //     this.resource('conversations', {path: '/'});
  //     this.resource('conversation', {path: 'conversation/:conversation_id'});
  //   });
  // });
});

export default Router;
