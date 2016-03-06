var combo_engine = (function(){

    var combo_engine = {};

    var spaces, initial_vals;

    combo_engine.setSpaces = function(s){
        spaces = s;
    }

    combo_engine.getSpaces = function(){
        return spaces;
    }

    combo_engine.generateInitialVals = function(){

        // blank it
        initial_vals = [];

        // set them all randomly
        for(var i=0; i<spaces; i++){
            var val = Math.floor(Math.random() * spaces);
            initial_vals.push(val);
        }

        // if it's good... return them.
        if(getMinMoves(intial_vals) > 0){return initial_vals;}

        // otherwise go another round
        return generateInitialVals();
    }

    combo_engine.getInitialVals = function(){
        return initial_vals;
    }

    function getMinMoves(intial_vals){
        1;
    }


    return combo_engine;



}());