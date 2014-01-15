QUnit.test("CSS display none; test display hide", function(assert) {
  expect(3);
  $("<div></div>")
    .appendTo("#qunit-fixture")
    .bind('hide', function() {
      ok(true, "Event triggered");
      var t = Array.prototype.slice.call(arguments, 1);
      notEqual($.inArray("css",t),-1, "Css specified");
      notEqual($.inArray("display",t),-1, "Display specified");
    })
    .css('display','none');
});

QUnit.test("CSS display static (no event); test other display case", function(assert) {
  expect(0);
  $("<div></div>")
    .appendTo("#qunit-fixture")
    .bind('hide', function() {
      ok(true, "Event triggered");
    })
    .css('display','static');
});

QUnit.test("CSS visibility hidden; test visibility hide", function(assert) {
  expect(3);
  $("<div></div>")
    .appendTo("#qunit-fixture")
    .bind('hide', function() {
      ok(true, "Event triggered");
      var t = Array.prototype.slice.call(arguments, 1);
      notEqual($.inArray("css",t),-1, "Css specified");
      notEqual($.inArray("visibility",t),-1, "Visibility specified");
    })
    .css('visibility','hidden');
});

QUnit.test("CSS visibility visible (no event); test other visibility case", function(assert) {
  expect(0);
  $("<div></div>")
    .appendTo("#qunit-fixture")
    .bind('hide', function() {
      ok(true, "Event shouldn't have triggered");
    })
    .css('visibility','visible');
});

QUnit.test("CSS opacity 0; test opacity hide case", function(assert) {
  expect(3);
  $("<div></div>")
    .appendTo("#qunit-fixture")
    .bind('hide', function() {
      ok(true, "Event triggered");
      var t = Array.prototype.slice.call(arguments, 1);
      notEqual($.inArray("css",t),-1, "Css specified");
      notEqual($.inArray("opacity",t),-1, "Opacity specified");
    })
    .css('opacity',0);
});

QUnit.test("CSS opacity 0 string; test string input number", function(assert) {
  expect(3);
  $("<div></div>")
    .appendTo("#qunit-fixture")
    .bind('hide', function() {
      ok(true, "Event triggered");
      var t = Array.prototype.slice.call(arguments, 1);
      notEqual($.inArray("css",t),-1, "Css specified");
      notEqual($.inArray("opacity",t),-1, "Opacity specified");
    })
    .css('opacity','0');
});

QUnit.test("CSS opacity 0.3 (no event); test other opacity", function(assert) {
  expect(0);
  $("<div></div>")
    .appendTo("#qunit-fixture")
    .bind('hide', function() {
      ok(true, "Event shouldn't have triggered");
    })
    .css('display',0.3);
});

QUnit.test("CSS color red (no event); test other css case", function(assert) {
  expect(0);
  $("<div></div>")
    .appendTo("#qunit-fixture")
    .bind('hide', function() {
      ok(true, "Event shouldn't have triggered");
    })
    .css('color','red');
});