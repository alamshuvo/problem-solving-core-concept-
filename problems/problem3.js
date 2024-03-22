// date : 23/03/24 
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

// prothome j nums passi seta to number e ase r jehetu number k for loop calano jai na tai takhe toString kore akta variable e rekhe dilam .and next akta sum variable nilam and ,abr string er upor for loop calalam and for loop every nums k access kore pele and sekhane prottekta element  k abr parseint kore karon parseint cara sum ber kora jabe na .so eta holo explanation .