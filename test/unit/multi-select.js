module("Multi-Select");

QUnit.test("hide Test (hide)", function(assert) {
  expect(6);
  $("<div>Hello</div><div>Goodbye</div>")
    .appendTo("#qunit-fixture")
    .bind('showandtell.hide', function(event) {
      ok(true, "Event triggered");
      ok($(this).is(":hidden"), "Element is hidden");

      //Check that action and fatality is reported correctly
      equal(event.namespace, "hide", "hide() is an action");
    })
    .bind('showandtell.show', function(event) {
      if (event.namespace == "show")
      {
        //Make sure show event does not trigger!
        ok(false, "Show event shouldn't have triggered");
      }
    })
    .hide();
});

QUnit.test("hide invisible Test (no event)", function(assert) {
  expect(0);
  $('<div style="display: none;">Hello</div><div style="display: none;">Goodbye</div>')
    .appendTo("#qunit-fixture")
    .bind('showandtell.hide', function(event) {
      if (event.namespace == "hide")
        ok(false, "Hide event shouldn't have triggered");
    })
    .bind('showandtell.show', function(event) {
      if (event.namespace == "show")
      {
        //Make sure show event does not trigger!
        ok(false, "Show event shouldn't have triggered");
      }
    })
    .hide();
});

QUnit.test("hide invisible Test (1 hide)", function(assert) {
  expect(3);
  $('<div style="display: none;">Hello</div><div>Goodbye</div>')
    .appendTo("#qunit-fixture")
    .bind('showandtell.hide', function(event) {
      ok(true, "Event triggered");
      ok($(this).is(":hidden"), "Element is hidden");

      //Check that action and fatality is reported correctly
      equal(event.namespace, "hide", "hide() is an action");
    })
    .bind('showandtell.show', function(event) {
      if (event.namespace == "show")
      {
        //Make sure show event does not trigger!
        ok(false, "Show event shouldn't have triggered");
      }
    })
    .hide();
});

QUnit.test("show Test (show)", function(assert) {
  expect(6);
  $("<div style='display: none'>Hello</div><div style='display: none'>Goodbye</div>")
    .appendTo("#qunit-fixture")
    .bind('showandtell.show', function(event) {
      ok(true, "Event triggered");
      ok($(this).is(":visible"), "Element is visible");

      //Check that action and fatality is reported correctly
      equal(event.namespace, "show", "show() is an action");
    })
    .bind('showandtell.hide', function(event) {
      if (event.namespace == "hide")
      {
        //Make sure show event does not trigger!
        ok(false, "Hide event shouldn't have triggered");
      }
    })
    .show();
});


QUnit.test("show visible Test (no event)", function(assert) {
  expect(0);
  $('<div>Goodbye</div>')
    .appendTo("#qunit-fixture")
    .bind('showandtell.show', function(event) {
      if (event.namespace == "show")
        ok(false, "Show event shouldn't have triggered");
    })
    .bind('showandtell.hide', function(event) {
      if (event.namespace == "hide")
        ok(false, "Hide event shouldn't have triggered");
    })
    .show();
});

QUnit.test("show visible Test (1 show)", function(assert) {
  expect(3);
  $('<div>Hello</div><div style="display: none">Goodbye</div>')
    .appendTo("#qunit-fixture")
    .bind('showandtell.hide', function(event) {
        ok(false, "Hide event shouldn't have triggered");
    })
    .bind('showandtell.show', function(event) {
      if (event.namespace == "show")
      {
      ok(true, "Event triggered");
      ok($(this).is(":visible"), "Element is visible");

      //Check that action and fatality is reported correctly
      equal(event.namespace, "show", "show() is an action");
      }
    })
    .show();
});

QUnit.test("remove Test (remove)", function(assert) {
  expect(4);
  $("<div>Hello</div><div>Goodbye</div>")
    .appendTo("#qunit-fixture")
    .bind('showandtell.remove', function(event) {
      ok(true, "Event triggered");
      equal(event.namespace, "remove", "remove() is an action");
    })
    .bind('showandtell.hide', function(event) {
      if (event.namespace == "hide")
        ok(false, "Hide event shouldn't have triggered");
    })
    .bind('showandtell.show', function(event) {
      if (event.namespace == "show")
        ok(false, "Show event shouldn't have triggered");
    })
    .remove();
});


QUnit.test("remove invisible Test (remove)", function(assert) {
  expect(4);
  $("<div style='display: none'>Hello</div><div>Goodbye</div>")
    .appendTo("#qunit-fixture")
    .bind('showandtell.remove', function(event) {
      ok(true, "Event triggered");
      equal(event.namespace, "remove", "remove() is an action");
    })
    .bind('showandtell.hide', function(event) {
      if (event.namespace == "hide")
        ok(false, "Hide event shouldn't have triggered");
    })
    .bind('showandtell.show', function(event) {
      if (event.namespace == "show")
        ok(false, "Show event shouldn't have triggered");
    })
    .remove();
});


QUnit.test("CSS display none (hide)", function(assert) {
  expect(6);
  $("<div>Hello</div><div>Goodbye</div>")
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
  expect(6);
  $('<div style="display: none;">Hello</div><div style="display: none;">Goodbye</div>')
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
