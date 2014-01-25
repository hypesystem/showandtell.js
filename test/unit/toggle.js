QUnit.test("toggle off test (hide)", function(assert) {
  expect(3);
  $("<div>Hello</div>")
    .appendTo("#qunit-fixture")
    .bind('hide', function(event, e_args) {
      ok(true, "Event triggered");
      ok($(this).is(":hidden"), "Element is hidden");
      equal(e_args.type, "action", "toggle() is an action");
    })
    .bind('show', function() {
      ok(false, "Show event shouldn't have triggered");
    })
    .toggle();
});

QUnit.test("toggle on test (show)", function(assert) {
  expect(3);
  $('<div style="display: none;">Hello</div>')
    .appendTo("#qunit-fixture")
    .bind('hide', function() {
      ok(false, "Hide event shoudln't have triggered");
    })
    .bind('show', function(event, e_args) {
      ok(true, "Event triggered");
      ok($(this).is(":visible"), "Element is visible");
      equal(e_args.type, "action", "toggle() is an action");
    })
    .toggle();
});

QUnit.asyncTest("fadeToggle off test (hide)", function(assert) {
  expect(3);
  $("<div>Hello</div>")
    .appendTo("#qunit-fixture")
    .bind('hide', function(event, e_args) {
      ok(true, "Event triggered");
      ok($(this).is(":hidden"), "Element is hidden");
      equal(e_args.type, "action", "fadeToggle() is an action");
    })
    .bind('show', function() {
      ok(false, "Show event shouldn't have triggered");
    })
    .fadeToggle(start);
});

QUnit.asyncTest("fadeToggle on test (show)", function(assert) {
  expect(3);
  $('<div style="display: none;">Hello</div>')
    .appendTo("#qunit-fixture")
    .bind('hide', function() {
      ok(false, "Hide event shouldn't have triggered");
    })
    .bind('show', function(event, e_args) {
      ok(true, "Event triggered");
      ok($(this).is(":visible"), "Element is visible");
      equal(e_args.type, "action", "fadeToggle() is an action");
    })
    .fadeToggle(start);
});

QUnit.asyncTest("slideToggle off test (hide)", function(assert) {
  expect(3);
  $("<div>Hello</div>")
    .appendTo("#qunit-fixture")
    .bind('hide', function(event, e_args) {
      ok(true, "Event triggered");
      ok($(this).is(":hidden"), "Element is hidden");
      equal(e_args.type, "action", "slideToggle() is an action");
    })
    .bind('show', function() {
      ok(false, "Show event shouldn't have triggered");
    })
    .slideToggle(start);
});

QUnit.asyncTest("slideToggle on test (show)", function(assert) {
  expect(3);
  $('<div style="display: none;">Hello</div>')
    .appendTo("#qunit-fixture")
    .bind('hide', function() {
      ok(false, "Event shouldn't have triggered");
    })
    .bind('show', function(event, e_args) {
      ok(true, "Event triggered");
      ok($(this).is(":visible"), "Element is visible");
      equal(e_args.type, "action", "slideToggle() is an action");
    })
    .slideToggle(start);
});