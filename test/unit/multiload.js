module("Multiload");

QUnit.test("hide triggers only once", function(assert) {
  expect(1);
  $("<div>Hello</div>")
    .appendTo("#qunit-fixture")
    .bind('showandtell', function(event) {
      if (event.reason == "hide")
        ok(true, "Hide event triggered");
    })
    .hide();
});

QUnit.test("show triggers only once", function(assert) {
  expect(1);
  $('<div style="display: none;">Hello</div>')
    .appendTo("#qunit-fixture")
    .bind('showandtell', function(event) {
      if (event.reason == "show")
      {
        //Make sure show event does not trigger!
        ok(true, "Show event triggered");
      }
    })
    .show();
});

QUnit.test("remove triggers only once", function(assert) {
    expect(1);
    $('<div>Hello</div>')
        .appendTo("#qunit-fixture")
        .bind('showandtell', function(event) {
          if (event.reason == "remove")
          {
            //Make sure remove event does not trigger!
            ok(true, "Remove event triggered");
          }
        })
        .remove();
});
