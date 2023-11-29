function spinWords(string){
    return string.split(' ').map(n => 
      n.length >= 5 ? [...n].reverse().join('') : n
    ).join(' ')
  }