(function(){
    window.onload = load;

    function load(){
        var canvas = document.getElementById('canvas');
        var ctx = canvas.getContext('2d');
        var width = canvas.width;
        var height = canvas.height;
        ctx.canvasHeight = height;
        ctx.canvasWidth = width;

        var scene = new ER.Scene(width,height);

        var lastTime = new Date().getTime();
        var frame = 0;
        function animate(){
            frame++;
            var currTime = new Date().getTime();
            var timeSpan = currTime - lastTime;
            lastTime = currTime;
            step(timeSpan, frame);
            requestAnimationFrame(animate, canvas);
        }

        function step(timeSpan){
            scene.step(timeSpan, frame);
            scene.draw(ctx);
        }
        animate();

        Keys.init();
        Keys.debug(true);
    }
})();
