QUnit.module("CSS");

QUnit.test("CSS display none (hide)", function(assert) {
  expect(3);
  $("<div>Hello</div>")
    .appendTo("#qunit-fixture")
    .bind('showandtell.cssHide', function(event) {
      ok(true, "Event triggered");
      ok($(this).is(":hidden"), "Element is hidden");
      equal(event.namespace, "cssHide", "CSS change.");
    })
    .bind('showandtell.cssShow', function(e) {
      if (e.namespace == "cssShow")
        ok(false, "Show event shouldn't be triggered");
    })
    .css('display','none');
});

QUnit.test("CSS display block (show)", function(assert) {
  expect(3);
  $('<div style="display: none;">Hello</div>')
    .appendTo("#qunit-fixture")
    .bind('showandtell.cssShow', function(event) {
      ok(true, "Event triggered");
      ok($(this).is(":visible"), "Element is visible");
      equal(event.namespace, "cssShow", "CSS change.");
    })
    .bind('showandtell.cssHide', function(e) {
      if (e.namespace == "cssHide")
        ok(false, "Hide event shouldn't be triggered");
    })
    .css('display','block');
});

QUnit.test("CSS display inline-block (show); test showing (other)", function(assert) {
  expect(3);
  $('<div style="display: none;">Hello</div>')
    .appendTo("#qunit-fixture")
    .bind('showandtell.cssShow', function(event) {
      ok(true, "Event triggered");
      ok($(this).is(":visible"), "Element is visible");
      equal(event.namespace, "cssShow", "CSS change.");
    })
    .bind('showandtell.cssHide', function(e) {
      if (e.namespace == "cssHide")
        ok(false, "Hide event shouldn't be triggered");
    })
    .css('display','block');
});

QUnit.test("CSS display '' (show); test showing (reset display)", function(assert) {
  expect(3);
  $('<div style="display: none;">Hello</div>')
    .appendTo("#qunit-fixture")
    .bind('showandtell.cssShow', function(event) {
      ok(true, "Event triggered");
      ok($(this).is(":visible"), "Element is visible");
      equal(event.namespace, "cssShow", "CSS change.");
    })
    .bind('showandtell.hide', function(e) {
      if (e.namespace == "hide")
        ok(false, "Hide event shouldn't be triggered");
    })
    .css('display','');
});

QUnit.test("CSS display block (no event); test other display case", function(assert) {
  expect(0);
  $("<div>Hello</div>")
    .appendTo("#qunit-fixture")
    .bind('showandtell.cssHide', function(e) {
      if (e.namespace == "cssHide")
        ok(false, "Hide event shouldn't be triggered");
    })
    .bind('showandtell.cssShow', function(e) {
      if (e.namespace == "cssShow")
        ok(false, "Show event shouldn't be triggered");
    })
    .css('display','block');
});

QUnit.test("CSS opacity 0 (no event); opacity != hide", function(assert) {
  expect(0);
  $("<div>Hello</div>")
    .appendTo("#qunit-fixture")
    .bind('showandtell.cssHide', function(e) {
      if (e.namespace == "cssHide")
        ok(false, "Hide event shouldn't be triggered");
    })
    .bind('showandtell.cssShow', function(e) {
      if (e.namespace == "cssShow")
        ok(false, "Show event shouldn't be triggered");
    })
    .css('opacity',0);
});

QUnit.test("CSS color green (no event); test other css case", function(assert) {
  expect(0);
  $("<div>Hello</div>")
    .appendTo("#qunit-fixture")
    .bind('showandtell.cssHide', function(e) {
      if (e.namespace == "cssHide")
        ok(false, "Hide event shouldn't have triggered");
    })
    .bind('showandtell.cssShow', function(e) {
      if (e.namespace == "cssShow")
        ok(false, "Show event shouldn't have triggered");
    })
    .css('color','green');
});
