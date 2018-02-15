QUnit.module("Toggle");

QUnit.test("toggle off test (hide)", function(assert) {
  expect(3);
  $("<div>Hello</div>")
    .appendTo("#qunit-fixture")
    .bind('showandtell.hide', function(event) {
      ok(true, "Event triggered");
      ok($(this).is(":hidden"), "Element is hidden");
      equal(event.namespace, "hide", "toggle() is an action");
    })
    .bind('showandtell.show', function(event) {
      if (event.namespace == "show")
        ok(false, "Show event shouldn't have triggered");
    })
    .toggle();
});

QUnit.test("toggle on test (show)", function(assert) {
  expect(3);
  $('<div style="display: none;">Hello</div>')
    .appendTo("#qunit-fixture")
    .bind('showandtell.hide', function(event) {
      if (event.namespace == "hide")
        ok(false, "Hide event shoudln't have triggered");
    })
    .bind('showandtell.show', function(event) {
      ok(true, "Event triggered");
      ok($(this).is(":visible"), "Element is visible");
      equal(event.namespace, "show", "toggle() is an action");
    })
    .toggle();
});

QUnit.asyncTest("fadeToggle off test (hide)", function(assert) {
  expect(3);
  $("<div>Hello</div>")
    .appendTo("#qunit-fixture")
    .bind('showandtell.hide', function(event) {
      ok(true, "Event triggered");
      ok($(this).is(":hidden"), "Element is hidden");
      equal(event.namespace, "hide", "fadeToggle() is an action");
    })
    .bind('showandtell.show', function(event) {
      if (event.namespace == "show")
        ok(false, "Show event shouldn't have triggered");
    })
    .fadeToggle(start);
});

QUnit.asyncTest("fadeToggle on test (show)", function(assert) {
  expect(3);
  $('<div style="display: none;">Hello</div>')
    .appendTo("#qunit-fixture")
    .bind('showandtell.hide', function(event) {
      if (event.namespace == "hide")
        ok(false, "Hide event shouldn't have triggered");
    })
    .bind('showandtell.show', function(event) {
      ok(true, "Event triggered");
      ok($(this).is(":visible"), "Element is visible");
      equal(event.namespace, "show", "fadeToggle() is an action");
    })
    .fadeToggle(start);
});

QUnit.asyncTest("slideToggle off test (hide)", function(assert) {
  expect(3);
  $("<div>Hello</div>")
    .appendTo("#qunit-fixture")
    .bind('showandtell.hide', function(event) {
      ok(true, "Event triggered");
      ok($(this).is(":hidden"), "Element is hidden");
      equal(event.namespace, "hide", "slideToggle() is an action");
    })
    .bind('showandtell.show', function(event) {
      if (event.namespace == "show")
        ok(false, "Show event shouldn't have triggered");
    })
    .slideToggle(start);
});

QUnit.asyncTest("slideToggle on test (show)", function(assert) {
  expect(3);
  $('<div style="display: none;">Hello</div>')
    .appendTo("#qunit-fixture")
    .bind('showandtell.hide', function(event) {
      if (event.namespace == "hide")
        ok(false, "Event shouldn't have triggered");
    })
    .bind('showandtell.show', function(event) {
      ok(true, "Event triggered");
      ok($(this).is(":visible"), "Element is visible");
      equal(event.namespace, "show", "slideToggle() is an action");
    })
    .slideToggle(start);
});
