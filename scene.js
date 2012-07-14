window.ER = window.ER || {};
(function(){
    ER.Scene = function(width, height){
        var background = new ER.Actor({
            width: width,
            height: height,
            color: new Color(77,188,233)
        });

        var platform = new ER.Actor({
            width: width,
            height: 100
        });

        var runner = new ER.Actor({
            x: 20,
            y: platform.height+5,
            width: 20,
            height: 80,
            color: new Color(255,0,0)
        });

        var cloud = new ER.Cloud({
            x: 400,
            y: 250,
            width: 80,
            height: 80,
            color: new Color(255,255,255),
            vx: -5
        });

        this.actors = [background, platform, runner, cloud];
    }

    ER.Scene.prototype = {
        step: function(timeSpan){
            for(var i = 0; i < this.actors.length; i++){
                this.actors[i].step(timeSpan);
            }
        },
        draw: function(ctx){
            for(var i = 0; i < this.actors.length; i++){
                this.actors[i].draw(ctx);
            }
        }
    };
})();
