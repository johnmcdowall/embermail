acceptance('message');

test('displays message', function() {
  expect(1);

  visit("/message/1");

  andThen(function() {
    // debugger;
    ok(contains(".main", "Hello, this is message #2"), "The message body is displayed");
  });
});
