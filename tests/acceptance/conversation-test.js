acceptance('conversation');

test('displays message', function() {
  expect(1);

  visit("/conversation/1");

  andThen(function() {
    ok(contains(".main", "Hello, this is message #1"), "The message body is displayed");
  });
});
