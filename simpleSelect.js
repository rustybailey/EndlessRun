if(!$) window.$ = (function(){ 
    return function $(sel){
        var that = {};
        var el = that.el = findElement(sel);
        var events = ["keydown", "keyup"];
        for(var i = -1, e; e = events[++i];){
            that[e] = function(func){
                attachEvent(el, e, func);
            };
        }
        return that;
    }

    function findElement(sel){
        if(sel === "window" || sel === window) return window
        return document.querySelector(sel)
    }

    function attachEvent(el, event, func) {
        if(!el || !event || !func) return;
        onEvent = "on"+event;
        if (el.addEventListener) { //W3C
            el.addEventListener(event, func, false);
            el.addEventListener(event, func, false);
        }
        else if (el.attachEvent) { //IE
            el.attachEvent(onEvent, func);
            el.attachEvent(onEvent, func);
        }
        else { //All else hath failed
            el[onEvent] = func;
        }
    }
})();
