var num=25,flag=0;

// for (let i=2;i<num;i++){
//     if(num%i==0){
//         flag++;
//         break;
//     }
// }
// console.log(flag==0?"prime":"not prime");

for(let i=2;i<num;i++)
{
    if(num%i==0)
    {
        flag++;
    }
}
console.log(flag==0?"prime":"not prime");