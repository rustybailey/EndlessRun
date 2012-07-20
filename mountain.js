window.ER = window.ER || {};
(function(){
    ER.Mountain = function(){ 
        ER.Actor.apply(this,arguments);
    };

    ER.Mountain.prototype = Object.create(ER.Actor.prototype);

    Utils.extend(ER.Mountain.prototype, {
        step2: function(timeSpan){},
        draw: function(ctx){
            ctx.fillStyle = this.color.toString();
            ctx.beginPath();
            ctx.moveTo(0,350);
            ctx.lineTo(200,350);
            ctx.lineTo(100,100);
            ctx.fill();
        }

    });

    ER.Mountain.random = function(sceneWidth, sceneHeight){
        var width = Utils.randomNumber(80, 150,true);
        var height = Utils.randomNumber(60, 90,true);
        var mountain = new ER.Mountain({
            x: sceneWidth + width + 10,
            y: Utils.randomNumber(sceneHeight/2, sceneHeight - (height/2), true),
            width: width,
            height: height,
            color: new Color(50,50,50),
            vx: -5
        });
        return mountain;
    };

})();
