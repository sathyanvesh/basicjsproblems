
        let num1=5,num2=13,num3=7,num4=21,num5=48;
        let sum=num1+num2+num3+num4+num5;
        console.log(sum);


        let num=+prompt("enter a number:");
        if(num%2==0)
        console.log("even number");
        else
        console.log("odd number");

        let N1=129,N2=251;
        max=N1>N2?N1:N2;
        min=N1<N2?N1:N2;
        console.log("maximum number is:"+max);
        console.log("minimum number is:"+min);
        
       let NUM1=8,NUM2=23,NUM3=17;
       max=NUM1>NUM2?(NUM1>NUM3?NUM1:NUM3):(NUM2>NUM3?NUM2:NUM3);
       console.log("maximum number is:"+max);

        let number1=35,number2=29,number3=46
        min=number1<number2?(number1<number3?number1:number3):(number2<number3?number2:number3);
        console.log("minimum number is:"+min);


    let input=prompt("enter a month:");
    let month=input.toLowerCase();
    if(month=="january" || month=="march" || month=="may" || month=="july" || month=="august" || month=="october" || month=="december")
    console.log("entered month has 31 days");
    else
    console.log("entered month do not have 31 days");

    let array=[];
    for(let i=1;i<=100;i++){
        if(i%3==0)
       array.push("Fizz");
       else if(i%5==0)
       array.push("Buzz");
       else
       array.push(i);
    }

    console.log(array);


    for (var i = 1; i<=5; i++) {
    var str = "";
    for (var j = 1; j <= i; j++) {
    str += "*"+" ";
    }
    console.log(str);
    }


    let Num=+prompt("enter a number:");
    for(let i=1;i<=12;i++){
        console.log(Num+"*"+i+"="+Num*i);
    }


    let NUM=+prompt("enter number of values to be displayed:",5);
        let n1=0,n2=1;
        console.log("The fibonacci series is:");
        console.log(n1);
        console.log(n2);
        for(let i=2;i<NUM;i++){
        sum=n1+n2;
        console.log(sum);
        n1=n2;
        n2=sum;
        }

    let N=+prompt("enter a number",5);
        let fact=1;
        for(let i=1;i<=N;i++) {
            fact=fact*i;
        }
        console.log("Factorial of given number is:"+fact);


    let N4=+prompt("enetr a number:",1);
        let count=0;
        for(let i=1;i<=N4;i++){
        if(N4%i==0){
            count++;
        }
        }
        if(count==2){
            console.log("given number is prime number");
        }
        else{
            console.log("given number is not prime number");
        }


    let input1=prompt("enter a day:");
     let day=input1.toLowerCase();
    if(day=="saturday" || day=="sunday")
     console.log("weekend");
     else
     console.log("weekday");
