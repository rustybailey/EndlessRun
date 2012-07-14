window.ER = window.ER || {};
(function(){
    var defaults = {
        width: 1,
        height: 1,
        x: 0,
        y: 0,
        color: new Color(0,0,0)
    };

    ER.Actor = function(props){
        Utils.extend(this,Utils.clone(defaults),props);
    };

    ER.Actor.prototype = {
        draw:function(ctx){
            ctx.fillStyle = this.color.toString();
            ctx.fillRect(this.x, ctx.canvasHeight - this.y - this.height, this.width, this.height);
        }
    };
})();
