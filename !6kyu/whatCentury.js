function whatCentury(year){
  
    let pre = String(Math.ceil(Number(year) / 100)), end = "th";
    
    if(pre[0] !== "1"){
      switch(pre[1]){
          case("1"): end = "st"; break;
          case("2"): end = "nd"; break;
          case("3"): end = "rd"; break;
    }}
  
    return `${pre}${end}`
}