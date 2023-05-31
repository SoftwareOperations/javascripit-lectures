console.clear();

function pow(iNumber, iGrade) {
  if (iGrade <= 1) return iNumber;
  else {
    iGrade--;
    return iNumber * pow(iNumber,iGrade);
  }
}
  
console.log(pow(3, 2));
console.log(pow(3, 3));
console.log(pow(1, 100));