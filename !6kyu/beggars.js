function beggars(values, n){
    if (n < 1)return []
    
    let curr = 0, 
        res = Array(n).fill(0);
    
    values.forEach(x => {
      res.splice(curr, 1, Number(res[curr])+x);
      curr == n-1 
        ? curr = 0
        : curr++
    })
    
    return res
  }