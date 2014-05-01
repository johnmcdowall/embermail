export default Ember.Route.extend({
  model: function() {
    return {
      user: {
        name: "Erik",
        email: "erik@prototypal.io"
      }
    };
  }
});