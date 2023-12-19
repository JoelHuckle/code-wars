const multiTable = number => {
    let res = ""
    for(let i = 1; i <= 10; ++i){
      res += `\n${i} * ${number} = ${i*number}`
    }
    return res.slice(1)
  }