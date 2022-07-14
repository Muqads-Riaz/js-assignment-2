//1. Write a function that displays current date & time in your
//browser.


document.write("<h2>Ans: 1</h2>");
 
 function showDate(){
    var a = new Date();
    document.write(a);
 }
 showDate();



 //2. Write a function that takes first & last name and then it
//greets the user using his full name.


 document.write("<h2>Ans: 2</h2>");
 var fname = prompt("Write the first name");
 var lname = prompt("Write the last name");
 function fullName( fn, ln ){
    document.write("Welcome to our website " + fn + " "+ ln);
 }
 fullName(fname, lname);



 //3. Write a function that adds two numbers (input by user)
//and returns the sum of two numbers.



document.write("<h2>Ans: 3</h2>");
var a = prompt("Wite one number");
var b = prompt("Wite another number");
a = +a;
b = +b;

function sum(a,b){
    var s = a + b;
    return s;
}
 var c ="Sum of two numbers is " + sum(a,b);
 document.write(c);


 /*4. Calculator:
Write a function that takes three arguments num1, num2
& operator & compute the desired operation. Return and
show the desired result in your browser.*/
document.write("<h2>Ans: 4</h2>");
var num1 = prompt("Write one number");
num1 = +num1;
var num2 = prompt("Write second number");
num2 = +num2;
var operator = prompt("Write the operator e.g (+, -, *, /, %)");

function calculator(num1,operator,num2){
    var result;  
    if(operator == "+"){
        result = num1 + num2;
      }else  if(operator == "-"){
        result = num1 - num2;
      }else  if(operator == "*"){
        result = num1 * num2;
      }else  if(operator == "/"){
        result = num1 / num2;
      }else  if(operator == "%"){
        result = num1 % num2;
      }
      else{
        alert("Please, Enter the valid operation.");
        result = "Math Error"
      }

    return result;
}

var d =  calculator(num1 , operator, num2);
 document.write("After the operation, ans is "+ d)





 //5. Write a function that squares its argument.


 document.write("<h2>Ans: 5</h2>");

 function square(num){
    var sq = num **2;
    document.write( "The square of " + num + " is " + sq);
 }
square(8);



//6. Write a function that computes factorial of a number.



document.write("<h2>Ans: 6</h2>");

function factorial(n){
    var fact = 1;
    for(var i = n ; i > 1 ; i--){
        fact = fact * i;
    }
    document.write("The factorial of " + n + " is " + fact)
}

factorial(3);




//7. Write a function that take start and end number as inputs
//& display counting in your browser.



document.write("<h2>Ans: 7</h2>");
var start = prompt("Write the starting number")
start = +start;
var end = prompt("Write the starting number")
end = +end;
document.write( "Counting:<br>")
function counting(start,end){
    for(var i = start; i<=end ; i++){
       document.write( i  +"<br>") 
    }
}
counting(start,end);



/*8. Write a nested function that computes hypotenuse of a
right angle triangle.
Hypotenuse2 = Base2 + Perpendicular2

Take base and perpendicular as inputs.
Outer function : calculateHypotenuse()
Inner function: calculateSquare()*/


document.write("<h2>Ans: 8</h2>");
var base = prompt("Write the base of triangle");
base = +base;
var perpendicular = prompt("Write the perpendicular of triangle");
perpendicular = +perpendicular;

function hypotaneous(base,perpendicular){

function square(i){
    var sqr = i**2;
    return sqr;
} 
var Base2 = square(base);
var per2 = square(perpendicular);
var hyp = Math.sqrt(Base2 + per2);
document.write("The hypotaneous of triangle is " + hyp)
}
hypotaneous(base,perpendicular);



/*9. Write a function that calculates the area of a rectangle.
 A = width * height
 Pass width and height in following manner:
i. Arguments as value
ii. Arguments as variables*/


document.write("<h2>Ans: 9</h2>");
var width2 = 20;
var height2 = 15;
function areaOfRectangle( width , height){
    var area = width * height;
    document.write("The area of rectangle is " + area);
}
areaOfRectangle(30,40);
document.write("<br>")
areaOfRectangle(width2,height2);




//10. Write a JavaScript function that checks whether a passed
//string is palindrome or not?


document.write("<h2>Ans: 10</h2>");
var text = prompt("Write any word");
function reverse(text){
    var rep = [];
    var j = 0;
    for( var i = text.length; i >= 1; i--){
     rep[j] = text[i-1];
     j++; 
    }
    var newText = rep.join("");
    return newText;
}

var rep = reverse(text);

    if(text==rep){
        document.write("<br>It is pelidrome");
    }else  if(text!=rep){
        document.write("<br>It is not pelidrome");
    }else{
    document.write("please! write the valid word")
    }



/*11. Write a JavaScript function that accepts a string as a
parameter and converts the first letter of each word of the
string in upper case.
EXAMPLE STRING : 'the quick brown fox'
EXPECTED OUTPUT : 'The Quick Brown Fox'*/


document.write("<h2>Ans: 11</h2>");
var sentence = prompt("Write a short sentence")
 
function upper(sentence){
var text3 = sentence.split(" ");
var text4 = [];
for( var i = 0; i < text3.length ; i++ ){
var text3_1st = text3[i].slice(0,1);
var text4_1st = text3_1st.toUpperCase();
var text3_extra = text3[i].slice(1);
var text4_extra = text3_extra.toLowerCase();
text4[i] = text4_1st + text4_extra;
}
text4 = text4.join(" ");
document.write(text4);
}
upper(sentence);


// 12. Write a JavaScript function that accepts a string as a
// parameter and find the longest word within the string.
// EXAMPLE STRING : 'Web Development Tutorial'
// EXPECTED OUTPUT : 'Development'
 
 document.write("<h2>Ans: 12</h2>");
var sentence10 = prompt("Write any sentence");
function length10(sentence10){
    var longestword;
    var length11 = 0;
    var pieces = sentence10.split(" ");
for(var i = 0 ; i < pieces.length ; i++){
    if(pieces[i].length  > length11){
       longestword = pieces[i];
       length11 = pieces[i].length;
    }
}
document.write("In this sentence, the longestword is " + longestword)
};
length10(sentence10)


// 13. Write a JavaScript function that accepts two arguments, a
// string and a letter and the function will count the number of
// occurrences of the specified letter within the string.
// Sample arguments : 'JSResourceS.com', 'o'

document.write("<h2>Ans: 13</h2>");
var string1 =prompt("Write any text");
var letter =prompt("Write any letter"); 

function sample(string1,letter){
    var occur = 0;
    for(var i = 0 ; i < string1.length ; i++){
    if(string1[i] == letter){
        occur = occur + 1;
    }
    }
    document.write( "The occurence of " + letter + " in the string is  "  + occur + " times");

}
 sample(string1,letter);



//  14. The Geometrizer
// Create 2 functions that calculate properties of a circle, using
// the definitions here.
// Create a function called calcCircumference:
// • Pass the radius to the function.
// • Calculate the circumference based on the radius, and output
// "The circumference is NN".
// Create a function called calcArea:
// • Pass the radius to the function.
// • Calculate the area based on the radius, and output "The area
// is NN".
// Circumference of circle = 2πr
// Area of circle = πr2

document.write("<h2>Ans: 14</h2>");
var radius = prompt("Write the radius of circle")
function circumference(radius){
var circum =  2 * 3.14 * radius;
document.write( "The circumference is " + circum);
document.write("<br>");
};

circumference(radius);
function calcArea(radius){
var calc = 3.14 * radius * radius;
document.write(  "The area is " + calc);
}
calcArea(radius);