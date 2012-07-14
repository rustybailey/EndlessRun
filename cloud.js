window.ER = window.ER || {};
(function(){
    ER.Cloud = function(){ 
        ER.Actor.apply(this,arguments);
    };

    ER.Cloud.prototype = Object.create(ER.Actor.prototype);

    Utils.extend(ER.Cloud.prototype, {
        step2: function(timeSpan){

        }
    });

})();
