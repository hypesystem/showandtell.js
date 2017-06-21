module("Animate");

QUnit.asyncTest("Animate height 0 (no event)", function(assert) {
  expect(0);
  $("<div>Hello</div>")
    .appendTo("#qunit-fixture")
    .bind('showandtell.hide', function(e) {
      if (e.namespace == "hide")
        ok(false, "Hide event shouldn't have been triggered");
    })
    .bind('showandtell.show', function(e) {
      if (e.namespace == "show")
        ok(false, "Show event shoudln't have triggered");
    })
    .animate({ height: 0 }, start);
});
           
QUnit.asyncTest("Animate height hide (hide)", function(assert) {
  expect(3);
  $("<div>Hello</div>")
    .appendTo("#qunit-fixture")
    .bind('showandtell.hide', function(event) {
      ok(true, "Event triggered");
      ok($(this).is(":hidden"), "Element is hidden");
      equal(event.namespace, "hide", "height hide is an action");
    })
    .bind('show', function(event, e_args) {
      ok(false, "Show event shouldn't have triggered");
    })
    .animate({ height: "hide" }, start);
});

QUnit.asyncTest("Animate height show (show)", function(assert) {
  expect(3);
  $('<div style="display: none;">Hello</div>')
    .appendTo("#qunit-fixture")
    .bind('showandtell.show', function(event) {
      ok(true, "Event triggered");
      ok($(this).is(":visible"), "Element is visible");
      equal(event.namespace, "show", "height show is an action");
    })
    .bind('hide', function(event, e_args) {
      ok(false, "Hide event shouldn't have triggered");
    })
    .animate({ height: "show" }, start);
});

QUnit.asyncTest("Animate height toggle off (hide)", function(assert) {
  expect(3);
  $("<div>Hello</div>")
    .appendTo("#qunit-fixture")
    .bind('showandtell.hide', function(event) {
      ok(true, "Event triggered");
      ok($(this).is(":hidden"), "Element is hidden");
      equal(event.namespace, "hide", "height toggle off is an action");
    })
    .bind('show', function() {
      ok(false, "Show event shouldn't have triggered");
    })
    .animate({ height: "toggle" }, start);
});

QUnit.asyncTest("Animate height toggle on (show)", function(assert) {
  expect(3);
  $('<div style="display: none;">Hello</div>')
    .appendTo("#qunit-fixture")
    .bind('showandtell.show', function(event) {
      ok(true, "Event triggered");
      ok($(this).is(":visible"), "Element is visible");
      equal(event.namespace, "show", "height toggle on is an action");
    })
    .bind('hide', function() {
      ok(false, "Hide event shouldn't have triggered");
    })
    .animate({ height: "toggle" }, start);
});

QUnit.asyncTest("Animate opacity 0 (no event)", function(assert) {
  expect(0);
  $("<div>Hello</div>")
    .appendTo("#qunit-fixture")
    .bind('hide', function() {
      ok(false, "Hide event shouldn't have been triggered!");
    })
    .bind('show', function() {
      ok(false, "Show event shouldn't have been triggered");
    })
    .animate({ opacity: 0 }, start);
});
           
QUnit.asyncTest("Animate opacity hide (hide)", function(assert) {
  expect(3);
  $("<div>Hello</div>")
    .appendTo("#qunit-fixture")
    .bind('showandtell.hide', function(event) {
      ok(true, "Event triggered");
      ok($(this).is(":hidden"), "Element is hidden");
      equal(event.namespace, "hide", "opacity hide is an action");
    })
    .bind('show', function() {
      ok(false, "Show event shouldn't have been triggered");
    })
    .animate({ opacity: "hide" }, start);
});

QUnit.asyncTest("Animate opacity show (show)", function(assert) {
  expect(3);
  $('<div style="display: none;">Hello</div>')
    .appendTo("#qunit-fixture")
    .bind('showandtell.show', function(event) {
      ok(true, "Event triggered");
      ok($(this).is(":visible"), "Element is visible");
      equal(event.namespace, "show", "opacity show is an action");
    })
    .bind('hide', function() {
      ok(false, "Hide event shouldn't have triggered");
    })
    .animate({ opacity: "show" }, start);
});

QUnit.asyncTest("Animate opacity toggle off (hide)", function(assert) {
  expect(3);
  $("<div>Hello</div>")
    .appendTo("#qunit-fixture")
    .bind('showandtell.hide', function(event) {
      ok(true, "Event triggered");
      ok($(this).is(":hidden"), "Element is hidden");
      equal(event.namespace, "hide", "opacity toggle off is an action");
    })
    .bind('show', function() {
      ok(false, "Show event shouldn't have triggered");
    })
    .animate({ opacity: "toggle" }, start);
});

QUnit.asyncTest("Animate opacity toggle on (show)", function(assert) {
  expect(3);
  $('<div style="display: none;">Hello</div>')
    .appendTo("#qunit-fixture")
    .bind('showandtell.show', function(event) {
      ok(true, "Event triggered");
      ok($(this).is(":visible"), "Element is visible");
      equal(event.namespace, "show", "opacity toggle on is an action");
    })
    .bind('hide', function() {
      ok(false, "Hide event shouldn't have triggered");
    })
    .animate({ opacity: "toggle" }, start);
});

QUnit.asyncTest("Animate opacity 0.3 (no event)", function(assert) {
  expect(0);
  $("<div>Hello</div>")
    .appendTo("#qunit-fixture")
    .bind('hide', function() {
      ok(false, "Hide event shouldn't have been triggered");
    })
    .bind('show', function() {
      ok(false, "Show event shouldn't have triggered");
    })
    .animate({ opacity: 0.3 }, start);
});
