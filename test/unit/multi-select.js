module("Multi-Select");

QUnit.test("hide Test (hide)", function(assert) {
  expect(6);
  $("<div>Hello</div><div>Goodbye</div>")
    .appendTo("#qunit-fixture")
    .bind('showandtell.hide', function(event) {
      ok(true, "Event triggered");
      ok($(this).is(":hidden"), "Element is hidden");

      //Check that action and fatality is reported correctly
      equal(event.namespace, "hide", "hide() is an action");
    })
    .bind('showandtell.show', function(event) {
      if (event.namespace == "show")
      {
        //Make sure show event does not trigger!
        ok(false, "Show event shouldn't have triggered");
      }
    })
    .hide();
});
