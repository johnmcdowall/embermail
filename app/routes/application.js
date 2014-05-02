export default Ember.Route.extend({
  // Inside here we have instance properties and methods.
  // Model hook. Ember route defines .model method. We're overriding already defined routing method.
  // This is a nice place for global data, since ember app will always boot and execute this model
  model: function() {
    return {
      user: {
        name: "Ross",
        email: "ross@scienceexchange.com"
      }
    };
  }
});