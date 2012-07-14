window.ER = window.ER || {};
(function(){
    var defaults = {
        width: 1,
        height: 1,
        x: 0,
        y: 0
    };

    ER.Drawable = function(props){
        Utils.extend(this,defaults,props);
    };

    ER.Drawable.prototype = {
        draw:function(ctx){
            ctx.fillStyle = "rgb('0,0,0')";
            ctx.fillRect(this.x, ctx.canvasHeight - this.y - this.height, this.width, this.height);
        }
    };
})();
