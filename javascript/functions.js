
     let power=function (a,b){
          return a**b;
    };
    console.log(power(2,3));

    function areaOfHexagon(len){
    return (3*Math.sqrt(3)*(len**2))/2;
    }
    console.log(areaOfHexagon(10));

   function noOfWords(str){
       let count=0;
   for(i=0;i<str.length;i++){
       if(str[i]==" "){
           count++;
       }
    }
    return count+1;
   };

   console.log(noOfWords("We are alchemyst"));

function findMax(...theArgs) {
  let sortedArgs = theArgs.sort()
  let len=theArgs.length;
  return sortedArgs[len-1];
}

console.log(findMax(3,5));
console.log(findMax(3,5,9,1));

function findMin(...theArgs) {
  let sortedArgs = theArgs.sort()
  let len=theArgs.length;
  return sortedArgs[0];
}

console.log(findMin(3,5));
console.log(findMin(3,5,9,1));

function typeOfTriangle(x, y, z)
{
    if (x == y && y == z)
        console.log("Equilateral Triangle");
    else if (x == y || y == z || z == x)
        console.log("Isoceles Triangle");
    else
        console.log("Scalene Triangle");
}
typeOfTriangle(30, 60, 90);


function arrayLength(arr){
    return arr.length;
}
console.log(arrayLength([1,5,3,7,8]));


function indexOf(arr,num){
    for(let i=0;i<arr.length;i++){
  if(arr[i]==num)
  return i;
    }
}
console.log(indexOf([1,6,3,5,8,9], 3));

function replace(arr,num1,num2){
  for(let i=0;i<arr.length;i++){
  if(arr[i]==num1)
  arr[i]=num2;
    }
    return arr;
}
console.log(replace([1,5,3,5,6,8], 5, 10));


function mergeArray(arr1,arr2){
    let len=arr2.length;
    for(let i=0;i<len;i++){
        arr1.push(arr2[i]);
    }
    return arr1;
}
console.log(mergeArray([1,3,5], [2,4,6]));


function charAt(str,index){
return str[index];
}
console.log(charAt("skillsafari", 4));


function minDate(date1,date2){
    let day1 = new Date(date1); 
    let day2 = new Date(date2);
    let diff=day1.getTime()-day2.getTime();
    if(diff>0)
    return date1;
    else
    return date2;
}
console.log(minDate('02/05/2021', '24/01/2021'));

function encodeString(str, num) {
    str = str.toLowerCase();

    var result = '';
    var charcode = 0;

    for (var i = 0; i < str.length; i++) {
        charcode = (str[i].charCodeAt()) + num;
        result += String.fromCharCode(charcode);
    }
    return result;

}
console.log(encodeString("skill", 2));


function toSentenceCase(str){
const words = str.split(" ");

for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
}

return words.join(" ");
}

console.log(toSentenceCase('we are alchemyst'));


function sortArray(arr){
    arr.sort( function( a , b){
    if(a > b) return 1;
    if(a < b) return -1;
    return 0;
});
return arr;
}

console.log(sortArray([100,83,32,9,45,61]));

function reverseCharactersOfWord(str){
    const words = str.split(" ");
    for (let i = 0; i < words.length; i++) {
     words[i] = words[i].split("").reverse().join("");
}
return words.join(" ");
}
console.log(reverseCharactersOfWord('we are alchemyst'));  
    