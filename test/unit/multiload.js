QUnit.module("Multiload");

QUnit.test("hide triggers only once", function(assert) {
  expect(1);
  $("<div>Hello</div>")
    .appendTo("#qunit-fixture")
    .bind('showandtell.hide', function(event) {
      if (event.namespace == "hide")
        ok(true, "Hide event triggered");
    })
    .hide();
});

QUnit.test("show triggers only once", function(assert) {
  expect(1);
  $('<div style="display: none;">Hello</div>')
    .appendTo("#qunit-fixture")
    .bind('showandtell.show', function(event) {
      if (event.namespace == "show")
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
        .bind('showandtell.remove', function(event) {
          if (event.namespace == "remove")
          {
            //Make sure remove event does not trigger!
            ok(true, "Remove event triggered");
          }
        })
        .remove();
});
