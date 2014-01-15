QUnit.asyncTest("Animate height 0 (no event)", function(assert) {
  expect(0);
  $("<div></div>")
    .appendTo("#qunit-fixture")
    .bind('hide', function() {
      ok(false, "Event shouldn't have been triggered");
    })
    .animate({ height: 0 }, start);
});
           
QUnit.asyncTest("Animate height hide", function(assert) {
  expect(3);
  $("<div></div>")
    .appendTo("#qunit-fixture")
    .bind('hide', function(event, e_args) {
      ok(true, "Event triggered");
      equal(e_args.type, "action", "height hide is an action");
      equal(e_args.fatal, false, "height hide does not destroy element");
    })
    .animate({ height: "hide" }, start);
});

QUnit.asyncTest("Animate height toggle off", function(assert) {
  expect(3);
  $("<div></div>")
    .appendTo("#qunit-fixture")
    .bind('hide', function(event, e_args) {
      ok(true, "Event triggered");
      equal(e_args.type, "action", "height toggle off is an action");
      equal(e_args.fatal, false, "height toggle off does not destroy element");
    })
    .animate({ height: "toggle" }, start);
});

QUnit.asyncTest("Animate height toggle on (no event)", function(assert) {
  expect(0);
  $('<div style="display: none;"></div>')
    .appendTo("#qunit-fixture")
    .bind('hide', function(event, e_args) {
      ok(true, "Event shouldn't have been triggered!");
    })
    .animate({ height: "toggle" }, start);
});

QUnit.asyncTest("Animate opacity 0 (no event)", function(assert) {
  expect(0);
  $("<div></div>")
    .appendTo("#qunit-fixture")
    .bind('hide', function() {
      ok(true, "Event shouldn't have been triggered!");
    })
    .animate({ opacity: 0 }, start);
});
           
QUnit.asyncTest("Animate opacity hide", function(assert) {
  expect(3);
  $("<div></div>")
    .appendTo("#qunit-fixture")
    .bind('hide', function(event, e_args) {
      ok(true, "Event triggered");
      equal(e_args.type, "action", "opacity hide is an action");
      equal(e_args.fatal, false, "opacity hide does not destroy element");
    })
    .animate({ opacity: "hide" }, start);
});

QUnit.asyncTest("Animate opacity toggle off", function(assert) {
  expect(3);
  $("<div></div>")
    .appendTo("#qunit-fixture")
    .bind('hide', function(event, e_args) {
      ok(true, "Event triggered");
      equal(e_args.type, "action", "opacity toggle off is an action");
      equal(e_args.fatal, false, "opacity toggle off does not destroy element");
    })
    .animate({ opacity: "toggle" }, start);
});

QUnit.asyncTest("Animate opacity toggle on (no event)", function(assert) {
  expect(0);
  $('<div style="display: none;"></div>')
    .appendTo("#qunit-fixture")
    .bind('hide', function() {
      ok(true, "Event shouldn't have been triggered");
    })
    .animate({ opacity: "toggle" }, start);
});

QUnit.asyncTest("Animate opacity 0.3 (no event)", function(assert) {
  expect(0);
  $("<div></div>")
    .appendTo("#qunit-fixture")
    .bind('hide', function() {
      ok(true, "Event shouldn't have been triggered");
    })
    .animate({ opacity: 0.3 }, start);
});