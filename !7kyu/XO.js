function XO(str) {
    str = str.toLowerCase();
    return [...str].filter(n => n == "x").length === [...str].filter(n => n == "o").length
  }