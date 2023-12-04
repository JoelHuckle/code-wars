function queueTime(customers, n) {
    if(customers.length < 1)return 0;
    
    let checkouts = []
    customers.forEach(cust => {
      checkouts.length < n 
        ? checkouts.push(cust) 
        : checkouts[checkouts.indexOf(Math.min(...checkouts))] += cust;
    })
    
    return Math.max(...checkouts);
  }