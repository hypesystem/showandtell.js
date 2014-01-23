QUnit.test("hide Test (hide)", function(assert) {
  expect(4);
  $("<div>Hello</div>")
    .appendTo("#qunit-fixture")
    .bind('hide', function(event, e_args) {
      ok(true, "Event triggered");
      ok($(this).is(":hidden"), "Element is hidden");
      
      //Check that action and fatality is reported correctly
      equal(e_args.type, "action", "hide() is an action");
      equal(e_args.fatal, false, "hide() is non-fatal (does not remove element)");
    })
    .bind('show', function(event, e_args) {
      //Make sure show event does not trigger!
      ok(false, "Show event shouldn't have triggered");
    })
    .hide();
});

QUnit.test("hide invisible Test (no event)", function(assert) {
  expect(0);
  $('<div style="display: none;">Hello</div>')
    .appendTo("#qunit-fixture")
    .bind('hide', function(event, e_args) {
      ok(false, "Hide event shouldn't have triggered");
    })
    .bind('show', function(event, e_args) {
      //Make sure show event does not trigger!
      ok(false, "Show event shouldn't have triggered");
    })
    .hide();
});

QUnit.test("show Test (show)", function(assert) {
  expect(3);
  $('<div style="display: none;">Hello</div>')
    .appendTo("#qunit-fixture")
    .bind('show', function(event, e_args) {
      ok(true, "Event triggered");
      ok($(this).is(":visible"), "Element is visible");
      equal(e_args.type, "action", "show() is an action");
    })
    .bind('hide', function() {
      ok(false, "Hide event shouldn't have triggered");
    })
    .show();
});

QUnit.test("show visible Test (no event)", function(assert) {
  expect(0);
  $('<div>Hello</div>')
    .appendTo("#qunit-fixture")
    .bind('show', function() {
      ok(false, "Show event shouldn't have triggered");
    })
    .bind('hide', function() {
      ok(false, "Hide event shouldn't have triggered");
    })
    .show();
});

QUnit.asyncTest("fadeOut Test (hide)", function(assert) {
  expect(4);
  $("<div>Hello</div>")
    .appendTo("#qunit-fixture")
    .bind('hide', function(event, e_args) {
      ok(true, "Event triggered");
      ok($(this).is(":hidden"), "Element is hidden");
      equal(e_args.type, "action", "fadeOut() is an action");
      equal(e_args.fatal, false, "fadeOut() does not destroy element");
    })
    .bind('show', function() {
      ok(false, "Show event shouldn't have triggered");
    })
    .fadeOut(start);
});

QUnit.asyncTest("fadeOut invisible Test (no event)", function(assert) {
  expect(0);
  $('<div style="display: none;">Hello</div>')
    .appendTo("#qunit-fixture")
    .bind('hide', function() {
      ok(false, "Hide event shouldn't have triggered");
    })
    .bind('show', function() {
      ok(false, "Show event shouldn't have triggered");
    })
    .fadeOut(start);
});

QUnit.asyncTest("fadeIn Test (show)", function(assert) {
  expect(3);
  $('<div style="display: none;">Hello</div>')
    .appendTo("#qunit-fixture")
    .bind('show', function(event, e_args) {
      ok(true, "Event triggered");
      ok($(this).is(":visible"), "Element is visible");
      equal(e_args.type, "action", "fadeIn() is an action");
    })
    .bind('hide', function() {
      ok(false, "Hide event shouldn't have triggered");
    })
    .fadeIn(start);
});

QUnit.asyncTest("fadeIn visible Test (no event)", function(assert) {
  expect(0);
  $('<div>Hello</div>')
    .appendTo("#qunit-fixture")
    .bind('show', function() {
      ok(false, "Show event shouldn't have triggered");
    })
    .bind('hide', function() {
      ok(false, "Hide event shouldn't have triggered");
    })
    .fadeIn(start);
});

QUnit.asyncTest("slideUp Test (hide)", function(assert) {
  expect(4);
  $("<div>Hello</div>")
    .appendTo("#qunit-fixture")
    .bind('hide', function(event, e_args) {
      ok(true, "Event triggered");
      ok($(this).is(":hidden"), "Element is hidden");
      equal(e_args.type, "action", "slideUp() is an action");
      equal(e_args.fatal, false, "slideUp() does not destroy element");
    })
    .bind('show', function() {
      ok(false, "Show event shouldn't have triggered");
    })
    .slideUp(start);
});

QUnit.asyncTest("slideUp invisible Test (no event)", function(assert) {
  expect(0);
  $('<div style="display: none;">Hello</div>')
    .appendTo("#qunit-fixture")
    .bind('hide', function(event, e_args) {
      ok(false, "Hide event shouldn't have triggered");
    })
    .bind('show', function() {
      ok(false, "Show event shouldn't have triggered");
    })
    .slideUp(start);
});

QUnit.asyncTest("slideDown Test (show)", function(assert) {
  expect(3);
  $('<div style="display: none;">Hello</div>')
    .appendTo("#qunit-fixture")
    .bind('show', function(event, e_args) {
      ok(true, "Event triggered");
      ok($(this).is(":visible"), "Element is visible");
      equal(e_args.type, "action", "slideDown() is an action");
    })
    .bind('hide', function() {
      ok(false, "Hide event shouldn't have triggered");
    })
    .slideDown(start);
});

QUnit.asyncTest("slideDown visible Test (no event)", function(assert) {
  expect(0);
  $('<div>Hello</div>')
    .appendTo("#qunit-fixture")
    .bind('show', function(event, e_args) {
      ok(false, "Show event shouldn't have triggered");
    })
    .bind('hide', function() {
      ok(false, "Hide event shouldn't have triggered");
    })
    .slideDown(start);
});

QUnit.test("remove Test (hide)", function(assert) {
  expect(3);
  $("<div>Hello</div>")
    .appendTo("#qunit-fixture")
    .bind('hide', function(event, e_args) {
      ok(true, "Event triggered");
      equal(e_args.type, "action", "remove() is an action");
      equal(e_args.fatal, true, "remove() destroys element");
    })
    .bind('show', function() {
      ok(false, "Show event shouldn't have triggered");
    })
    .remove();
});

QUnit.test("remove invisible Test (unspecified behaviour)", function(assert) {
  expect(999);
  $('<div style="display: none;">Hello</div>')
    .appendTo("#qunit-fixture")
    .remove();
  ok(false, "What should remove do on invisible objects? Sending a hide event is misleading, but it is still removed...");
});
