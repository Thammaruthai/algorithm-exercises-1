function addStrings(num1, num2) {
  //Start coding here
  return (Number(num1) + Number(num2)).toString(); 
}

let result1 = addStrings("11", "123");
let result2 = addStrings("456", "77");
let result3 = addStrings("0", "0");

console.log(result1); // "134"
console.log(result2); // "533"
console.log(result3); // "0"
