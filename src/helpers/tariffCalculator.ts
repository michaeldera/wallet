export function calculateCharge( amount : number) : number {
  let transactionCharge = 0;
  if (amount < 2 )
   {
     transactionCharge = 0.10;
   } else if ( amount >= 2 && amount <= 5 ){
     transactionCharge = 0.12;
  } else if (amount > 5 && amount <= 10){
     transactionCharge  = 0.29 
  } else if (amount > 10 && amount <= 20){
    transactionCharge = ((amount - 10) * 0.02 )+ 0.81;
  } else if (amount > 20 && amount <= 30){
    transactionCharge = ((amount - 20) * 0.02) + 1.35;
  } else if (amount > 30 && amount <= 40) {
    transactionCharge = ((amount - 30) * 0.02) + 1.82;
  } else if (amount > 40 && amount <= 50){
    transactionCharge = ((amount - 40) * 0.02) + 2.44;
  } else if (amount > 50 && amount <= 60) {
    transactionCharge = ((amount - 50) * 0.02) + 3.39;
  } else if (amount > 60 && amount <= 75) {
    transactionCharge = ((amount - 60) * 0.02) + 3.79;
  } else if (amount > 75 && amount <= 100) {
    transactionCharge = ((amount - 75) * 0.02) + 5.01;
  } else if (amount > 100 && amount <= 150) {
    transactionCharge = ((amount - 100) * 0.02) + 6.41;
  } else if (amount > 150 && amount <= 200) {
    transactionCharge = ((amount - 150) * 0.02) + 8.18;
  } else if (amount > 200 && amount <= 300) {
    transactionCharge = ((amount - 200) * 0.02) + 9.27;
  } else if (amount > 300 && amount <= 400) {
    transactionCharge = ((amount - 300) * 0.02) + 11.29;
  } else if (amount > 400 && amount <= 500) {
    transactionCharge = ((amount - 400) * 0.02) + 13.31;
  } else {
    transactionCharge = ((amount - 500) * 0.02) + 8.18;
  }


  return transactionCharge;
}

export const foo = 'foo';