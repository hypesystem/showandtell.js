QUnit.test("CSS display none; test display hide", function(assert) {
  expect(3);
  $("<div></div>")
    .appendTo("#qunit-fixture")
    .bind('hide', function(event, e_args) {
      ok(true, "Event triggered");
      equal(e_args.type, "css", "CSS change.");
      equal(e_args.fatal, false, "CSS change does not remove element");
    })
    .css('display','none');
});

QUnit.test("CSS display block (no event); test other display case", function(assert) {
  expect(0);
  $("<div></div>")
    .appendTo("#qunit-fixture")
    .bind('hide', function() {
      ok(false, "Event shouldn't be triggered");
    })
    .css('display','block');
});

QUnit.test("CSS opacity 0 (no event); opacity != hide", function(assert) {
  expect(0);
  $("<div></div>")
    .appendTo("#qunit-fixture")
    .bind('hide', function() {
      ok(true, "Event shouldn't be triggered");
    })
    .css('opacity',0);
});

QUnit.test("CSS color green (no event); test other css case", function(assert) {
  expect(0);
  $("<div></div>")
    .appendTo("#qunit-fixture")
    .bind('hide', function() {
      ok(true, "Event shouldn't have triggered");
    })
    .css('color','green');
});