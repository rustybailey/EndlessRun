window.ER = window.ER || {};
(function(){
    ER.Scene = function(width, height){
        this.width = width;
        this.height = height;

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


        this.actors = [background, platform, runner];
        this.clouds = [];
        this.addCloud();
        this.mountains = [];
        this.addMountain();


    }

    ER.Scene.prototype = {
        step: function(timeSpan, frame){
            for(var i = 0; i < this.actors.length; i++){
                this.actors[i].step(timeSpan);
            }
            if(frame % 10 === 0 && Utils.randomNumber(1,3,true) == 1){
                this.addCloud();
            }
        },
        draw: function(ctx){
            for(var i = 0; i < this.actors.length; i++){
                this.actors[i].draw(ctx);
            }
        },
        addCloud: function(){
            var cloud = ER.Cloud.random(this.width, this.height);
            this.clouds.push(cloud);
            this.actors.push(cloud);
        },
        addMountain: function(){
            var mountain = ER.Mountain.random(this.width, this.height);
            this.mountains.push(mountain);
            this.actors.push(mountain);
        }
    };
})();
