(function(){
    window.Keys = {};
    var debug = false;

    Keys.init = function(){
        mapping = getKeyMapping();
        document.onkeydown = function(event){
            var code = event.keyCode;
            Keys[code] = true;
            if(code in mapping){
                Keys[mapping[code]] = true;
            }
            if(debug){
                console.log(code);
                if(code in mapping){
                    console.log(mapping[code]);
                }
            }
            //return false
            return document.defaultAction;
        };
        document.onkeyup = function(event){
            var code = event.keyCode;
            Keys[code] = false;
            if(code in mapping){
                Keys[mapping[code]] = false;
            }
            //return false;
            return document.defaultAction;
        };
    };

    Keys.debug = function(val){
        debug = val;
    };

    function getKeyMapping(){
        var mapping = {
            37: "LEFT",
            38: "UP",
            39: "RIGHT",
            40: "DOWN",
            32: "SPACE",
            13: "ENTER"
        };

        for(var i = 48; i <= 57; i++){
            mapping[i] = String.fromCharCode(i);
        }

        for(var i = 65; i <= 90; i++){
            mapping[i] = String.fromCharCode(i);
        }
        return mapping
    }

})();
