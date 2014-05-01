import { moduleFor, test } from "ember-qunit";

moduleFor('route:application');

test('model hook', function() {
  expect(4);

  var route = this.subject(),
      model = route.model();

  ok(model, "Model was returned");
  ok(model && model.user, "`user` key exists in model data");
  equal(model && model.user && model.user.name, "Erik");
  equal(model && model.user && model.user.email, "erik@prototypal.io");
});