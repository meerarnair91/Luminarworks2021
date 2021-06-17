var num1=7,num2=63,res=0;

for(let i=1;i<=num1;i++){
    if((num1%i==0) & (num2%i==0)){
        res=i;
    }
    
}
console.log(res);
