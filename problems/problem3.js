// Problem: Find the sum of digits from a given number

// Sample input:
// 437
// Sample output:
// 14


const sum=(nums)=>{
let stringNums=nums.toString();
// console.log(typeof stringNums);
let sum = 0;
for (let i = 0; i < stringNums.length; i++) {
    // console.log(i);
    const num=parseInt(stringNums[i]);
    sum+=num;
    
}
return sum
}

console.log(sum(437));