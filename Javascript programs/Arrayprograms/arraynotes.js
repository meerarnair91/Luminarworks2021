var expenses=[20000,30000,26000,82000,78000];
var sum=0;var flag=0;

// for(let i=0;i<expenses.length;i++)
// {
// console.log(expenses[i]);
// }

// for(let val of expenses){
//     console.log(val);
// }

// for(let i=0;i<expenses.length;i++){
//     sum+=expenses[i];

// }
// console.log(sum);

for(let val of expenses){
    sum+=val;
}
console.log("total expenses",sum);


for(let amount of expenses){
    if(amount>25000)
    {
        console.log(amount);
    }
}

for(let count of expenses){
    if(count>25000){
        flag++;
    }

}
console.log(flag);
// 

var highexp=0;

for (let exp of expenses){
    if(exp>highexp){
        highexp=exp;
    }
}
console.log(highexp);

for(let i=0;i<=expenses.length;i++){
    if(expenses[i]>highexp){
        highexp=expenses[i];
    }
}
console.log(highexp);




