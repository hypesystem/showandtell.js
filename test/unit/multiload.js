QUnit.test("hide triggers only once", function(assert) {
  expect(1);
  $("<div>Hello</div>")
    .appendTo("#qunit-fixture")
    .bind('hide', function() {
      ok(true, "Hide event triggered");
    })
    .hide();
});

QUnit.test("show triggers only once", function(assert) {
  expect(1);
  $('<div style="display: none;">Hello</div>')
    .appendTo("#qunit-fixture")
    .bind('show', function() {
      //Make sure show event does not trigger!
      ok(true, "Show event triggered");
    })
    .show();
});

QUnit.test("remove triggers only once", function(assert) {
    expect(1);
    $('<div>Hello</div>')
        .appendTo("#qunit-fixture")
        .bind('remove', function() {
            //Make sure show event does not trigger!
            ok(true, "Show event triggered");
        })
        .remove();
});