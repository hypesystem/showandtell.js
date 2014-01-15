QUnit.test("Animate height 0", function(assert) {
  expect(4);
  $("<div></div>")
    .bind('hide', function() {
      ok(true, "Event triggered");
      var t = Array.prototype.slice.call(arguments, 1);
      notEqual($.inArray("css",t),-1, "Css specified");
      notEqual($.inArray("height",t),-1, "Height specified");
      notEqual($.inArray("animate",t),-1, "Animate specified");
    })
    .animate({ height: 0 });
});
           
QUnit.test("Animate height hide", function(assert) {
  expect(4);
  $("<div></div>")
    .bind('hide', function() {
      ok(true, "Event triggered");
      var t = Array.prototype.slice.call(arguments, 1);
      notEqual($.inArray("css",t),-1, "Css specified");
      notEqual($.inArray("height",t),-1, "Height specified");
      notEqual($.inArray("animate",t),-1, "Animate specified");
    })
    .animate({ height: "hide" });
});

QUnit.test("Animate height toggle off", function(assert) {
  expect(4);
  $("<div></div>")
    .bind('hide', function() {
      ok(true, "Event triggered");
      var t = Array.prototype.slice.call(arguments, 1);
      notEqual($.inArray("css",t),-1, "Css specified");
      notEqual($.inArray("height",t),-1, "Height specified");
      notEqual($.inArray("animate",t),-1, "Animate specified");
    })
    .animate({ height: "toggle" });
});

QUnit.test("Animate height toggle on (no event)", function(assert) {
  expect(0);
  $("<div></div>")
    .hide()
    .bind('hide', function() {
      ok(true, "Event shouldn't have been triggered");
    })
    .animate({ height: "toggle" });
});

QUnit.test("Animate height 5 (no event)", function(assert) {
  expect(0);
  $("<div></div>")
    .bind('hide', function() {
      ok(true, "Event shouldn't have been triggered");
    })
    .animate({ height: 5 });
});

QUnit.test("Animate opacity 0", function(assert) {
  expect(4);
  $("<div></div>")
    .bind('hide', function() {
      ok(true, "Event triggered");
      var t = Array.prototype.slice.call(arguments, 1);
      notEqual($.inArray("css",t),-1, "Css specified");
      notEqual($.inArray("opacity",t),-1, "Height specified");
      notEqual($.inArray("animate",t),-1, "Animate specified");
    })
    .animate({ opacity: 0 });
});
           
QUnit.test("Animate opacity hide", function(assert) {
  expect(4);
  $("<div></div>")
    .bind('hide', function() {
      ok(true, "Event triggered");
      var t = Array.prototype.slice.call(arguments, 1);
      notEqual($.inArray("css",t),-1, "Css specified");
      notEqual($.inArray("opacity",t),-1, "Height specified");
      notEqual($.inArray("animate",t),-1, "Animate specified");
    })
    .animate({ opacity: "hide" });
});

QUnit.test("Animate opacity toggle off", function(assert) {
  expect(4);
  $("<div></div>")
    .bind('hide', function() {
      ok(true, "Event triggered");
      var t = Array.prototype.slice.call(arguments, 1);
      notEqual($.inArray("css",t),-1, "Css specified");
      notEqual($.inArray("opacity",t),-1, "Height specified");
      notEqual($.inArray("animate",t),-1, "Animate specified");
    })
    .animate({ opacity: "toggle" });
});

QUnit.test("Animate opacity toggle on (no event)", function(assert) {
  expect(0);
  $("<div></div>")
    .hide()
    .bind('hide', function() {
      ok(true, "Event shouldn't have been triggered");
    })
    .animate({ opacity: "toggle" });
});

QUnit.test("Animate opacity 0.3 (no event)", function(assert) {
  expect(0);
  $("<div></div>")
    .bind('hide', function() {
      ok(true, "Event shouldn't have been triggered");
    })
    .animate({ opacity: 0.3 });
});

QUnit.test("Animate color red (no event); test other animate", function(assert) {
  expect(0);
  $("<div></div>")
    .bind('hide', function() {
      ok(true, "Event shouldn't have been triggered");
    })
    .animate({ color: "red" });
});