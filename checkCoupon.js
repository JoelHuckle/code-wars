function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
  const exp = new Date(expirationDate), cur = new Date(currentDate);  
  return cur <= exp && enteredCode === correctCode;
}