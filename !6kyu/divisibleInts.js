function getCount(n){
    let count = 0, x = String(n), len = x.length;
    
    for(let i = 0; i < len; ++i){
      for(let j = i+1; j <= len; ++j){
        const sub = x.slice(i, j)
        if(sub !== 0 && Number.isInteger(n/sub))count++
      }
    }
  
    return count-1;
  }
  