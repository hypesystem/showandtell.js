QUnit.test("CSS display none; test display hide", function(assert) {
  expect(3);
  $("<div></div>")
    .appendTo("#qunit-fixture")
    .bind('hide', function(event, e_args) {
      ok(true, "Event triggered");
      equal(e_args.type, "css", "CSS change.");
      equal(e_args.fatal, false, "CSS change does not remove element");
    })
    .bind('show', function() {
      ok(false, "Show event shouldn't be triggered");
    })
    .css('display','none');
});

QUnit.test("CSS display block (show); test showing", function(assert) {
  expect(2);
  $('<div style="display: none;"></div>')
    .appendTo("#qunit-fixture")
    .bind('show', function(event, e_args) {
      ok(true, "Event triggered");
      equal(e_args.type, "css", "CSS change.");
    })
    .bind('hide', function() {
      ok(false, "Hide event shouldn't be triggered");
    })
    .css('display','block');
});

QUnit.test("CSS display inline-block (show); test showing (other)", function(assert) {
  expect(2);
  $('<div style="display: none;"></div>')
    .appendTo("#qunit-fixture")
    .bind('show', function(event, e_args) {
      ok(true, "Event triggered");
      equal(e_args.type, "css", "CSS change.");
    })
    .bind('hide', function() {
      ok(false, "Hide event shouldn't be triggered");
    })
    .css('display','block');
});

QUnit.test("CSS display '' (show); test showing (reset display)", function(assert) {
  expect(2);
  $('<div style="display: none;"></div>')
    .appendTo("#qunit-fixture")
    .bind('show', function(event, e_args) {
      ok(true, "Event triggered");
      equal(e_args.type, "css", "CSS change.");
    })
    .bind('hide', function() {
      ok(false, "Hide event shouldn't be triggered");
    })
    .css('display','');
});

QUnit.test("CSS display block (no event); test other display case", function(assert) {
  expect(0);
  $("<div></div>")
    .appendTo("#qunit-fixture")
    .bind('hide', function() {
      ok(false, "Hide event shouldn't be triggered");
    })
    .bind('show', function() {
      ok(false, "Show event shouldn't be triggered");
    })
    .css('display','block');
});

QUnit.test("CSS opacity 0 (no event); opacity != hide", function(assert) {
  expect(0);
  $("<div></div>")
    .appendTo("#qunit-fixture")
    .bind('hide', function() {
      ok(false, "Hide event shouldn't be triggered");
    })
    .bind('show', function() {
      ok(false, "Show event shouldn't be triggered");
    })
    .css('opacity',0);
});

QUnit.test("CSS color green (no event); test other css case", function(assert) {
  expect(0);
  $("<div></div>")
    .appendTo("#qunit-fixture")
    .bind('hide', function() {
      ok(false, "Hide event shouldn't have triggered");
    })
    .bind('show', function() {
      ok(false, "Show event shouldn't have triggered");
    })
    .css('color','green');
});