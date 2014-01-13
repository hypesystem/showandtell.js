/**
 * jquery.hide-event.js
 * Currently supported hides: hide, fadeOut, slideUp, remove.
 * When a hide `h` is called, the event "hide.h" is triggered. For example, your object may receive
 * the event "hide.fadeOut", if a user has called .fadeOut() on it.
 * TODO: Toggle functions: .toggle(), .fadeToggle(), slideToggle()
 * TODO: Animate css properties
 * TODO: Setting of the style attribute
 * TODO: Css changes: .css('display','none') and .css('visibility','hidden') and .css('opacity',0)
 * TODO: Class toggles: .addClass('hidden'), .toggleClass(...), etc.
 * TODO: Consider Mutation Observer https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver
 */
(function ($) {
  //Event on all different hides (by overwriting the jQuery functions).
  $.each(['hide','fadeOut','slideUp','remove'], function (i, event) {
    //Find usual function
    var old_function = $.fn[event];
    
    //Overwrite with new function
    $.fn[event] = function () {
      this.trigger("hide."+event);
      old_function.apply(this, arguments);
    };
  });
})(jQuery);