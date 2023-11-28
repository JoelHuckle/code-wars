function expandedForm(num) {
    let expanded = "";
    String(num).split('').forEach((n, i, arr) => {
      
      if(n !== "0"){
        const zNum = (arr.length - 1) - i;
        expanded += `${n}${"0".repeat(zNum)} + `
      }
    });
    return expanded.slice(0, -3);
  }