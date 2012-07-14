window.ER = window.ER || {};
(function(){
    ER.Cloud = function(){ 
        ER.Actor.apply(this,arguments);
    };

    ER.Cloud.prototype = Object.create(ER.Actor.prototype);

    Utils.extend(ER.Cloud.prototype, {
        step2: function(timeSpan){

        }
    });

    ER.Cloud.random = function(sceneWidth, sceneHeight){
        var width = Utils.randomNumber(80, 150,true);
        var height = Utils.randomNumber(60, 90,true);
        var cloud = new ER.Cloud({
            x: sceneWidth + width + 10,
            y: Utils.randomNumber(sceneHeight/2, sceneHeight - (height/2), true),
            width: width,
            height: height,
            color: new Color(255,255,255),
            vx: -5
        });
        return cloud;
    };

})();
