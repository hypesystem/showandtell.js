/**
 * jquery.hide-event.js
 * Currently supported hides: hide, fadeOut, slideUp, remove, toggle, fadeToggle, slideToggle,
 *     css (display, visibility, opacity).
 * When a hide `h` is called, the event "hide.h" is triggered. For example, your object may receive
 * the event "hide.fadeOut", if a user has called .fadeOut() on it.
 * TODO: Animate css properties
 * TODO: Setting of the style attribute
 * TODO: Class toggles: .addClass('hidden'), .toggleClass(...), etc.
 * TODO: Consider Mutation Observer https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver
 * TODO: Figure out if http://weblog.west-wind.com/posts/2008/Sep/12/jQuery-CSS-Property-Monitoring-Plugin-updated
 *     is an alernative. (Project seems to be closed, maybe rewrite?)
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
            this.each(function() {
                //If event is currently shown it is being hidden
                if(this.css('display') != "none")
                    this.trigger("hide."+event);
            });
            
            //Call old function
            old_function.apply(this, arguments);
        };
    });
    
    //jQuery set css properties
    var old_function = $.fn.css;
    
    $.fn.css = function() {
        this.each(function() {
            //Case: display: none;
            if(arguments[0] == "display" && arguments[1] == "none")
                this.trigger("hide.css.display");
            
            //Case: visibility: hidden;
            if(arguments[0] == "visibility" && arguments[1] == "hidden")
                this.trigger("hide.css.visibility");
                
            //Case: opacity: 0;
            if(arguments[0] == "opacity" && arguments[1] == 0)
                this.trigger("hide.css.opacity");
        });
            
        //Call old function
        old_function.apply(this, arguments);
    };
})(jQuery);