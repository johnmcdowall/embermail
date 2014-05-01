// import { moduleFor, test } from "ember-qunit";

// moduleFor('route:folder');

// test('model hook', function() {
//   expect(4);

//   var route = this.subject(),
//       params = {folder_id: 'inbox'},
//       model = route.model(params);

//   ok(model, "Model was returned");
//   ok(model && typeof model.then === 'function', "Model hook returned a thenable");

//   stop();

//   model.then(function(json) {
//     start();

//     ok(json, "Data was returned from the API");
//     equal(json.id, 'inbox');
//   }, function() {
//     start();

//     ok(false, "The API call errored out");
//   });
// });