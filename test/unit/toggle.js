module("Toggle");

QUnit.test("toggle off test (hide)", function(assert) {
  expect(3);
  $("<div>Hello</div>")
    .appendTo("#qunit-fixture")
    .bind('showandtell', function(event) {
      ok(true, "Event triggered");
      ok($(this).is(":hidden"), "Element is hidden");
      equal(event.reason, "hide", "toggle() is an action");
    })
    .bind('showandtell', function(event) {
      if (event.reason == "show")
        ok(false, "Show event shouldn't have triggered");
    })
    .toggle();
});

QUnit.test("toggle on test (show)", function(assert) {
  expect(3);
  $('<div style="display: none;">Hello</div>')
    .appendTo("#qunit-fixture")
    .bind('showandtell', function(event) {
      if (event.reason == "hide")
        ok(false, "Hide event shoudln't have triggered");
    })
    .bind('showandtell', function(event) {
      ok(true, "Event triggered");
      ok($(this).is(":visible"), "Element is visible");
      equal(event.reason, "show", "toggle() is an action");
    })
    .toggle();
});

QUnit.asyncTest("fadeToggle off test (hide)", function(assert) {
  expect(3);
  $("<div>Hello</div>")
    .appendTo("#qunit-fixture")
    .bind('showandtell', function(event) {
      ok(true, "Event triggered");
      ok($(this).is(":hidden"), "Element is hidden");
      equal(event.reason, "hide", "fadeToggle() is an action");
    })
    .bind('showandtell', function(event) {
      if (event.reason == "show")
        ok(false, "Show event shouldn't have triggered");
    })
    .fadeToggle(start);
});

QUnit.asyncTest("fadeToggle on test (show)", function(assert) {
  expect(3);
  $('<div style="display: none;">Hello</div>')
    .appendTo("#qunit-fixture")
    .bind('showandtell', function(event) {
      if (event.reason == "hide")
        ok(false, "Hide event shouldn't have triggered");
    })
    .bind('showandtell', function(event) {
      ok(true, "Event triggered");
      ok($(this).is(":visible"), "Element is visible");
      equal(event.reason, "show", "fadeToggle() is an action");
    })
    .fadeToggle(start);
});

QUnit.asyncTest("slideToggle off test (hide)", function(assert) {
  expect(3);
  $("<div>Hello</div>")
    .appendTo("#qunit-fixture")
    .bind('showandtell', function(event) {
      ok(true, "Event triggered");
      ok($(this).is(":hidden"), "Element is hidden");
      equal(event.reason, "hide", "slideToggle() is an action");
    })
    .bind('show', function(event) {
      if (event.reason == "show")
        ok(false, "Show event shouldn't have triggered");
    })
    .slideToggle(start);
});

QUnit.asyncTest("slideToggle on test (show)", function(assert) {
  expect(3);
  $('<div style="display: none;">Hello</div>')
    .appendTo("#qunit-fixture")
    .bind('showandtell', function(event) {
      if (event.reason == "hide")
        ok(false, "Event shouldn't have triggered");
    })
    .bind('showandtell', function(event) {
      ok(true, "Event triggered");
      ok($(this).is(":visible"), "Element is visible");
      equal(event.reason, "show", "slideToggle() is an action");
    })
    .slideToggle(start);
});
