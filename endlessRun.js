(function(){
    window.onload = load;

    function load(){
        var canvas = document.getElementById('canvas');
        var ctx = canvas.getContext('2d');
        var width = canvas.width;
        var height = canvas.height;
        ctx.canvasHeight = height;
        ctx.canvasWidth = width;

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

        window.cloud = new ER.Cloud({
            x: 400,
            y: 250,
            width: 80,
            height: 80,
            color: new Color(255,255,255)
        });

        var drawables = [background, platform, runner, cloud];
        draw();

        function draw(){
            for(var i = 0; i < drawables.length; i++){
                drawables[i].draw(ctx);
            }
        }
    }


})();
