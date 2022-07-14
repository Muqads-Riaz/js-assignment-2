//1. Write a program that displays current date and time in
//your browser.

document.write("<h1> Ans :1</h1>")
var a = new Date();
document.write(a);

//2. Write a program that alerts the current month in words.
//For example December.

document.write("<h1> Ans :2</h1>")
var monthsName = ["January","February","March","April","May","June","July","August","September","October","November","December"];
var b = a.getMonth();
var month = monthsName[b]
document.write( "Current month : "+month);

// 3. Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show
// Sun.

document.write("<h1> Ans :3</h1>")
var daysName = ["Sun","Mon","Tue","Wed","Thurs","Fri","Sat"];
var c = a.getDay();
var day = daysName[c]
document.write( "Today is "+day);

//4. Write a program that displays a message “It’s Fun day” if
//its Saturday or Sunday today.

document.write("<h1> Ans :4</h1>")
var daysName = ["Sun","Mon","Tue","Wed","Thurs","Fri","Sat"];
var c = a.getDay();
var day = daysName[c];
if(day == "sun" || day == "sat"){
    document.write("It's Fun day.")
}else{
    document.write("It's working day.")
}


// 5. Write a program that shows the message “First fifteen
// days of the month” if the date is less than 16th of the month
// else shows “Last days of the month”.

document.write("<h1> Ans :5</h1>")
var d = a.getDate();
var flag = 0
for(var i = 1; i<= 15 ; i++){
    if(d==i){
        document.write("First fifteen days of the month")
    }
flag = 1;
}
if(flag == 0){
    document.write("Last days of the month")
}

// 6. Write a program that determines the minutes since
// midnight, Jan. 1, 1970 and assigns it to a variable that
// hasn't been declared beforehand. Use any variable you like
// to represent the Date object.

document.write("<h1> Ans :6</h1>")
document.write("Current Date : " + a);
document.write("<br>")
var e = a.getTime();
document.write( "Elapsed milliseconds since january 1, 1970 : " +e);
document.write("<br>")
var f = e / 1000 / 60 ;
document.write( "Elapsed minutes since january 1, 1970 : " +f);

// 7. Write a program that tests whether it's before noon and
// alert “Its AM” else “its PM”.

document.write("<h1> Ans :7</h1>")
var g = a.getHours();
  if(g <= 11 && g >= 0){
    alert("Its AM")
    document.write("Its AM")}
    else{
    alert("Its PM");
    document.write("Its PM")
}

// 8. Write a program that creates a Date object for the last day
// of the last month of 2020 and assigns it to variable named
// laterDate.

document.write("<h1> Ans :8</h1>")
var laterDate = new Date("dec 31, 2020");
document.write( "Later Date : " +laterDate);

// 9. Create a date object of the starting date of this Ramadan
// and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015

document.write("<h1> Ans :9</h1>")
var ramadan = new Date("june 18, 2015");
var ramadanDay = ramadan.getTime();
var date_1st = new Date();
var a_date = date_1st.getTime();
var pastDays = (a_date-ramadanDay) / 1000 / 60 / 60 / 24 ;
document.write(Math.floor(pastDays) + " days have passed since 1st Ramadan,2015");


// 10. Write a program that displays in your browser the
// seconds that elapsed between the reference date and the
// beginning of 2015.

document.write("<h1> Ans :10</h1>")
var reference = new Date();
var refDate = reference.getTime();
var date_1st = new Date("jan 1, 2015");
var a_date = date_1st.getTime();
var pastDays = (refDate-a_date) / 1000 ;
document.write( "On reference date "+ reference +" " +Math.floor(pastDays) + " seconds had passed since beginning of 2015")

// 11. Create a Date object for the current date and time.
// Extract the hours, reset the date object an hour ahead and
// finally display the date object in your browser.

document.write("<h1> Ans :11</h1>")
var h = new Date();
document.write( " Current Date : " +h);
var h2 = h.getHours() - 1;
var h3 = h2.toString();
h.setHours(h3);
document.write("<br>")
document.write("1 hour ago, it was " + h);
// 12. Write a program that creates a date object and show the
// date in an alert box that is reset to 100 years back?

document.write("<h1> Ans :12</h1>")
var y = new Date();
document.write( " Current Date : " +y);
var y2 = y.getFullYear()-100;
var y3 = y2.toString();
y.setFullYear(y3);
document.write("<br>")
document.write("100 years ago, it was " + y);



// 13. Write a program to ask the user about his age. Calculate
// and show his birth year in your browser
document.write("<h1> Ans :13</h1>")
var age = prompt("Write your age");
age = +age;
var i = new Date();
document.write( "Your age is " +age);
var i2 = i.getFullYear()- age;
document.write("<br>")
document.write("Your birth year is " + i2);

// 14. Write a program to generate your K-Electric bill in your
// browser. All the amounts should be rounded off to 2
// decimal places. Display the following fields:
// a. Customer Name
// b. Current Month
// DATE METHODS | JAVASCRIPT
// Page 5 of 5
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)
document.write("<h1> Ans :14</h1>")
var name1 = prompt("Write your name");
document.write("Customer Name : " + name1)
document.write("<br>");
document.write( "Month : "+month);
document.write("<br>");
var units = 410;
document.write( "Number of units : "+units);
document.write("<br>");
var charges = 16;
document.write( "Charges per unit : "+charges);
document.write("<br>");
document.write("Net Amount Payable(Within Due Date): " + units * charges);
document.write("<br>");
var lateCharges = 350;
lateCharges = +lateCharges;
document.write("Late payment surcharges : " + lateCharges);
document.write("<br>");
document.write("Gross Amount Payable(After Due Date): " +( (units * charges) + lateCharges));
