

document.write( "<h1>Assignment 1: Chapter 1 to 10</h1><hr>");
// Chapter# 1 Alerts!
document.write("<h2>Chapter 1 Alerts!</h2><br>")

/* 1. Write a script to greet your website visitor using JS alert
box.*/

alert("Welcome")

/* 2. Write a script to display following message on your web
Page*/

alert("Error! Please enter a valid password.")

/* 3. Write a script to display following message on your web
page: (Hint : Use line break)*/

alert("Welcome to JS Land...\n Happy Coding!")

/* 4. Write a script to display following messages in sequence:*/

alert("Welcome to JS Land..")


alert("Happy Coding! \n Prevent this page from creating additional dialogs.")


/*5. Generate the following message through browser's
developer console:*/

alert("Hello! I can run JS through my web browser's console")


// The End


// Chapter# 2 Variables For Strings
document.write("<h2> Chapter 2 Variables For Strings</h2><br>")


// 1. Declare a variable called username.

let username;


// 2. Declare a variable called myName & assign to it a string that represents your Full Name.

let myName = " Sana Abid"

/*3. Write script to 
a) Declare a JS variable, titled message.*/

let message;


// b) Assign "Hello World" to variable message

message = "Hello World"

// c) Display the message in alert box.

alert(message)


// 4. Write a script to save student's bio data in JS variables and show the data in alert boxes.

// Student's Bio Data

let studentName = "Ahmed Ali"
alert(studentName)

let studentAge = "15 years old"

alert(studentAge)

let studentCourse = "Certified Mobile Application Development"
alert(studentCourse)

// 5. Write a script to display the following alert using one JS variable:

let jsVariable = "PIZZA\nPIZZ\nPIZ\nPI\nP"
alert(jsVariable)

/* 6. Declare a variable called email and assign to it a string that 
represents your Email Address(e.g. example@example.com)
Show the blow mentioned message in an alert box.(Hint: use
string concatenation)*/

let email = "abidsanaonly@gmail.com"
alert("Email Address: " + email)


/*7. Declare a variable called book & give it the value
smarter way to learn JavaScript". Display the following
message in an alert box:*/


let book = "Smarter Way to Learn JavaScript"
alert("I am trying to learn from the Book " + book)


// 8. Write a script to display this in browser through JS

document.write('<h2>Yah! I can write HTML content through JavaScript</h2><br>')

// 9. Store following string in a variable and show in alert and browser through JS



let string = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬"
alert(string)
document.write(string+"<br>")


// The End

// Chapter #3: Variable for Numbers

document.write("<h2>Chapter #3: Variable for Numbers</h2><br>")

// 1. Declare a variable called age & assign to it your age. Show your age in an alert box.

let age;
age= 15

alert("I am " + age +"years old.")

/* 2. Declare & initialize a variable to keep track of how many
times a visitor has visited a web page. Show his/her
number of visits on your web page. For example: "You
have visited this site N times".  */

let visitsNo=4

alert("You have visited this site " + visitsNo + "times.")

/* 3. Declare a variable called birthyear & assign to it your
birth year. Show the following message in your browser:*/

let birthyear;
birthyear=1990

document.write(  "My birth year is" + 1990 +  "<br> Data type of my declared variable is number.")


/*  4. A visitor visits an online clothing store
www.xyzClothing.com . Write a script to store in variables
the following information:
a. Visitor's name
b. Product title
c. Quantity i.e. how many products a visitor wants to
order Show the following message in your browser: "John
Doe ordered 5 T-shirt(s) on XYZ Clothing store".*/


var visitorName = "John Doe"
var productTitle = "T-shirt" 
var quantity = 5

document.write("<br>" + visitorName + " ordered " + quantity + " " + productTitle + "(s) on XYZ Clothing store." );

// Chapter4:VARIABLE NAMES: LEGAL & ILLEGAL
document.write("<h2>Chapter# 4: VARIABLE NAMES: LEGAL & ILLEGAL</h2><br>")

// Declare 3 variables in one statement. 

document.write("<br><h3>Declaration and Initilization of 3 variables in one statement:</h3>")
let firstName="Syed", midName="Ali", lastName="Bukhari";
console.log("The full name of user is "+firstName+" " +midName+" "+ lastName+" .");
document.write("<br>The full name of user is "+firstName+" " +midName+" "+ lastName+" .");

//  2. Declare 5 legal & 5 illegal variable names.
document.write("<br> <h3>Declare and Initialize 5 legal & 5 illegal variable names </h3>")

let legalOne="1"
console.log(legalOne)
let $legal="2"
console.log($legal)
let legal_3="3"
console.log(legal_3)
let legal$= "4"
console.log(legal$)
let legal_name="5"
console.log(legal_name)
/*let 1illegal="1"
console.log(1illegal)
let @illegal="2"
console.log(@illegal)
let ILLEGAL="3"
console.log(ILLEGAL)
let illegal&= "4"
console.log(illegal&)
let i llegal= "5"
console.log(i llegal)*/

document.write("<br> let legalOne=1,<br>let $legal=2,<br>let legal_3=3, <br>let legal$= 4,<br>let legal_name=5, <br> let 1illegal=1, <br> let @illegal=2, <br> let ILLEGAL=3, <br> let illegal&= 4, <br> let i llegal= 5");


//  3. Display this in your browser
//  a) A heading stating "Rules for naming JS variables" 
document.write("<br><h1>Rules for naming JS Variables</h1>")
// b) Variable names can only contain_______,________,_______ and_______ .
// For example $my_1stVariable 
document.write("<br>Variable names can only contain letters, numbers, $ and _ . For example : Smy_IstVariabIe")

// c) Variables must begin with a_______,__________,or________
//  For example $name, name or name
document.write("<br> Variable must begin with a letter, $ or _ . For example : $name, _name or name")
//  d) Variable names are case ________

document.write("<br> Variable names are case sensitive")
// e) Variable names should not be JS _________

document.write("<br> Variable names should not be JS keywords")


// Chapter5:MATH EXPRESSIONS
document.write("<h2> Chapter# 5: MATH EXPRESSIONS</h2><br>")

// 1. Write a program that take two numbers & add them in a new variable. Show the result in your browser.
document.write("<br><h3>Addition of two numbers</h3>")

let num1= 5
let num2= 3
let add= num1 + num2
console.log(add)

document.write("<br>Sum of"+num1 +"and"+num2 +"is"+ add+ " .");




/* 2. Repeat taskl for subtraction, multiplication, division &
modulus.*/

document.write("<br><h3>Subtration of two numbers</h3>")

let num3= 5
let num4= 3
let sub= num3 - num4
console.log(sub)

document.write("<br>Subtraction of"+num3 +"and"+num4 +"is"+ sub+ " .");

document.write("<br><h3>Multiplication of two numbers</h3>")

let num5= 5
let num6= 3
let multiply = num5 * num6
console.log(multiply)

document.write("<br> Multiplication of"+num5 +"and"+num6 +"is"+ multiply+ " .");

document.write("<br><h3>Modulus of two numbers</h3>")

let num7= 15
let num8= 4
let modulus= num7 % num8
console.log(modulus)

document.write("<br> Modulus of"+num5 +"and"+num6 +"is"+ modulus+ " .");


/*3. Do the following using JS Mathematic Expressions
a. Declare a variable.*/

let value;
document.write("<br>let value; ")
/*b. Show the value of variable in your browser like "Value
after variable declaration is: ??".*/

document.write("<br>Value after variable declaration is undefined. ")

/*c. Initialize the variable with some number.*/
value=5;
console.log(value)
document.write("<br> Initial value: 5")


/*d. Show the value of variable in your browser like "Initial
value: 5"•*/

document.write("<br> Initial value: 5")
/*e. Increment the variable.*/
value++
console.log(value)

/*f. Show the value of variable in your browser like "Value
after increment is: 6".*/
document.write("<br>Value after increment is: 6")

/*g. Add 7 to the variable.*/

value= value + 7;
console.log(value)
/*h. Show the value of variable in your browser like "Value
after addition is: 13".*/

document.write("<br>Value after addition is: 13")

/*i. Decrement the variable.*/
 --value
 console.log(value)
/*j. Show the value of variable in your browser like "Value
after decrement is: 12".*/

document.write("<br>Value after decrement is: 12")
/*k. Show the remainder after dividing the variable's value
by 3•*/

value=value % 3 
console.log(value)
document.write("<br>The remainder is: 0")
/*l. Output : "The remainder is : o".*/
document.write("<br>The remainder is: 0")



/*4. Cost of one movie ticket is 600 P KR. Write a script to
store ticket price in a variable & calculate the cost of buying 5
tickets to a movie. Example output:*/

let ticketPrice= 600;
let ticketsBuy= 5
let totalBill= ticketPrice * ticketsBuy
console.log(totalBill);


document.write("<br>Total cost to buy "+ ticketsBuy+" tickets to a movie is "+totalBill +" PKR.")

/*5. Write a script to display multiplication table of any
number in your browser. E.g Table of 4*/

document.write("<br><h3>Table of 2 </h3>")
document.write("<br>2x1=2")
document.write("<br>2x2=4")
document.write("<br>2x3=6")
document.write("<br>2x4=8")
document.write("<br>2x5=10")
document.write("<br>2x6=12")
document.write("<br>2x7=14")
document.write("<br>2x8=16")
document.write("<br>2x9=18")
document.write("<br>2x10=20")
document.write("<br>The End")

/*6. The Temperature Converter: It's hot out! Let's make a
converter based on the steps here.
a. Store a Celsius temperature into a variable.*/

document.write("<br><h3> The Temperature Converter </h3>")

let celsiusTemp= 27
document.write("<br> °C=27")
/*b. Convert it to Fahrenheit & output "NNoC is NNoF".*/

let fahrenheitTemp= (celsiusTemp *9/5) +32
console.log(fahrenheitTemp)
document.write("<br> 27°C is "+fahrenheitTemp+ "°F.")

/*c. Now store a Fahrenheit temperature into a variable.*/

let fahrenheitTem= 70
document.write("<br> °F=70")

/*d. Convert it to Celsius & output "NN0F is NN0C".
*/
let celsiusTem= (fahrenheitTem - 32) *5/9

console.log(celsiusTem)

document.write("<br> 70°F is "+celsiusTem+ "°C.")


/*7. Write a program to implement checkout process of a
shopping cart system for an e-commerce website. Store
the following in variables
a. Price of item 1
b. Price of item 2
c. Ordered quantity of item 1
d. Ordered Quantity of item 2
e. Shipping charges
Compute the total cost & show the receipt in your browser.*/
document.write("<br><h3> Shopping Cart  </h3>")

let priceOfItem1= 650
console.log(priceOfItem1)

let priceOfItem2= 100
console.log(priceOfItem2)

let orderOfItem1=3
console.log(orderOfItem1)

let orderOfItem2=7
console.log(orderOfItem2)

let shippingCharges=100
console.log(shippingCharges)

let totalCost=(priceOfItem1 * orderOfItem1)+(priceOfItem2*orderOfItem2)+(shippingCharges)
console.log(totalCost)

document.write("<br>Price of item 1 is "+priceOfItem1 +"." )
document.write("<br> Quantity of item I is"+orderOfItem1 +"." )
document.write("<br> Price of item 2 is"+ priceOfItem2+"." )
document.write("<br> Quantity of item 2 is"+ orderOfItem2+"." )
document.write("<br>Shipping Charges "+shippingCharges +"." )
document.write("<br> Total cost of your order is " + totalCost+"." )




/*8. Store total marks & marks obtained by a student in 2
variables. Compute the percentage & show the result in
your browser
*/

document.write("<br> Marks Sheet ")

let totalMarks=980
console.log(totalMarks)
document.write("<br> Total marks: " +totalMarks+"")

let obtainedMarks=804
console.log(obtainedMarks)
document.write("<br> Marks obtained: " + obtainedMarks+"")


let percentage= (obtainedMarks/totalMarks*100)
console.log(percentage)
document.write("<br> Percentage: "+percentage+"")


/*9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a
script to convert the total currency to Pakistani Rupees.
Perform all calculations in a single expression.
(Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
and 1 Saudi Riyal = 28 Pakistani Rupee)
Browser:Currency in PKR
Total Currency in PKR: 1748*/


document.write("<br> <h3>Currency Conversion in PKR</h3>")

let dollarsUS=10, riyalsSaudi=25;
console.log(dollarsUS, riyalsSaudi)
let perDollarToPKR=  104.80  , perRiyalToPKR=28;
console.log("1 US Dollar = "+perDollarToPKR+  "and 1 Saudi Riyal ="+perRiyalToPKR)
document.write("<br> US dollars: "+dollarsUS+" ; and Saudi Riyals: "+riyalsSaudi+"")
document.write("<br>1 US Dollar = "+perDollarToPKR+" Pakistani Rupee and 1 Saudi Riyal ="+perRiyalToPKR+" Pakistani Rupee" )

let convertToPKR=((dollarsUS*perDollarToPKR)+(riyalsSaudi*perRiyalToPKR));
console.log(convertToPKR)
document.write("<br> Total Currency in PKR: "+convertToPKR+".")

/*10. Write a program to initialize a variable with some
number and do arithmetic in following sequence:
a. Add 5
b. Multiply by 10
c. Divide the result by 2
Perform all calculations in a single expression*/

document.write("<br> <h3>Arithematic Program </h3>")


let number=10
console.log(number);


number=((number + 5) *10 /2)
console.log(number)
document.write("<br> Add 5, Multiply by 10 and divide the result by 2: " +number+"")

/*11. The Age Calculator: Forgot how old someone is?
Calculate it!
a. Store the current year in a variable.
b. Store their birth year in a variable.
c. Calculate their 2 possible ages based on the stored
values.
Output them to the screen like so: "They are either NN or NN
ears old".
*/
document.write("<br> <h3>Age Calculator </h3>")

let currentYear= 2025
console.log(currentYear)
document.write("<br>Current Year: "+currentYear+"")

let birthYear= 2016
console.log(birthYear)
document.write("<br> Birth Year: "+birthYear+"")

let yourAge=(currentYear-birthYear)
console.log(yourAge)
document.write("<br> Your Age is: "+yourAge+" years old.")


/*12. The Geometrizer: Calculate properties of a circle.
a. Store a radius into a variable.
b. Calculate the circumference based on the radius, and
output "The circumference is NN".
(Hint : Circumference ofa circle 2 7t r , 7t 3.142)
Calculate the area based on the radius, and output "The
area is NN". (Hint : Area ofa circle r2, 3.142)
*/

document.write("<br> <h3> The Geometrizer </h3>")

let radius= 20
console.log(radius)
document.write("<br> Radius of a circle: "+radius+"")


let circumference= (2*3.142*radius)
console.log(circumference)
document.write("<br>The circumference is: "+circumference+"")


let area= (3.142*(radius*radius))
console.log(area)
document.write("<br>The circumference is: "+area+"")


/*13. The Lifetime Supply Calculator: Ever wonder how
much a "lifetime supply" of your favorite snack is?
Wonder no more.
a. Store your favorite snack into a variable
b. Store your current age into a variable.
c. Store a maximum age into a variable.
d. Store an estimated amount per day (as a number).
 e. Calculate how many would you eat total for the rest of your life. Output the result to the screen like so: "You will need NNNN to last you until the ripe old age of NN".
Browser:The Lifetime Supply Calculator
Favourite Snack: chocolate chip
Current age: 15
Estimated Maximum Age: 65
Amount of snacks per day: 3
You will need 150 chocolate chip to last you until the ripe old age of 65*/

document.write("<br> <h3> The Lifetime Supply Calculator </h3>")

let favSnack="chocolate chip"
console.log(favSnack)
document.write("<br>Favourite Snack:"+favSnack+"")

let ageNow=15
console.log(ageNow)
document.write("<br>Current age: "+ageNow+"")

let estimatedAge=65
console.log(estimatedAge)
document.write("<br>Estimated Maximum Age:"+estimatedAge+"")

let estimatePerDay=3
console.log(estimatePerDay)
document.write("<br>Amount of snacks per day: "+estimatePerDay+"")

let totalAmount=((estimatedAge-ageNow) *3)
console.log(totalAmount)
document.write("<br>You will need "+ totalAmount+ " chocolate chip to last you until the ripe old age of "+ estimatedAge+"")



// Chapter6-9:MATH EXPRESSIONS
document.write("<h2> Chapter# 6-9: MATH EXPRESSIONS</h2><br>")

/* 1. Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser:
*/

document.write("<h3> Result of Increment and Decrement</h3><hr>")

let a=10
console.log(a)
document.write("<br>The value of a is:"+a+"")
document.write("<br>Now the value of a is:"+a+"")

++a
console.log(a)
document.write("<br>The value ++a is:"+a+"")
document.write("<br>Now the value of a is:"+a+"")


a++
console.log(a)
document.write("<br>The value a++ is:" +a+"")
document.write("<br>Now the value of a is:"+a+"")

--a
console.log(a)
document.write("<br>The value --a is:" +a+"")
document.write("<br>Now the value of a is:"+a+"")

a--
console.log(a)
document.write("<br>The value a-- is:" +a+"")
document.write("<br>Now the value of a is:"+a+"")


/*2. What will be the output in variables a, b & result after
execution of the following script:
var a =2, b= l;
var result =
Explain the output at each stage:
--a;
--a - --b;
--a - --b + ++b;
--a - --b + ++b + b--;
Browser:a is ??
bis
result is ??*/

/*3. Write a program that takes input a name from user & greet the user. 4. 
5. Write a program to take input a number from user & display it's multiplication table on your browser. If user does not enter a new number, multiplication table of 5 should be displayed by default. 
6. Take a) Take three subjects name from user and store them in 3 different variables. b) Total marks for each subject is 100, store it in another variable. c) Take obtained marks for first subject from user and stored it in different variable.
d) Take obtained marks for remaining 2 subjects from user
and store them in variables.
e) Now calculate total marks and percentage and show the
result in browser like this.(Hint: user table)
 */

// Chapter9-11:USER INPUT & CONDITIONAL STATEMENT
document.write("<h2> Chapter# 9-11 USER INPUT & CONDITIONAL STATEMENT</h2><br>")

/* 1. Write a program to take "city" name as input from user. If user enters "Karachi", welcome the user like this: "Welcome to city of lights"
 2. Write a program to take "gender" as input from user. If the user is male, give the message: Good Morning Sir. If the user is female, give the message: Good Morning Ma'am.
  3. Write a program to take input color of road traffic signal from the user & show the message according to this table:
Signal color	Messa e
Red	Must Stop
Yellow	Ready to move
Green	Move now
4. Write a program to take input remaining fuel in car (in litres) from user. If the current fuel is less than 0.251itres, show the message "Please refill the fuel in your car"
 5. Run this script, & check whether alert message would be displayed or not. Record the outputs. a. var a = 4; if ( — 5) { alert("given condition for variable a is true"); 
 b. var b 82;
if (b++
alert("given condition for variable b is true");
c. varc= 12;
alert("condition 1 is true");
if (c —
13) {
alert("condition 2 is true");
if (++c < 14) {
alert("condition 3 is time");
if(c
alert("condition 4 is true");
d. var materialCost 20000;
var laborCost 2000;
var totalCost materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
alert("The cost equals");
e. if (true) {
alert("True");
if (false) {
alert("False");
}
*/

