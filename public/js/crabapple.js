var crabapple = (function($){

  var crabapple = {};

  Number.prototype.mod = function(n) { return ((this%n)+n)%n; }

  vals = [];
  spaces = 0;
  min_moves = 0;

  // $('document').ready(initialize);
  // $("#create").click(initialize);
  // $("#parts").on('click', "td", handleClick);
  // $("#reset").click(reset);

  function reset(){
    setMoves(0);
    setBoard(vals);
  }

  function handleClick(){
      if($(this).hasClass('selected')){
      clearAll();
    }else if($(this).hasClass('option')){
      doSwitch(this);
    }else{
        setSelected(this);
    }
  }

  function doSwitch(td_option){
    var td_selected = $('.selected');
    
    var selected_val = $(td_selected).text();
    var option_val = $(td_option).text();
    
    $(td_option).text(selected_val);
    td_selected.text(option_val);
      clearAll();
    
    incrementMoves();
    
    if(isWinState()){
      var message = "You won in " + getMoves() + " moves!\n\r"
                  + "The best possible was " + getMinMoves() + ".\n\r";
                  
      if(getMoves() <= getMinMoves()){message += "PERFECT SCORE!";}
      
      alert(message);
    }
  }

  function setSelected(td){
    var val = $(td).text()/1;
      var selected_i = $(td).index();
    var option1_i = (selected_i + val).mod(spaces);
    var option2_i = (selected_i - val).mod(spaces);

    clearAll();
    $("#parts td:eq(" + option1_i + ")").addClass('option');
    $("#parts td:eq(" + option2_i + ")").addClass('option');
    $(td).addClass('selected');
  }

  function clearAll(){
    $("#parts td")
      .removeClass('selected')
      .removeClass('option');
  }

  function initialize(){
    setSpaces();
    setMoves(0);
    setVals();
    setMinMoves();
    setBoard();
  };

  function incrementMoves(){
    var moves = getMoves();
    setMoves(moves + 1);
  }

  function setSpaces(){
    spaces = $("#spaces").val() / 1;
  }

  function setMinMoves(){
      min_moves = calcMinMoves([vals], 0);
  }

  crabapple.getMinMoves = function(combo){
    return crabapple.calcMinMoves([combo]);
  }

  crabapple.calcMinMoves = function(combo_set, moves, move_ceiling){

    if(combo_set.length < 1 || combo_set[0].length < 1){return -1;}

    if(typeof moves == 'undefined'){moves = 0;}

    if(typeof move_ceiling == 'undefined'){
      move_ceiling = crabapple.countPermutations(combo_set[0]);
    }

    if(moves > move_ceiling){return -1;}
    
    for(i=0; i<combo_set.length; i++){
      if(crabapple.isArraySorted(combo_set[i])){
        return moves;
      }
    }
    
    var combo_set_variants = getComboSetVariants(combo_set);
    
    return crabapple.calcMinMoves(combo_set_variants, moves+1, move_ceiling);
    
  }

  function getComboSetVariants(combo_set){

    var combo_set_variants = [];
    
    for(var i=0; i < combo_set.length; i++){
      var combo = combo_set[i];
      var combo_variants = crabapple.getComboVariants(combo);
      combo_set_variants = combo_set_variants.concat(combo_variants);
    }
    
    return combo_set_variants;
  }

  crabapple.getComboVariants = function(combo){

    var combo_variants = [];
    
    for(var i=0; i<combo.length; i++){
      var swapped_down = crabapple.swappy(combo, i, -1);
      var swapped_up = crabapple.swappy(combo, i, 1);
      combo_variants.push(swapped_down);
      combo_variants.push(swapped_up);
    }

    return combo_variants;
  }

  crabapple.countPermutations = function(arr) {

    var count = factorial(arr.length);
    var tallies = {};
    for(i=0; i<arr.length; i++){
      var val = arr[i];
      if(typeof tallies[val] == 'undefined'){tallies[val] = 0;}
      tallies[val] += 1;
    }

    for (var key in tallies) {
      if (tallies.hasOwnProperty(key)) {
        count = count / factorial(tallies[key]);
      }
    }

    return count;
  }

  function factorial(num){
    var total = 1;
    for(i=1; i<=num; i++){
      total *= i;
    }
    return total;
  }

  function removeArrayDupes(arr){
    unique_array = arr.filter(function(item, pos, self) {
      return self.indexOf(item) == pos;
    });
    return unique_array;
  }

  crabapple.swappy = function(arr, i, dir){
    new_arr = arr.slice(0);
    i_val = arr[i];
    
    j = (i + i_val * dir).mod(arr.length);
    
    j_val = arr[j]
    
    new_arr[i] = j_val;
    new_arr[j] = i_val;
    
    return new_arr;

  }

  function setMoves(val){
    $("#moves").html(val);
  }

  function isWinState(){
    var vals = [];
    $("#parts td").each(function() { 
      vals.push($(this).text()/1); 
    });
    
      return isArraySorted(vals);
  }

  crabapple.isArraySorted = function(vals){
    for(var i = 0; i<vals.length; i++){
      if(i>0){if(vals[i] < vals[i-1]){return false;}}
    }
    return true;
  }

  function getMoves(){
    return $("#moves").text() / 1;
  }

  function setVals(){
    vals = [];
    while(vals.length == 0 || isArraySorted(vals))
    for(var i=0; i<spaces; i++){
      var val = Math.floor(Math.random() * spaces);
      vals.push(val);
    }
  }

  function setBoard(){
    $("#parts tr").empty();
    vals.forEach(function(val){
      var td = $("<td>" + val + "</td>");
      $("#parts tr").append(td);
    });
  }
  return crabapple;
})(jQuery);
