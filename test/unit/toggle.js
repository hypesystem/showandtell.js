QUnit.test("Toggle off test", function(assert) {
  expect(2);
  $("<div></div>")
    .appendTo("body")
    .bind('hide', function() {
      ok(true, "Event triggered");
      var t = Array.prototype.slice.call(arguments, 1);
      notEqual($.inArray("hide",t),-1, "Hide specified");
    })
    .toggle();
});

QUnit.test("Toggle on test (no event)", function(assert) {
  expect(0);
  $('<div style="display: none;"></div>')
    .appendTo("body")
    .bind('hide', function() {
      ok(true, "Event shoudln't have triggered");
    })
    .toggle();
});

QUnit.test("FadeToggle off test", function(assert) {
  expect(5);
  $("<div></div>")
    .appendTo("body")
    .bind('hide', function() {
      ok(true, "Event triggered");
      var t = Array.prototype.slice.call(arguments, 1);
      notEqual($.inArray("fade",t),-1, "Fade specified");
      notEqual($.inArray("animate",t),-1, "Animate specified");
      notEqual($.inArray("opacity",t),-1, "Opacity specified");
      notEqual($.inArray("css",t),-1, "Css specified");
    })
    .fadeToggle();
});

QUnit.test("FadeToggle on test (no event)", function(assert) {
  expect(0);
  $('<div style="display: none;"></div>')
    .appendTo("body")
    .bind('hide', function() {
      ok(true, "Event shouldn't have triggered");
    })
    .fadeToggle();
});

QUnit.test("SlideToggle off test", function(assert) {
  expect(5);
  $("<div></div>")
    .appendTo("body")
    .bind('hide', function() {
      ok(true, "Event triggered");
      var t = Array.prototype.slice.call(arguments, 1);
      notEqual($.inArray("height",t),-1, "Fade specified");
      notEqual($.inArray("animate",t),-1, "Animate specified");
      notEqual($.inArray("slide",t),-1, "Opacity specified");
      notEqual($.inArray("css",t),-1, "Css specified");
    })
    .slideToggle();
});

QUnit.test("SlideToggle on test (no event)", function(assert) {
  expect(0);
  $('<div style="display: none;"></div>')
    .appendTo("body")
    .bind('hide', function() {
      ok(true, "Event shouldn't have triggered");
    })
    .slideToggle();
});