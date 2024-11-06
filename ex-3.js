function singleNumber(nums) {
  // Start coding here
  let numCount = {};
  let result = null;
  for (let i = 0; i < nums.length; i++) {
    if (numCount[nums[i]] == undefined) {
      numCount[nums[i]] = 1;
    } else numCount[nums[i]]++;
  }

  for (let i in numCount) {
    if (numCount[i] === 1) {
      result = Number(i);
      return result;
    }
  }

  return Number(null);
}

let result1 = singleNumber([2, 2, 1]);
let result2 = singleNumber([4, 1, 2, 1, 2]);
let result3 = singleNumber([10]);

console.log(result1); // 1
console.log(result2); // 4
console.log(result3); // 10
console.log(typeof result1); // "number"
