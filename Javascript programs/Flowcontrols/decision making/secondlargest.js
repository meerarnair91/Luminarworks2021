var num1 = 90, num2 = 560, num3 = 50;


if ((num1 > num2) && (num1 > num3) && (num2 > num3)) {
    console.log("Second largest num is", num2);
}
else if ((num1 > num2) && (num1 > num3) && (num3 > num2)) {
    console.log("Second largest num is", num3);
}

else if ((num2 > num1) && (num2 > num3) && (num1 > num3)) {
    console.log("Second largest num is", num1);
}
else if ((num2 > num1) && (num2 > num3) && (num3 > num1)) {
    console.log("Second largest num is", num3);
}
else if ((num3 > num1) && (num3 > num2) && (num1 > num2)) {
    console.log("Second largest num is", num1);
}
else if ((num3 > num1) && (num3 > num2) && (num2 > num1)) {
    console.log("Second largest num is", num2);
}
