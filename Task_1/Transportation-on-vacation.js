function rentalCarCost(noOfDays) {
  let cost = 40;
  let totalAmount = noOfDays * cost;
  if(noOfDays >= 7) {
    return totalAmount - 50;
  } 
  else if(noOfDays >= 3) {
    return totalAmount - 20;
  }
  return totalAmount;
}