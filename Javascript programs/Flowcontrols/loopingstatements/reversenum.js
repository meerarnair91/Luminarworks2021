var num=323;
var res="";
var num1=num;

while(num!=0){
    let digit=num%10;
    // console.log(digit);
    res+=digit;
    num=Math.floor(num/10);
}
console.log(res);

if(res==num1){
    console.log("palindrome");
}