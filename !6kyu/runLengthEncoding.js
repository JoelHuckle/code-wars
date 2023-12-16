var runLengthEncoding = function(str){
    let res = [], count = 1;
    for(let i = 0; i < str.length; ++i){
      if(str[i+1] !== str[i]){
        res.push([count, str[i]]);
        count = 1
      } else {
        count++
      }
    }
    return res
  }