// Problem : 
// Find the palindrome of a given string/number

// Sample input:
// madam
// alia
// Sample output:
// true
// false



const isPalindrome =(str)=>{
    const another=str.split("").reverse().join("");
    if (str===another) {
        return true;
    }
    return false;
}
console.log(isPalindrome("alia"));