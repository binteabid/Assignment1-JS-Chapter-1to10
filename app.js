

document.write( "<h1>Assignment 1: Chapter 1 to 10</h1><hr>");
// Chapter 1 Alerts!
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


// Chapter 2 Variables For Strings
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
document.write("<h2>VARIABLE NAMES: LEGAL & ILLEGAL</h2><br>")

// Declare 3 variables in one statement. 
//  2. Declare 5 legal & 5 illegal variable names.
//  3. Display this in your browser
//  a) A heading stating "Rules for naming JS variables" 
// b) Variable names can only contain_______,________,_______ and_______ .
// For example $my_1stVariable 
// c) Variables must begin with a_______,__________,or________
//  For example $name, name or name
//  d) Variable names are case ________
// e) Variable names should not be JS _________
/*Browser:Rules for naming JS variables
Variable names can only contain , numbers, S and . For example : Smy_IstVariabIe
Variable must begin with a letter, S or _ . For example : Sname, _name or name
Variable names are case sensitive
Variable names should not be JS keywords */

// Chapter5:MATH EXPRESSIONS
document.write("<h2>MATH EXPRESSIONS</h2><br>")

// 1. Write a program that take two numbers & add them in a new variable. Show the result in your browser.
// Browser:Sum of 3 and 5 is 8

/* 2. Repeat taskl for subtraction, multiplication, division &
modulus.
3. Do the following using JS Mathematic Expressions
a. Declare a variable.
b. Show the value of variable in your browser like "Value
after variable declaration is: ??".
c. Initialize the variable with some number.
d. Show the value of variable in your browser like "Initial
value: 5"•
e. Increment the variable.
f. Show the value of variable in your browser like "Value
after increment is: 6".
g. Add 7 to the variable.
h. Show the value of variable in your browser like "Value
after addition is: 13".
i. Decrement the variable.
j. Show the value of variable in your browser like "Value
after decrement is: 12".
k. Show the remainder after dividing the variable's value
by 3•
l. Output : "The remainder is : o".

Browser:Value after variable declaration is undefined
Initial value: 5
Value after increment is: 6
Value after addition is: 13
Value after decrement is: 12
The remainder is: 0
4. Cost of one movie ticket is 600 P KR. Write a script to
store ticket price in a variable & calculate the cost of buying 5
tickets to a movie. Example output:
Browser:Total cost to buy 5 tickets to a movie is 3000PKR
5. Write a script to display multiplication table of any
number in your browser. E.g Table of 4
6. The Temperature Converter: It's hot out! Let's make a
converter based on the steps here.
a. Store a Celsius temperature into a variable.
b. Convert it to Fahrenheit & output "NNoC is NNoF".
c. Now store a Fahrenheit temperature into a variable.
d. Convert it to Celsius & output "NN0F is NN0C".
Conversion Formulae:
X9/5)+32
Browser:250C is 770F
7. Write a program to implement checkout process of a
shopping cart system for an e-commerce website. Store
the following in variables
a. Price of item 1
b. Price of item 2
c. Ordered quantity of item 1
d. Ordered Quantity of item 2
e. Shipping charges
Compute the total cost & show the receipt in your browser.
Browser: Shopping Cart
Price of item 1 is 650
Quantity of item I is 3
Price of item 2 is 100
Quantity of item 2 is 7
Shipping Charges 100
Total cost of your order is 2750
8. Store total marks & marks obtained by a student in 2
variables. Compute the percentage & show the result in
your browser
Browser: Marks Sheet
Total marks: 980
Marks obtained: 804
Percentage: 82.0408163265306%
9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a
script to convert the total currency to Pakistani Rupees.
Perform all calculations in a single expression.
(Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
and 1 Saudi Riyal = 28 Pakistani Rupee)
Browser:Currency in PKR
Total Currency in PKR: 1748
10. Write a program to initialize a variable with some
number and do arithmetic in following sequence:
a. Add 5
b. Multiply by 10
c. Divide the result by 2
Perform all calculations in a single expression
11. The Age Calculator: Forgot how old someone is?
Calculate it!
a. Store the current year in a variable.
b. Store their birth year in a variable.
c. Calculate their 2 possible ages based on the stored
values.
Output them to the screen like so: "They are either NN or NN
ears old".
Browser:Age Calculator
Current Year: 2016
Birth Year: 1992
Your Age is: 24
12. The Geometrizer: Calculate properties of a circle.
a. Store a radius into a variable.
b. Calculate the circumference based on the radius, and
output "The circumference is NN".
(Hint : Circumference ofa circle 2 7t r , 7t 3.142)
Calculate the area based on the radius, and output "The
area is NN". (Hint : Area ofa circle r2, 3.142)
Browser:The Geometrizer
Radius of a circle: 20
The circumference is: 125.67999999999999
The area is: 1256.8
13. The Lifetime Supply Calculator: Ever wonder how
much a "lifetime supply" of your favorite snack is?
Wonder no more.
a. Store your favorite snack into a variable
b. Store your current age into a variable.
c. Store a maximum age into a variable.
d. Store an estimated amount per day (as a number). e. Calculate how many would you eat total for the rest of your life. Output the result to the screen like so: "You will need NNNN to last you until the ripe old age of NN".
Browser:The Lifetime Supply Calculator
Favourite Snack: chocolate chip
Current age: 15
Estimated Maximum Age: 65
Amount of snacks per day: 3
You will need 150 chocolate chip to last you until the ripe old age of 65*/

// Chapter6-9:MATH EXPRESSIONS
document.write("<h2>MATH EXPRESSIONS</h2><br>")

/* 1. Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser:
Result:
The value of a is: IO
The value of++a is: II
Now the value of a is: 11
The value of a++ is: II
Now the value of a is: 12
The value of --a is: I I
Now the value of a is: II
The value of a-- is: II
Now the value ofa is: IO
2. What will be the output in variables a, b & result after
execution of the following script:
var a —2, b l;
var result —
Explain the output at each stage:
--a;
--a - --b;
--a - --b + ++b;
--a - --b + ++b + b--;
Browser:a is ??
bis
result is ??
3. Write a program that takes input a name from user & greet the user. 4. 5. Write a program to take input a number from user & display it's multiplication table on your browser. If user does not enter a new number, multiplication table of 5 should be displayed by default. 6. Take a) Take three subjects name from user and store them in 3 different variables. b) Total marks for each subject is 100, store it in another variable. c) Take obtained marks for first subject from user and stored it in different variable.
d) Take obtained marks for remaining 2 subjects from user
and store them in variables.
e) Now calculate total marks and percentage and show the
result in browser like this.(Hint: user table)
 */

// Chapter9-11:USER INPUT & CONDITIONAL STATEMENT
document.write("<h2>USER INPUT & CONDITIONAL STATEMENT</h2><br>")

/* 1. Write a program to take "city" name as input from user. If user enters "Karachi", welcome the user like this: "Welcome to city of lights" 2. Write a program to take "gender" as input from user. If the user is male, give the message: Good Morning Sir. If the user is female, give the message: Good Morning Ma'am. 3. Write a program to take input color of road traffic signal from the user & show the message according to this table:
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

// Chapter8:
document.write("<h2></h2><br>")

// Chapter9:
document.write("<h2></h2><br>")

// Chapter10:
document.write("<h2></h2><br>")

// Chapter11:
document.write("<h2></h2><br>")