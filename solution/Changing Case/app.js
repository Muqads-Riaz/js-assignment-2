                     //Changing case
//1. Write a program that takes user input. Convert and show the input
//in capital letters.

document.write("<h1>Ans:1</h1>")
var text = prompt("Write any text")
var text2 = text.toUpperCase();
document.write(text2);
document.write("<br>");

//2. Write a program that takes user input. Convert and show the
//input in title case.

document.write("<h1>Ans:2</h1>")
var text3 = prompt("Write any text")
var text3_1st = text3.slice(0,1);
var text4_1st = text3_1st.toUpperCase();
var text3_extra = text3.slice(1);
var text4_extra = text3_extra.toLowerCase();
var text4 = text4_1st + text4_extra;
document.write(text4);
document.write("<br>");




                //Strings: measuring length and extracting parts
//1. Write a program to take a user input about his favorite mobile
//phone model. Find and display the length of user input in your
//browser.

 document.write("<h1>Ans:3</h1>")
var phone = prompt("Write the name of your favourite mobile phone");
var phoneLength = phone.length;
 document.write(phoneLength);
 document.write("<br>");

//2. Write a program to display the last character of a user input.

 document.write("<h1>Ans:4</h1>")
var text5 = prompt("Write any sentence or word");
var text6 = text5.length - 1;
 document.write(text6);
 document.write("<br>");

                    //Strings: finding segments

//1. Write a program to find the index of letter “n” in the word “Pakistani”
//and display the result in your browser.

document.write("<h1>Ans:5</h1>")
var text7 = "pakistani";
var text8 = text7.indexOf("n")
document.write(text8);
document.write("<br>");

// 2. Write a program to take user input and store username in a
// variable. If the username contains any special symbol among (@ . ,
// !), prompt the user to enter a valid username.

var username = prompt("Username");
var characters = [ "@" , "." , "," , "!"];
var flag = 1;
for(var i = 0; i < username.length ; i++ ){
  if(username[i]== "@" || username[i]== "." || username[i]== "," || username[i]== "!"  ){
    flag = 0;
  }  
}
if(flag == 0){
    alert("Enter a valid username");
}
document.write("<br>");


// 3. You have a string “The quick brown fox jumps over the lazy
// dog”. Write a program to count number of occurrences of word “the”
// in given string.


document.write("<h1>Ans:7</h1>")
var text9 = " the quick brown fox jumps over the lazy dog ";
var text10 = text9. match(/the/g) || []
document.write(text10);
document.write("<br>");
document.write("There is two times this word 'the' is repeated ");
document.write("<br>");


             //Strings: finding a character at a location


//1. Write a program to find the character at 3 rd index in the word
//“Pakistani” and display the result in your browser.

document.write("<h1>Ans:8</h1>")
var text11 = "pakistani";
var text12 = text11.charAt(2)
document.write(text12);
document.write("<br>");
document.write("In this string, 3rd index is " + text12);




             //Strings: replacing characters

//1. Write a program to replace the “Hyder” to “Islam” in the word
//“Hyderabad” and display the result in your browser.

document.write("<h1>Ans:9</h1>")
var text13 = "Hyderabad";
var text14 = text13.replace("Hyder","Islam");
document.write(text13);
document.write("<br>");
document.write(text14);
document.write("<br>");
document.write("In this string, the word 'Hyder' is replaced by 'Islam' ");




// 2. Write a program to replace all occurrences of “and” in the string
// with “&” and display the result in your browser.
// var message = “Ali and Sami are best friends. They play cricket and
// football together.”;

document.write("<h1>Ans:10</h1>")
var message = "Ali and Sami are best friends.They play cricket and football together."
var message2 = message.replace(/and/g,"&")
document.write(message);
document.write("<br>");
document.write(message2);
document.write("<br>");
document.write("In this string, the word 'and' is replaced by &");



                   //Rounding numbers
//   1. Write a program that takes a positive integer from user & display
// the following in your browser.
// a. number (example number: 3.45214)
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number


document.write("<h1>Ans:11</h1>")
var number = prompt("Write any positive number in decimals");
document.write("The number is " + number);
document.write("<br>");
document.write("Round off value of the number is " + Math.round(number));
document.write("<br>");
document.write("Floor value of the number is " + Math.floor(number));
document.write("<br>");
document.write("ceil value of the number is " + Math.ceil(number));


// 2. Write a program that takes a negative floating point number
// from user & display the following in your browser.
// a. Number (example number: -2.678 )
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number


document.write("<h1>Ans:12</h1>")
var number2 = prompt("Write any negative number in decimals");
document.write("The number is " + number2);
document.write("<br>");
document.write("Round off value of the number is " + Math.round(number2));
document.write("<br>");
document.write("Floor value of the number is " + Math.floor(number2));
document.write("<br>");
document.write("ceil value of the number is " + Math.ceil(number2));




              //Generating random numbers

//1. Write a program that simulates a dice using random() method of JS
//Math class. Display the value of dice in your browser.

document.write("<h1>Ans:13</h1>")
var dice = Math.random();
var dice2 =( dice * 6 ) + 1;
var dice3 = Math.floor(dice2);
document.write(dice3);

// 2. Write a program that simulates a coin toss using random() method
// of JS Math class. Display the value of coin in your browser.
// 2 = Heads and 1 = Tails

document.write("<h1>Ans:14</h1>")
var toss = Math.random();
var toss1 =( toss * 2 ) + 1;
var toss2 = Math.floor(toss1);

if(toss2==2){
    document.write("Head")
};
if(toss2==1){
    document.write("Tail")
};
 
// 3. Write a program that stores a random secret number from 1 to 10 in a
// variable. Ask the user to input a number between 1 and 10. If the user input
// equals the secret number, congratulate the user

document.write("<h1>Ans:15</h1>");

var secretNum = Math.random();
var secretNum2 =( secretNum * 10 ) + 1;
var secretNum3 = Math.floor(secretNum2);
var userSecretNum = prompt("Write a number between 1 and 10")
if(secretNum3== userSecretNum){
    alert("Congrations")
};
if(secretNum3!= userSecretNum){
    alert("Try Again")
}


                 //Converting strings to integers and decimals
// 1. Write a program that asks the user about his weight. Parse the user
// input and display his weight in your browser.
// Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms

document.write("<h1>Ans:16</h1>");

var weight = prompt("write your weight");
var weight2 = parseFloat(weight);
document.write("The parseFloat value of input is" + weight2);
document.write("<br>");
var weight3 = parseInt(weight);
document.write("The parseInt value of input is" + weight3);




// Converting strings to numbers, numbers to strings
// 1. Write a program that converts a string “472” to a number 472.
// Display the values & types in your browser.

document.write("<h1>Ans:17</h1>");
var num = "472"
document.write("This is " +typeof(num) +" " + num);
document.write("<br>")
var num2 = Number(num);
document.write("This is " +typeof(num2) +" " + num2);



// 2. Write a program that converts the variable num to string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.

document.write("<h1>Ans:18</h1>");
var num3 = 35.36;
document.write("This is " + typeof(num3) +" "  + num3);
document.write("<br>");
var num4 = num3.toString();
document.write("This is "  +typeof (num4)+" " + num4*100);


             //Controlling the length of decimals

//1. Write a program to control the length of decimals to 2.
//var percentage = 30 / 45 * 100; -> 66.66666666666666

document.write("<h1>Ans:19</h1>");
var num5 = 30/ 45 * 100;
document.write(num5);
document.write("<br>");
document.write(num5.toFixed(2));
