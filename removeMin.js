function removeSmallest(numbers) {
    const min = numbers.indexOf(Math.min(...numbers));
    return numbers.slice(0, min).concat(numbers.slice(min+1));
}
  
     