
var i, j;
var arr1 = [
 [1, 1, 1],
 [1, 1, 1],
 [1, 1, 1]
];
var arr2 = [
 [2, 2, 2],
 [2, 2, 2],
 [2, 2, 2]
];
var arr3 = [
 [0, 0, 0],
 [0, 0, 0],
 [0, 0, 0],
];

document.write("Matrix A (3 x 3):<br>");
for(i=0; i<3; i++)
{
 for(j=0; j<3; j++)
  document.write(arr1[i][j] +" ");
 document.write("<br>");
}

document.write("Matrix B (3 x 3):<br>");
for(i=0; i<3; i++)
{
 for(j=0; j<3; j++)
  document.write(arr2[i][j] +" ");
 document.write("<br>");
}

document.write("Sum of Matrix:<br>");
for(i=0; i<3; i++)
{
 for(j=0; j<3; j++)
 {
  arr3[i][j] = arr1[i][j] + arr2[i][j];
  document.write(arr3[i][j] +" ");
 }
 document.write("<br>");
}

document.write("<br>");
document.write("<br>");

var matrix = [
 [1, 2, 2],
 [2, 3, 2],
 [2, 2, 5]
];


  for (var i = 0; i < matrix.length; i++) {
    for (var j = 0; j < i; j++) {
      const temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }
document.write("transpose of matrix:<br>");
for(var i=0; i<3; i++)
{
 for(var j=0; j<3; j++)
 {
  document.write(matrix[i][j] +" ");
 }
 document.write("<br>");
}

document.write("<br>");
document.write("<br>");


var i;
var j;
document.write("identity matrix:<br>");
for (i=0; i < 3; i++)
{
  for (j=0; j < 3; j++)
  {
       if (i === j)
       {
        
         document.write(' 1 ');
       }
              
       else 
        {
         document.write(' 0 ');
        }
        }
     document.write("<br>");
   }


   var array = [10,4,5,2,5,6,9],
    sum = 0,
    i;
for (i = 0; i < array.length; i += 1) 
   {
    sum += array[i];
    }
console.log('Sum : '+sum); 

var array1 = [10,4,5,2,5,6,9],
    sum = 0,
    i;
for (i = 0; i < array1.length; i += 1) 
   {
    sum += array[i];
    }
let avg=sum/array1.length;
console.log('Sum : '+avg); 


var array2 = [10,4,5,2,5,6,9],largest= 0;

            for (let i=0; i<=largest;i++){
            if (array2[i]>largest) {
            var largest=array2[i];
			var index=i;
          }
         }
console.log('maximum : '+array2[index]); 

var smallest= array2[0];

            for (i=0; i<=array2.length;i++){
            if (array2[i]<smallest) {
            var smallest=array2[i];
			var ind=i;
          }
         }
         console.log('minimum : '+array2[ind]); 




        var array3 = [1, 4, 7, 9];
        array3 = array3.sort(
            function (a, b) { return a - b });
        var length = array3.length;
  
        if (length % 2 == 1) {
            console.log(array3[(length / 2) - .5])
        }
        else {
            console.log((array3[length / 2] 
                + array3[(length / 2) - 1]) / 2);
        }



var arr4=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var mf = 1;
var m = 0;
var item;
for (var i=0; i<arr4.length; i++)
{
        for (var j=i; j<arr4.length; j++)
        {
                if (arr4[i] == arr4[j])
                 m++;
                if (mf<m)
                {
                  mf=m; 
                  item = arr4[i];
                }
        }
        m=0;
}
console.log("Most repeating term:",item) ;


var arr5=[3,5,2,9,4],
 arr6=[6,2,8,1,3],sum1=0,sum2=0,sum3;
 for(let i=0;i<arr5.length;i++)
 sum1+=arr5[i];
 for(let i=0;i<arr5.length;i++)
 sum2+=arr6[i];
 sum3=sum1+sum2;
 console.log("sum:"+sum3);


 var str = "saaejudst";
 var userData=str.toLowerCase();
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


var arr7=[1,2,3,4,5];
let X=1;
for(let i=0;i<X;i++){
let last = arr7.pop();
    arr7.unshift(last);
}
console.log(arr7);