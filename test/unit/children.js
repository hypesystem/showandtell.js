module("Children");

QUnit.test("Children have hide triggered on hide", function() {
    expect(2);
    var $parent = $('<div id="parent"><div id="child">Hello</div></div>').appendTo("#qunit-fixture");
    $parent.bind('showandtell.hide', function(e) {
      if (e.namespace == "hide")
        ok(true, "Hide triggered on parent");
    });

    $parent.find('#child').bind('showandtell.hide', function(e) {
      if (e.namespace == "hide")
        ok(true, "Hide triggered on child.");
    });
    $parent.hide();
});

QUnit.test("Children have show triggered on show", function() {
    expect(2);
    var $parent = $('<div id="parent" style="display: none;"><div id="child">Hello</div></div>').appendTo("#qunit-fixture");
    $parent.bind('showandtell.show', function(e) {
      if (e.namespace == "show")
        ok(true, "Show triggered on parent");
    });

    $parent.find('#child').bind('showandtell.show', function(e) {
      if (e.namespace == "show")
        ok(true, "Show triggered on child.");
    });
    $parent.show();
});

QUnit.test("Children have remove triggered on remove", function() {
    expect(2);
    var $parent = $('<div id="parent"><div id="child">Hello</div></div>').appendTo("#qunit-fixture");
    $parent.bind('showandtell.remove', function(e) {
      if (e.namespace == "remove")
        ok(true, "Remove triggered on parent");
    });

    $parent.find('#child').bind('showandtell.remove', function(e) {
      if (e.namespace == "remove")
        ok(true, "Remove triggered on child.");
    });
    $parent.remove();
});
