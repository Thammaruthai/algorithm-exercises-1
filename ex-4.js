function findOdd(nums) {
  // Start coding here
   let numCount = {};
   let result = null;
   for (let i = 0; i < nums.length; i++) {
     if (numCount[nums[i]] == undefined) {
       numCount[nums[i]] = 1;
     } else numCount[nums[i]]++;
   }

     for (let i in numCount) {
       if (numCount[i] %2===1) {
         result = Number(i);
         return result;
       }
     }
   
   
}

let result1 = findOdd([0]);
let result2 = findOdd([1, 1, 2]); //ทำไมอันนี้ 2 
let result3 = findOdd([1, 2, 2, 3, 3, 4, 3, 3, 1]);  //แต่อันนี้ 4

console.log(result1); // 0
console.log(result2); // 2
console.log(result3); // 4
//ไม่เข้าใจโทย์ งง