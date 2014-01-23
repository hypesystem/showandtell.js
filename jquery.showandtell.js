/**
 * jquery.hide-event.js
 * Currently supported hides: hide, fadeOut, slideUp, remove, toggle, fadeToggle, slideToggle,
 *     css (display), animate (height: hide, opacity: hide).
 * When a hide `h` is called, the event "hide" is triggered, with the additional parameter ["h"]. If it is
 * called as an action, the second parameter will be "action". If it is set as a CSS property it will be
 * "css".
 * TODO: Setting of the style attribute .style(...)
 * TODO: Class toggles: .addClass('hidden'), .toggleClass(...), etc.
 * TODO: Consider Mutation Observer https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver
 * TODO: Figure out if http://weblog.west-wind.com/posts/2008/Sep/12/jQuery-CSS-Property-Monitoring-Plugin-updated
 *     is an alernative. (Project seems to be closed, maybe rewrite?)
 */
(function ($) {
    //jQuery hide functions
    $.each(['hide','remove'], function(i, event) {
        var old_function = $.fn[event];
        
        //Overwrite with new function
        $.fn[event] = function() {
            var was_hidden = $(this).is(":hidden");
        
            //Call old function
            var result = old_function.apply(this, arguments);
        
            //Trigger event
            if(!was_hidden)
                this.trigger("hide",{
                    type: "action",
                    fatal: (event == "remove")
                });
            
            //Return
            return result;
        };
    });
    
    var old_show = $.fn.show;
    
    $.fn.show = function() {
        var was_hidden = $(this).is(":hidden");
    
        var result = old_show.apply(this, arguments);
        
        if(was_hidden)
            this.trigger("show",{
                type: "action"
            });
        
        return result;
    };
    
    //jQuery set css properties
    var old_css = $.fn.css;
    
    $.fn.css = function() {
        var was_hidden = $(this).is(":hidden");
    
        var result = old_css.apply(this, arguments);
        
        //Case: display: none;
        if(!was_hidden && arguments[0] == "display" && arguments[1] == "none")
            $(this).trigger("hide",{
                type: "css",
                fatal: false
            });
            
        if(was_hidden && arguments[0] == "display" && arguments[1] != "none")
            $(this).trigger("show",{
                type: "css"
            });
        
        return result;
    };
})(jQuery);