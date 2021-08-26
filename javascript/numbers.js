
let input1=20,input2=40;
let Sum=input1+input2;
console.log(Sum);

let P=100,R=6,T=2;
let SI=P*T*R/100;
console.log(SI);

let m=+prompt("enter mass:");
let v=+prompt("enter volume");
KE=0.5 * m * v * v;
console.log(KE);

      let t=+prompt("enter Fahrenheit temperature:");
              C=(t - 32)*5/9;
             console.log("temperature in Celsius is:"+C);

let a=+prompt("enter value of a:");
let Area= a*a;
let Perimeter= 4*a;
let surfaceArea=6*a*a;
let Volume= a*a*a;
console.log("Area:"+Area);
console.log("Perimeter:"+Perimeter);
console.log("surfaceArea:"+surfaceArea);
console.log("Volume:"+Volume);

let CP=+prompt("enter cost price:");
let SP=+prompt("enter selling price:");
let diff=SP-CP;
if(diff>0)
console.log(diff+" Profit")
else{
let diff=CP-SP;
console.log(diff+" Loss");
}

let Num=+prompt("enter value of N:");
let sum=(Num*(Num+1))/2;
console.log(sum);

let N=+prompt("enter value of N:");
let count=0;
for(let i=1;i<=N*2;i++){
    if(i%2!=0 && count<=4){
    console.log(i);
    count++;
    }
}


let str=prompt("enter a number string:");
let num;
sum=0;
for(let i=0;i<str.length;i++){
 num=parseInt(str.slice(i, i+1));
 sum=sum+num;
}
console.log(sum);


n=+prompt("eneter a number:");
        let rem,SUM=0;
        while(n>0){
            rem=n%10;
            SUM=SUM*10+rem;
            n=~~(n/10);
        }
        console.log("The reverse of given number is:"+SUM);

let NUMBER = 1234;
NUMBER=toString(NUMBER);
let X=2;
for(let i=0;i<X;i++){
let last = arr7.pop();
    arr7.unshift(last);
}
console.log(arr7);
const number =+(prompt('Enter a decimal number: '));
const result = number.toString(2);

console.log('Binary:' + ' ' + result);

num =prompt('Enter a octal number: ');
console.log(parseInt(num,8));
    