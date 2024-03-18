// count the char occarance of given string 
// sample input : javascript 
// char :a 
//  sample output 2


// one way 
// const sentence="javascripta";
// const arrSentence=sentence.split('');
// console.log(arrSentence);
// const a =arrSentence.filter(c=>c==="a");
// console.log(a);
// const output=a.length
// console.log(output);




// two way with function 

const counta=(str,char)=>{
    // const sentence="javascripta";
    let count =0;
    for (let i = 0; i <str.length; i++) {
        let element = str[i];
        if (element===char) {
           count++;
        }
       
    }
    return count
}
console.log(counta("javascript","t"))