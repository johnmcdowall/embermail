export default Ember.Component.extend({
  tagName: 'button',
  classNames: ["btn", "btn-default"],
  // This is cool.
  attributeBindings: ['disabled'],

  // Documenting our interface.
  disabled: false,
  pressed: null,
  pressedArg: null,

  // This works like a jQuery handler - under the hood is jQuery event delegation.
  click: function(e) {
    // You can see there is a naming convention.
    var arg = this.get('pressedArg');
    if (arg) {
      this.sendAction('pressed', arg);
    } else {
      this.sendAction('pressed');
    }
  }
});