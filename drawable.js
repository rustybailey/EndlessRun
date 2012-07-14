window.ER = window.ER || {};
ER.Drawable = function(x,y,width,height){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
};

ER.Drawable.prototype = {
    draw:function(ctx){
        ctx.fillStyle = "rgb('0,0,0')";
        ctx.fillRect(this.x, ctx.canvasHeight - this.y - this.height, this.width, this.height);
    }
};
