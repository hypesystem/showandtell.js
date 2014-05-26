module("Bubbling");
QUnit.test("Remove triggering does not bubble up", function(assert) {
  expect(1);
  $("<div class='outer'>Outer <div class='inner'>Inner</div></div>")
    .appendTo("#qunit-fixture")
    .bind('remove', function() {
      ok(false, "Remove shouldn't trigger on .outer!");
    })
    .find('.inner')
    .bind('remove', function() {
      ok(true, "Remove triggered on .inner");
    })
    .remove();
});

QUnit.test("Hide triggering does not bubble up", function(assert) {
  expect(1);
  $("<div class='outer'>Outer <div class='inner'>Inner</div></div>")
    .appendTo("#qunit-fixture")
    .bind('hide', function() {
      ok(false, "Hide shouldn't trigger on .outer!");
    })
    .find('.inner')
    .bind('hide', function() {
      ok(true, "Hide triggered on .inner");
    })
    .hide();
});

QUnit.test("Show triggering does not bubble up", function(assert) {
  expect(1);
  $("<div class='outer' style='display:none;'>Outer <div class='inner' style='display:none;'>Inner</div></div>")
    .appendTo("#qunit-fixture")
    .bind('show', function() {
      ok(false, "Show shouldn't trigger on .outer!");
    })
    .find('.inner')
    .bind('show', function() {
      ok(true, "Show triggered on .inner");
    })
    .show();
});
