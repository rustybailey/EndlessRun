(function(){
    window.onload = load;

    function load(){
        var canvas = document.getElementById('canvas');
        var ctx = canvas.getContext('2d');
        var width = canvas.width;
        var height = canvas.height;
        ctx.canvasHeight = height;
        ctx.canvasWidth = width;

        var platform = new ER.Drawable({
            width: width,
            height: 100
        });

        var runner = new ER.Drawable({
            x: 20,
            y: platform.height+5,
            width: 20,
            height: 80,
            color: new Color(255,0,0)
        });

        var drawables = [platform, runner];

        for(var i = 0; i < drawables.length; i++){
            drawables[i].draw(ctx);
        }
    }

})();
