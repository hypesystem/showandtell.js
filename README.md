**showandtell.js** proxies jQuery functions to emit events on show, hide, and remove events.

You want to know if an element is being dynamically hidden? This is the lib for you.

Usage
=====

There are three events supported by this library: `hide`, `show`, and `remove`.

Listen on an event:

    $("#myElement").bind("showandtell.hide", function() {
        alert("hide triggered");
    }

    ...

    $("#myElement").hide(); //Hides element, then triggers hide event

It's that easy. No fuzz.

Note that when `hide` and `show` trigger, the changes have already happened. `remove` triggers before
the action has been performed (because a removed element cannot have events triggered on it).

Contributing
============

Any contributions/corrections are very welcome - fork aggressively! Make sure that all tests continue
to pass, and that new features are tested :)

If you find an issue that you don't want to fix, please use the GitHub issue system. Thanks!

Contributors
------------

Contributors are thanked here in public! Contributing can be with code or documentation, you decide!

Thanks a lot to the following individuals:

- [virustrinity](https://github.com/ViRuSTriNiTy) for helping with better namespacing, so the events
  emitted by showandtell do not clash with other jQuery plugins.
  [#10](https://github.com/hypesystem/showandtell.js/pull/10)
  [#12](https://github.com/hypesystem/showandtell.js/pull/12)
- [Paul Biron](https://github.com/pbiron) for contributing support for triggering events when hiding
  several elements with a single selector (e.g. `$("#div1, #div2").hide();`).
  [#15](https://github.com/hypesystem/showandtell.js/pull/15)

Background
==========

I was working on a [simple modal system](http://github.com/hypesystem/d_modal.js) when I hit a [dead
end](http://stackoverflow.com/questions/21078248). I would like to allow users to hide my modals how
they usually do (with `hide()` or `fadeOut()` or whatever other jQuery method they use).

jQuery, as you probably know, [does not send out events on hide](http://stackoverflow.com/questions/2857900).
On top of that, it has a wide variety of different ways to hide an object. This library strives to add a
simple unified approach to listening to hides. The goal is to cover all the possible cases.