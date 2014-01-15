/**
 * jquery.hide-event.js
 * Currently supported hides: hide, fadeOut, slideUp, remove, toggle, fadeToggle, slideToggle,
 *     css (display, opacity), animate (height, opacity).
 * When a hide `h` is called, the event "hide" is triggered, with the additional parameter ["h"]. For example,
 * your object may receive the event "hide" with the 1st parameter being ["fade","animate"], if a user has
 * called .fadeOut() on it.
 * TODO: Toggle properly
 * TODO: Animate toggle
 * TODO: .style(...)
 * TODO: Setting of the style attribute
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
        $.fn[event] = function () {
            //Trigger event
            this.trigger("hide",[event]);
            
            //Call old function
            old_function.apply(this, arguments);
        };
    });
      
    //jQuery toggle functions
    var old_toggle = $.fn.toggle;
    
    //jQuery animate properties
    var old_animate = $.fn.animate;
    
    $.fn.animate = function() {
        var prop = arguments[0];
        //If animating to invisible it is fading out.
        if("opacity" in prop && (prop.opacity == "hide" || prop.opacity == 0))
            this.trigger("hide",["fade","animate","opacity","css"]);
        
        //If animating to move out of frame (slideUp)
        //Properties are: { height: hide, margin-top: hide, padding-top: hide }
        if("height" in prop && (prop.height == "hide" || prop.height == 0))
            this.trigger("hide",["slide","animate","height","css"]);
            
        old_animate.apply(this, arguments);
    };
    
    //jQuery set css properties
    var old_function = $.fn.css;
    
    $.fn.css = function() {
        //Case: display: none;
        if(arguments[0] == "display" && arguments[1] == "none")
            this.trigger("hide",["css","display"]);
            
        //Case: opacity: 0;
        if(arguments[0] == "opacity" && arguments[1] == 0)
            this.trigger("hide",["css","opacity"]);
            
        //Call old function
        old_function.apply(this, arguments);
    };
})(jQuery);