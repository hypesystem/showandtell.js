/**
 * jquery.hide-event.js
 * Currently supported hides: hide, fadeOut, slideUp, remove.
 * When a hide `h` is called, the event "hide.h" is triggered. For example, your object may receive
 * the event "hide.fadeOut", if a user has called .fadeOut() on it.
 * TODO: Animate css properties
 * TODO: Setting of the style attribute
 * TODO: Css changes: .css('display','none') and .css('visibility','hidden') and .css('opacity',0)
 * TODO: Class toggles: .addClass('hidden'), .toggleClass(...), etc.
 * TODO: Consider Mutation Observer https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver
 */
(function ($) {
    //jQuery hide functions
    $.each(['hide','fadeOut','slideUp','remove'], function(i, event) {
        var old_function = $.fn[event];
        
        //Overwrite with new function
        $.fn[event] = function () {
            //Trigger event
            this.trigger("hide."+event);
            
            //Call old function
            old_function.apply(this, arguments);
        };
    });
      
    //jQuery toggle functions
    $.each(['toggle','fadeToggle','slideToggle'], function(i, event) {
        var old_function = $.fn[event];
        
        //Overwrite with new function
        $.fn[event] = function() {
            //If event is currently shown it is being hidden
            if(this.css('display') != "none")
                this.trigger("hide."+event);
            
            old_function.apply(this, arguments);
        };
    });
})(jQuery);