(function(){
    window.onload = load;

    function load(){
        var canvas = document.getElementById('canvas');
        var ctx = canvas.getContext('2d');
        var width = canvas.width;
        var height = canvas.height;
        ctx.canvasHeight = height;
        ctx.canvasWidth = width;

        var platform = new ER.Drawable(0,0,width,100);
        platform.draw(ctx);
    }

})();
