(function(){
    window.onload = load;

    function load(){
        var canvas = document.getElementById('canvas');
        var ctx = canvas.getContext('2d');

        var width = canvas.width;
        var height = canvas.height;

        var platformHeight = 100;
        ctx.fillStyle = "rgb('0,0,0')";
        ctx.fillRect(0,height-platformHeight,width,platformHeight);
    }

})();
