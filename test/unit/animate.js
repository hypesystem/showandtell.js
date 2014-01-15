QUnit.asyncTest("Animate height 0", function(assert) {
  expect(4);
  $("<div></div>")
    .appendTo("#qunit-fixture")
    .bind('hide', function() {
      ok(true, "Event triggered");
      var t = Array.prototype.slice.call(arguments, 1);
      notEqual($.inArray("css",t),-1, "Css specified");
      notEqual($.inArray("height",t),-1, "Height specified");
      notEqual($.inArray("animate",t),-1, "Animate specified");
    })
    .animate({ height: 0 }, function() { start(); });
});
           
QUnit.asyncTest("Animate height hide", function(assert) {
  expect(4);
  $("<div></div>")
    .appendTo("#qunit-fixture")
    .bind('hide', function() {
      ok(true, "Event triggered");
      var t = Array.prototype.slice.call(arguments, 1);
      notEqual($.inArray("css",t),-1, "Css specified");
      notEqual($.inArray("height",t),-1, "Height specified");
      notEqual($.inArray("animate",t),-1, "Animate specified");
    })
    .animate({ height: "hide" }, function() { start(); });
});

QUnit.asyncTest("Animate height toggle off", function(assert) {
  expect(4);
  $("<div></div>")
    .appendTo("#qunit-fixture")
    .bind('hide', function() {
      ok(true, "Event triggered");
      var t = Array.prototype.slice.call(arguments, 1);
      notEqual($.inArray("css",t),-1, "Css specified");
      notEqual($.inArray("height",t),-1, "Height specified");
      notEqual($.inArray("animate",t),-1, "Animate specified");
    })
    .animate({ height: "toggle" }, function() { start(); });
});

QUnit.asyncTest("Animate height toggle on (no event)", function(assert) {
  expect(0);
  $('<div style="height: 0;"></div>')
    .appendTo("#qunit-fixture")
    .bind('hide', function() {
      ok(true, "Event shouldn't have been triggered");
    })
    .animate({ height: "toggle" }, function() { start(); });
});

QUnit.asyncTest("Animate height 5 (no event)", function(assert) {
  expect(0);
  $("<div></div>")
    .appendTo("#qunit-fixture")
    .bind('hide', function() {
      ok(true, "Event shouldn't have been triggered");
    })
    .animate({ height: 5 }, function() { start(); });
});

QUnit.asyncTest("Animate opacity 0", function(assert) {
  expect(4);
  $("<div></div>")
    .appendTo("#qunit-fixture")
    .bind('hide', function() {
      ok(true, "Event triggered");
      var t = Array.prototype.slice.call(arguments, 1);
      notEqual($.inArray("css",t),-1, "Css specified");
      notEqual($.inArray("opacity",t),-1, "Height specified");
      notEqual($.inArray("animate",t),-1, "Animate specified");
    })
    .animate({ opacity: 0 }, function() { start(); });
});
           
QUnit.asyncTest("Animate opacity hide", function(assert) {
  expect(4);
  $("<div></div>")
    .appendTo("#qunit-fixture")
    .bind('hide', function() {
      ok(true, "Event triggered");
      var t = Array.prototype.slice.call(arguments, 1);
      notEqual($.inArray("css",t),-1, "Css specified");
      notEqual($.inArray("opacity",t),-1, "Height specified");
      notEqual($.inArray("animate",t),-1, "Animate specified");
    })
    .animate({ opacity: "hide" }, function() { start(); });
});

QUnit.asyncTest("Animate opacity toggle off", function(assert) {
  expect(4);
  $("<div></div>")
    .appendTo("#qunit-fixture")
    .bind('hide', function() {
      ok(true, "Event triggered");
      var t = Array.prototype.slice.call(arguments, 1);
      notEqual($.inArray("css",t),-1, "Css specified");
      notEqual($.inArray("opacity",t),-1, "Height specified");
      notEqual($.inArray("animate",t),-1, "Animate specified");
    })
    .animate({ opacity: "toggle" }, function() { start(); });
});

QUnit.asyncTest("Animate opacity toggle on (no event)", function(assert) {
  expect(0);
  $('<div style="opacity: 0;"></div>')
    .appendTo("#qunit-fixture")
    .bind('hide', function() {
      ok(true, "Event shouldn't have been triggered");
    })
    .animate({ opacity: "toggle" }, function() { start(); });
});

QUnit.asyncTest("Animate opacity 0.3 (no event)", function(assert) {
  expect(0);
  $("<div></div>")
    .appendTo("#qunit-fixture")
    .bind('hide', function() {
      ok(true, "Event shouldn't have been triggered");
    })
    .animate({ opacity: 0.3 }, function() { start(); });
});

QUnit.asyncTest("Animate color red (no event); test other animate", function(assert) {
  expect(0);
  $("<div></div>")
    .appendTo("#qunit-fixture")
    .bind('hide', function() {
      ok(true, "Event shouldn't have been triggered");
    })
    .animate({ color: "red" }, function() { start(); });
});