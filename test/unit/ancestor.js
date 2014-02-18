QUnit.test("anscestor/descendant difference on hide", function(assert) {
  expect(3);

  var anscestor_triggered = false;
  var $parent = $('<div id="parent"><div id="child"></div></div>').appendTo("#qunit-fixture");
  var $child = $parent.find('#child');

  $parent.on("hide", "*", function(event, e_args) {
    //Make sure anscestor triggers at most once
    // - this way we know child triggers twice if test succeeds
    if(e_args.is_ancestor && !anscestor_triggered) {
      ok(true, "ancestor event triggered");
      anscestor_triggered = true;
    }
    else ok(true, "descendant event triggered");
  });

  //Trigger both ancestor and child
  $parent.hide().show();

  //Trigger only child
  $child.hide();
});

QUnit.test("anscestor/descendant difference on remove", function(assert) {
  expect(3);

  var $parent = $('<div id="parent"><div id="child"></div></div>').appendTo("#qunit-fixture");
  var $snd_parent = $parent.clone().appendTo("#qunit-fixture");
  var $child = $snd_parent.find('#child');

  $parent.on("remove", "*", function(event, e_args) {
    if(e_args.is_ancestor) {
      ok(true, "ancestor event triggered");
      anscestor_triggered = true;
    }
    else ok(true, "descendant event triggered");
  });
  
  $snd_parent.on("remove","*", function(event, e_args) {
    if(e_args.is_ancestor) {
      ok(true, "ancestor event triggered");
      anscestor_triggered = true;
    }
    else ok(true, "descendant event triggered");
  });

  //Trigger both ancestor and child
  $parent.remove();

  //Trigger only child
  $child.remove();
});

QUnit.test("anscestor/descendant difference on show", function(assert) {
  expect(3);

  var anscestor_triggered = false;
  var $parent = $('<div id="parent" style="display: none;"><div id="child"></div></div>').appendTo("#qunit-fixture");
  var $child = $parent.find('#child');

  $parent.on("hide", "*", function(event, e_args) {
    if(e_args.is_ancestor && !anscestor_triggered) {
      ok(true, "ancestor event triggered");
      anscestor_triggered = true;
    }
    else ok(true, "descendant event triggered");
  });

  //Trigger both ancestor and child
  $parent.show();

  //Trigger only child
  $child.hide().show();
});