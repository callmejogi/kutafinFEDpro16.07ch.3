function sumClosure() {
    let total = 0;
    
    return function addNumber(num) {
      total += num;
      return total;
    }
  }
  const sumFunc = sumClosure();
  
  console.log(sumFunc(3));
  console.log(sumFunc(5));  
  console.log(sumFunc(20)); 