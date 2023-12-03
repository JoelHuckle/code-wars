function sortArray(array) {
    let oddArr = array.filter(n => n % 2 !== 0).sort((a,b) => a-b);
    return array.map(n => n%2 !== 0 ? oddArr.shift() : n)
  }