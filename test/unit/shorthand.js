/**
 * Testing built-in shorthands for hiding.
 * 2014-01-15 all tests pass
 */

QUnit.test("Hide Test", function(assert) {
  expect(2);
  $("<div></div>")
    .bind('hide', function() {
      //Event triggered!
      ok(true, "Event triggered");
      
      //Check that "hide" type is contained
      var t = Array.prototype.slice.call(arguments, 1);
      notEqual($.inArray("hide",t),-1, "Hide specified");
    })
    .hide();
});

QUnit.test("FadeOut Test", function(assert) {
  expect(5);
  $("<div></div>")
    .bind('hide', function() {
      ok(true, "Event triggered");
      var t = Array.prototype.slice.call(arguments, 1);
      notEqual($.inArray("fade",t),-1, "Fade specified");
      notEqual($.inArray("animate",t),-1, "Animate specified");
      notEqual($.inArray("opacity",t),-1, "Opacity specified");
      notEqual($.inArray("css",t),-1, "Css specified");
    })
    .fadeOut();
});

QUnit.test("SlideUp Test", function(assert) {
  expect(5);
  $("<div></div>")
    .bind('hide', function() {
      ok(true, "Event triggered");
      var t = Array.prototype.slice.call(arguments, 1);
      notEqual($.inArray("height",t),-1, "Fade specified");
      notEqual($.inArray("animate",t),-1, "Animate specified");
      notEqual($.inArray("slide",t),-1, "Opacity specified");
      notEqual($.inArray("css",t),-1, "Css specified");
    })
    .slideUp();
});

QUnit.test("Remove Test", function(assert) {
  expect(2);
  $("<div></div>")
    .bind('hide', function() {
      ok(true, "Event triggered");
      var t = Array.prototype.slice.call(arguments, 1);
      notEqual($.inArray("remove",t),-1, "Remove specified");
    })
    .remove();
});
