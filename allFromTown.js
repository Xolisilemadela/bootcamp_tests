function allFromTown(regNums, regStart){
    var lstregNums = regNums.split(',');
    var results = [];
    
    for(var i=0; i<lstregNums.length; i++){
      var trimmedlstregNums = lstregNums[i].trim();
      if(trimmedlstregNums.startsWith(regStart)){
        results.push(trimmedlstregNums)
      }
    }
    return results;
  }