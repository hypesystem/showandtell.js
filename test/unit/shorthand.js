QUnit.test("hide Test", function(assert) {
  expect(3);
  $("<div></div>")
    .appendTo("#qunit-fixture")
    .bind('hide', function(event, e_args) {
      //Event triggered!
      ok(true, "Event triggered");
      
      //Check that action and fatality is contained correctly
      equal(e_args.type, "action", "hide() is an action");
      equal(e_args.fatal, false, "hide() is non-fatal (does not remove element)");
    })
    .hide();
});

QUnit.asyncTest("fadeOut Test", function(assert) {
  expect(3);
  $("<div></div>")
    .appendTo("#qunit-fixture")
    .bind('hide', function(event, e_args) {
      ok(true, "Event triggered");
      equal(e_args.type, "action", "fadeOut() is an action");
      equal(e_args.fatal, false, "fadeOut() does not destroy element");
    })
    .fadeOut(start);
});

QUnit.asyncTest("slideUp Test", function(assert) {
  expect(3);
  $("<div></div>")
    .appendTo("#qunit-fixture")
    .bind('hide', function(event, e_args) {
      ok(true, "Event triggered");
      equal(e_args.type, "action", "slideUp() is an action");
      equal(e_args.fatal, false, "slideUp() does not destroy element");
    })
    .slideUp(start);
});

QUnit.test("remove Test", function(assert) {
  expect(3);
  $("<div></div>")
    .appendTo("#qunit-fixture")
    .bind('hide', function(event, e_args) {
      ok(true, "Event triggered");
      equal(e_args.type, "action", "remove() is an action");
      equal(e_args.fatal, true, "remove() destroys element");
    })
    .remove();
});
