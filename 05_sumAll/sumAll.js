const sumAll = function(num1, num2) {
  if(num1 < 0 || num2 < 0 || !Number.isInteger(num1) || !Number.isInteger(num2))
  {
    return "ERROR";
  }

  let sum = 0;
  let start = num1;
  let end = num2;

  if(num1 > num2){
    start = num2;
    end = num1;
  }
  for(let i = start; i <= end; i++){
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
