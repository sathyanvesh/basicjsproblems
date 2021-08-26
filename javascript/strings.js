
let string="madam";
string=string.toUpperCase();
console.log(string);

let string2="Good";
let string3="Morning";
console.log(string3+string2);

let string4="agsrcbhdd";
console.log("no of char in string:"+(string4.length));


let string5="124";
console.log(Number(string5));


let string6="aderitolk";
var strArr = string6.split('');
for (var x = 0; x < string6.length; x++) {
var char = string6[x].toLowerCase();
if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u") {
      strArr[x] = '';
    }
  }
  console.log(strArr.join(''));


  let string7="batman@45";
  let regEx = /^[0-9a-zA-Z]+$/;
   if(string7.match(regEx))
     {
      console.log("alphanumeric")
     }
   else
     {
     console.log("not alphanumeric");
     }
  
 let string8="anvesh";
 let string9="satya";
 let string10="sathyanvesh"; 
 let len1=string8.length;
 let len2=string9.length;
 let len3=string10.length;
 let longest=len1>len2?((len1>len3)?len1:len3):((len2>len3)?len2:len3);
if(len1==longest)
console.log("longest:"+string8);
if(len2==longest)
console.log("longest:"+string9);
if(len3==longest)
console.log("longest:"+string10);
let smallest=len1<len2?((len1<len3)?len1:len3):((len2<len3)?len2:len3);
if(len1==smallest)
console.log("longest:"+string8);
if(len2==smallest)
console.log("longest:"+string9);
if(len3==smallest)
console.log("smallest:"+string10);

var string11 = "saaejudst";
 var userData=string11.toLowerCase();
var a = 0;
var e = 0;
var i = 0;
var o = 0;
var u = 0;
var consonants = 0;
var count;
for (count = 0; count < userData.length; count++){
    var char = userData.charAt(count);
    if(char.match(/[aeiou]/)){
        switch (char) {
            case 'a':
                a++;
                break;
            case 'e':
                e++;
                break;
            case 'i':
                i++;
                break;
            case 'o':
                o++;
                break;
            case 'u':
                u++;
                break;
        }
    } else if(char.match(/[bcdfghjklmnpqrstvwxyz]/)) {
        consonants++;
    }
}

console.log ("vowels: " +(a+e+i+o+u));
console.log ("consonants: " + consonants);

let string12="sathyanvesh",cnt=0;
while(string12[cnt]!==undefined)
cnt++;
if(cnt>7)
console.log("true");

let string13="satya";
let string14="satyanvesh";
len1=string13.length;
len2=string14.length;
longest=len1>len2?len1:len2;
if(longest==string13.length)
console.log(string13=string14);
else
console.log(string14=string13);



let str5="tic tac toe is a fun game";
const words1 = str5.split(" ");

for (let i = 0; i<2 ; i++) {
    words1[i] = words1[i].toUpperCase();
}

document.write(words1.join(" "));
document.write("<br>");
document.write("<br>");

let str6="5565534276455423";
const words2 = str6.split("");
len=str6.length;
for (let i = len-1; i>len-5 ; i--) {
    words2[i]="#";
}

document.write(words2.join(""));
document.write("<br>");
document.write("<br>");


let str7="Wed April 15, 7pm";
let date = str7.split(",");

document.write(date[0]);
document.write("<br>");
document.write("<br>");

let str8="tic tac toe is a fun game";
let subStr = str8.split(" ");
for(let i=0;i<str8.length;i++){
if(subStr[i]!=undefined)
document.write(subStr[i]+"<br>");
else
break;
}
document.write("<br>");
document.write("<br>");

let str9="madam";
rev=str9.split("").reverse().join("");;
if(str9==rev)
document.write("palindrome");
else
document.write("not a palindrome");
document.write("<br>");
document.write("<br>");


let str="madam";
c1='a';
c2='b';
const words = str.split("");
len=str.length;
for (let i = len-1; i>len-5 ; i--) {
    if(str[i]==c1)
    words[i]=c2;
}

document.write(words.join(""));
document.write("<br>");
document.write("<br>");



let str1="madam  is  back to  class";
str1 = str1.replace(/ /g, '');

document.write(str1);
document.write("<br>");
document.write("<br>");


    let str2="aaabbaajkuyvct"
    const myStr = str2.toLowerCase();
    const charMap = {};
    let max = 0;
    let maxChar = '';
  
    for (let char of myStr) {
      if (!charMap[char]) {
        charMap[char] = 1;
      } else {
        charMap[char]++;
      }
    }
  
    for (let char in charMap) {
      if (charMap[char] > max) {
        max = charMap[char];
        maxChar = char;
      }
    }
  
    document.write(maxChar);
    document.write("<br>");
    document.write("<br>");


  let str3="good afternoon";
  str = str3.split('')
  let finalArr = []
  let n = 0
  while(n < 1){
    let s = '';
    str.forEach((letter, index) => {
      if(n % 2 === 0 && index % 2 === 0) s += letter.toUpperCase()
      else if(n % 2 !== 0 && index % 2 !== 0) s += letter.toUpperCase()
      else s += letter
    })
      
    finalArr.push(s)
    n++
  }
  document.write(finalArr);
  document.write("<br>");
  document.write("<br>");


let str4="how was your day?";
let w="how";
let word=str4.split(" ");
for (let i = 0; i<2 ; i++) {
    if(word[i]==w)
    word[i]="";
}

document.write(word.join(" "));





