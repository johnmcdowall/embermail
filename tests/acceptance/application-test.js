// This does setup and tear down for you.
acceptance('application');

test('displays user name', function() {
  expect(1);

  var yourName = "Ross";

  visit("/");

  andThen(function() {
    ok(contains("nav", "Hello %@".fmt(yourName)), "The nav bar contains the user's name");
  });
});