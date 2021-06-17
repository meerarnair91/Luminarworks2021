// var i=1;

// while(i<=10){
//     console.log(i);
//     i++;
// }

// var i=10;
//  while(i>=1)
//  {
//      console.log(i);
//      i--;
//  }

// var upp=50;
// var i=1;

// while(i<=upp)
// {
//     if(i%2!=0){
//         console.log(i);
//     }
//     i++;
// }

// var sum=0,i=1;

// while(i<=10){
//     sum+=i;
//     i++;
// }
// console.log(sum);


var num=123;
var res="";

while(num!=0){
    let digit=num%10;
    res+=digit;
    
    num=Math.floor(num/10);
}
console.log(res);