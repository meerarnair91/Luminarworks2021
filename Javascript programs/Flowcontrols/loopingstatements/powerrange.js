var num=3;
var low=8,upp=30;

for(let i=1;i<=upp;i++){
    let digit=i**num;
    if((digit>=low)&(digit<=upp))
    {
        console.log(digit);
    }

}