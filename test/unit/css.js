module("CSS");

QUnit.test("CSS display none (hide)", function(assert) {
  expect(3);
  $("<div>Hello</div>")
    .appendTo("#qunit-fixture")
    .bind('showandtell', function(event) {
      ok(true, "Event triggered");
      ok($(this).is(":hidden"), "Element is hidden");
      equal(event.reason, "cssHide", "CSS change.");
    })
    .bind('showandtell', function(e) {
      if (e.reason == "cssShow")
        ok(false, "Show event shouldn't be triggered");
    })
    .css('display','none');
});

QUnit.test("CSS display block (show)", function(assert) {
  expect(3);
  $('<div style="display: none;">Hello</div>')
    .appendTo("#qunit-fixture")
    .bind('showandtell', function(event) {
      ok(true, "Event triggered");
      ok($(this).is(":visible"), "Element is visible");
      equal(event.reason, "cssShow", "CSS change.");
    })
    .bind('showandtell', function(e) {
      if (e.reason == "cssHide")
        ok(false, "Hide event shouldn't be triggered");
    })
    .css('display','block');
});

QUnit.test("CSS display inline-block (show); test showing (other)", function(assert) {
  expect(3);
  $('<div style="display: none;">Hello</div>')
    .appendTo("#qunit-fixture")
    .bind('showandtell', function(event) {
      ok(true, "Event triggered");
      ok($(this).is(":visible"), "Element is visible");
      equal(event.reason, "cssShow", "CSS change.");
    })
    .bind('showandtell', function(e) {
      if (e.reason == "cssHide")
        ok(false, "Hide event shouldn't be triggered");
    })
    .css('display','block');
});

QUnit.test("CSS display '' (show); test showing (reset display)", function(assert) {
  expect(3);
  $('<div style="display: none;">Hello</div>')
    .appendTo("#qunit-fixture")
    .bind('showandtell', function(event) {
      ok(true, "Event triggered");
      ok($(this).is(":visible"), "Element is visible");
      equal(event.reason, "cssShow", "CSS change.");
    })
    .bind('hide', function() {
      if (e.reason == "cssHide")
        ok(false, "Hide event shouldn't be triggered");
    })
    .css('display','');
});

QUnit.test("CSS display block (no event); test other display case", function(assert) {
  expect(0);
  $("<div>Hello</div>")
    .appendTo("#qunit-fixture")
    .bind('showandtell', function(e) {
      if (e.reason == "cssHide")
        ok(false, "Hide event shouldn't be triggered");
    })
    .bind('showandtell', function(e) {
      if (e.reason == "cssShow")
        ok(false, "Show event shouldn't be triggered");
    })
    .css('display','block');
});

QUnit.test("CSS opacity 0 (no event); opacity != hide", function(assert) {
  expect(0);
  $("<div>Hello</div>")
    .appendTo("#qunit-fixture")
    .bind('showandtell', function(e) {
      if (e.reason == "cssHide")
        ok(false, "Hide event shouldn't be triggered");
    })
    .bind('showandtell', function(e) {
      if (e.reason == "cssShow")
        ok(false, "Show event shouldn't be triggered");
    })
    .css('opacity',0);
});

QUnit.test("CSS color green (no event); test other css case", function(assert) {
  expect(0);
  $("<div>Hello</div>")
    .appendTo("#qunit-fixture")
    .bind('showandtell', function(e) {
      if (e.reason == "cssHide")
        ok(false, "Hide event shouldn't have triggered");
    })
    .bind('showandtell', function(e) {
      if (e.reason == "cssShow")
        ok(false, "Show event shouldn't have triggered");
    })
    .css('color','green');
});
