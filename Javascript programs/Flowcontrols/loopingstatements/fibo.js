// 0 1 1 2 3 5 8 13

var num1=0,num2=1,sum=0,i=0;
console.log(num1,"\n",num2);

// while(sum<=21){
//     sum=num1+num2; //1
//     num1=num2;
//     num2=sum;
//     console.log(sum);

// }

while(i<21){
    sum=num1+num2;
    num1=num2;
    num2=sum;
    console.log(sum);
    i++;
}
