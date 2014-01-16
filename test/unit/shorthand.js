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
    .bind('show', function(event, e_args) {
      //Make sure show event does not trigger!
      ok(false, "Show event shouldn't have triggered");
    })
    .hide();
});

QUnit.test("show Test", function(assert) {
  expect(2);
  $('<div style="display: none;"></div>')
    .appendTo("#qunit-fixture")
    .bind('show', function(event, e_args) {
      ok(true, "Event triggered");
      equal(e_args.type, "action", "show() is an action");
    })
    .bind('hide', function() {
      ok(false, "Hide event shouldn't have triggered");
    })
    .show();
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
    .bind('show', function() {
      ok(false, "Show event shouldn't have triggered");
    })
    .fadeOut(start);
});

QUnit.test("fadeIn Test", function(assert) {
  expect(2);
  $('<div style="display: none;"></div>')
    .appendTo("#qunit-fixture")
    .bind('show', function(event, e_args) {
      ok(true, "Event triggered");
      equal(e_args.type, "action", "fadeIn() is an action");
    })
    .bind('hide', function() {
      ok(false, "Hide event shouldn't have triggered");
    })
    .fadeIn();
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
    .bind('show', function() {
      ok(false, "Show event shouldn't have triggered");
    })
    .slideUp(start);
});

QUnit.test("slideDown Test", function(assert) {
  expect(2);
  $('<div style="display: none;"></div>')
    .appendTo("#qunit-fixture")
    .bind('show', function(event, e_args) {
      ok(true, "Event triggered");
      equal(e_args.type, "action", "slideDown() is an action");
    })
    .bind('hide', function() {
      ok(false, "Hide event shouldn't have triggered");
    })
    .slideDown();
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
