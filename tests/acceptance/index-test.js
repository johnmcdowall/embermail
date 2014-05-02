acceptance('index');

test('displays message list', function() {
  expect(1);

  visit("/");

  andThen(function() {
    equal(find('.table tbody tr').length, 10);
  });
});


test('clicking on a message', function() {
  expect(1);

  visit("/");

  click(".table tbody tr:eq(0)");

  andThen(function() {
    // equal(find('.table tbody tr').length, 10);
    ok(contains(".main", "Hello, this is message #1"), "The message body is displayed");
  });
});