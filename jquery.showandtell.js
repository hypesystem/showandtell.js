/**
 * jquery.hide-event.js
 * Currently supported hides: hide, fadeOut, slideUp, remove, toggle, fadeToggle, slideToggle,
 *     css (display), animate (height: hide, opacity: hide).
 *
 * Examples:
 *  .hide() is called -> event "showandtell.hide" is triggered
 *  .css("display", "none") is called -> event "showandtell.cssHide" is triggered
 */
(function ($) {

    function applyIfExistsOrNull(fun, self, args) {
        return typeof fun !== "undefined" ? fun.apply(self, args) : null;
    }

    function proxy$Functions(functionProxies) {
        $.each(functionProxies, function(old_function_name, proxy_settings) {
            var old_function = $.fn[old_function_name];

            $.fn[old_function_name] = function() {
                var pre_result = applyIfExistsOrNull(proxy_settings.pre, this, arguments);

                var result = old_function.apply(this, arguments);

                var postArguments = [result, pre_result, arguments];
                applyIfExistsOrNull(proxy_settings.post, this, postArguments);

                return result;
            }
        });
    }

    function checkIfElementWasHidden() {
        return $(this).map(function() { return $(this).is(":hidden"); });
    }

    //Only register if not already registered
    if(!$.showandtell) {

        //Indicate that showandtell has been registered.
        $.showandtell = true;

        proxy$Functions({
            hide: {
                pre: checkIfElementWasHidden,
                post: function(result, elementWasHidden, old_args) {
                    $(this)
                        .filter(function(idx) { return ! elementWasHidden[idx]; })
                        .each(function() { $(this).triggerHandler("showandtell.hide"); });
                }
            },
            show: {
                pre: checkIfElementWasHidden,
                post: function(result, elementWasHidden, old_args) {
                    $(this)
                        .filter(function(idx) { return elementWasHidden[idx]; })
                        .each(function() { $(this).triggerHandler("showandtell.show"); });
                }
            },
            remove: {
                //Remove has to trigger event before removing. After removal, there is no element to
                //  trigger the event on.
                pre: function() {
                    $(this)
                        .each(function() { $(this).triggerHandler("showandtell.remove"); });
                }
            },
            css: {
                pre: checkIfElementWasHidden,
                post: function(result, elementWasHidden, old_args) {
                    $(this)
                        .filter(function(idx) {
                            return ! elementWasHidden[idx] && old_args[0] == "display" && old_args[1] == "none";
                        }).each(function() {
                            $(this).triggerHandler("showandtell.cssHide");
                        });

                    $(this)
                        .filter(function(idx) {
                            return elementWasHidden[idx] && old_args[0] == "display" && old_args[1] != "none";
                        }).each(function() {
                            $(this).triggerHandler("showandtell.cssShow");
                        });
                }
            }
        });

    }
})(jQuery);
