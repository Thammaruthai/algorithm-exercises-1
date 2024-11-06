function findOdd(nums) {
  // Start coding here
  let oddCount=0
  let oddIndex =[]
  for (let index = 0; index < nums.length; index++) {
    if(nums[index]!=nums[index+1] && nums[index]%2===1){
      oddCount++;
    }
  }
    
  return oddCount
  
}

let result1 = findOdd([0]);
let result2 = findOdd([1, 1, 2]);
let result3 = findOdd([1, 2, 2, 3, 3, 4, 3, 3, 1]); 

console.log(result1); // 0
console.log(result2); // 2
console.log(result3); // 4
//ไม่เข้าใจโทย์ งง