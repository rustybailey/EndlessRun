window.ER = window.ER || {};
(function(){
    ER.Cloud = function(){ 
        ER.Actor.apply(this,arguments);
    };

    ER.Cloud.prototype = Object.create(ER.Actor.prototype);

    ER.Cloud.prototype.step = function(){
        console.log("step");
    };
})();
