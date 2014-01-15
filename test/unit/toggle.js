QUnit.test("toggle off test", function(assert) {
  expect(3);
  $("<div></div>")
    .appendTo("#qunit-fixture")
    .bind('hide', function(event, e_args) {
      ok(true, "Event triggered");
      equal(e_args.type, "action", "toggle() is an action");
      equal(e_args.fatal, false, "toggle() does not destroy element");
    })
    .toggle();
});

QUnit.test("toggle on test (no event)", function(assert) {
  expect(0);
  $('<div style="display: none;"></div>')
    .appendTo("#qunit-fixture")
    .bind('hide', function() {
      ok(false, "Event shoudln't have triggered");
    })
    .toggle();
});

QUnit.asyncTest("fadeToggle off test", function(assert) {
  expect(3);
  $("<div></div>")
    .appendTo("#qunit-fixture")
    .bind('hide', function(event, e_args) {
      ok(true, "Event triggered");
      equal(e_args.type, "action", "fadeToggle() is an action");
      equal(e_args.fatal, false, "fadeToggle() does not destroy element");
    })
    .fadeToggle(start);
});

QUnit.asyncTest("fadeToggle on test (no event)", function(assert) {
  expect(0);
  $('<div style="display: none;"></div>')
    .appendTo("#qunit-fixture")
    .bind('hide', function() {
      ok(false, "Event shouldn't have triggered");
    })
    .fadeToggle(start);
});

QUnit.asyncTest("slideToggle off test", function(assert) {
  expect(3);
  $("<div></div>")
    .appendTo("#qunit-fixture")
    .bind('hide', function(event, e_args) {
      ok(true, "Event triggered");
      equal(e_args.type, "action", "slideToggle() is an action");
      equal(e_args.fatal, false, "slideToggle() does not destroy element");
    })
    .slideToggle(start);
});

QUnit.asyncTest("slideToggle on test (no event)", function(assert) {
  expect(0);
  $('<div style="display: none;"></div>')
    .appendTo("#qunit-fixture")
    .bind('hide', function() {
      ok(false, "Event shouldn't have triggered");
    })
    .slideToggle(start);
});