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

        this.clouds = [];
        this.addCloud();
        this.mountains = [];
        this.addMountain();
        this.actors = [background, platform, this.clouds, this.mountains, runner];



    }

    ER.Scene.prototype = {
        step: function(timeSpan, frame){
            for(var i = 0; i < this.actors.length; i++){
                if(typeof this.actors[i] == 'object' && (this.actors[i] instanceof Array)){
                    for (var j = 0; j < this.actors[i].length; j++) {
                        this.actors[i][j].step(timeSpan);
                    }
                } else {
                    this.actors[i].step(timeSpan);
                }
            }
            if(frame % 10 === 0 && Utils.randomNumber(1,3,true) == 1){
                this.addCloud();
            }
        },
        draw: function(ctx){
            for(var i = 0; i < this.actors.length; i++){
                if(typeof this.actors[i] == 'object' && (this.actors[i] instanceof Array)){
                    for (var j = 0; j < this.actors[i].length; j++) {
                        this.actors[i][j].draw(ctx);
                    }
                } else {
                    this.actors[i].draw(ctx);
                }
            }
        },
        addCloud: function(){
            var cloud = ER.Cloud.random(this.width, this.height);
            this.clouds.push(cloud);
     
        },
        addMountain: function(){
            var mountain = ER.Mountain.random(this.width, this.height);
            this.mountains.push(mountain);
   
        }
    };
})();
