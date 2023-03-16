// 3.1 positive value
let value = 5; 
while (value > 0) {
    if (value > 0) {
        console.log(value);
        value -=0.5;
    }
}

// 3.2 odd numbers
const oddNumber = (n) => {
    let count = 1;
    while (count <= n) {
      if (count%2 !== 0) { // false
        console.log(count);
      }
      count++
    }
  }
  oddNumber(100);

// 3.3 loop print number
const printBracket = (n) => {
    let count = 1;
    while (count <= n) {
      console.log(`[${count}]`);
      count++;
    }
  }
  printBracket(6);
// 3.4 sum 1+...+n;
const sum = (x) => {
    let i = 0;          // iterations
    let nums = 0;       // sum result
    while (i <= x) {
        nums += i;
        i++;            // stop parameters
    }
    console.log(nums);
}
sum(100);