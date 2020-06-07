var ch;
ch = prompt("Enter num");
if (ch >= "65" && ch <= "90") {
  alert("Character is a capital letter");
} else if (ch >= "97" && ch <= "122") {
  alert("Character is a small letter");
} else if (ch >= "48" && ch <= "57") {
  alert("Character is a digit");
}


// task no2
var num1, num2;
num1 = Number(prompt("Enter num for integer"));
num2 = Number(prompt("Enter num2 for integer"));
if (num1 > num2) {
  alert("Number 1 is larger");
} else if (num1 < num2) {
  alert("Number 2 is larger");
} else if (num1 = num2) {
  alert("Numbers are equals");
}


// task no3
var num_1;
num_1 = Number(prompt("Enter num for integer"));

if (num_1 > 0) {
  alert("Number is positive");
} else if (num1 < 0) {
  alert("Number is negative");
} else if (num1 = 0) {
  alert("Numbers is zero");
}
//
// task no 4
var value;
value = prompt("enter a character");
if (value === "a" || value === "e" || value === "i" || value === "0" || value === "u") {
  alert("Character is vowel");
} else {
  alert("false");
}


// task n05
var password = "12345";
var check_pass = prompt("Enter your password");
if (password === check_pass) {
  alert(
    "YOu enter a right password"
  );
} else {
  alert("Sorry the password is wrong!");
}

// task no 6
var greeting;
var hour = "13";

if (hour < 18)
{
  greeting = "Good day";
  alert(greeting);
}

else
{   greeting = "Good evening";
    alert(greeting);}


// task no 7
var time;
time = Number(prompt("Enter time in 24 hours formate"));
if(time >= 0000 && time < 1200)
{
  alert("Good Morning!");
}
if(time >= 1200 && time < 1700)
{
  alert("Good afternoon!");
}
if(time >= 1700 && time < 2100)
{
  alert("Good Evening!");
}
if(time >= 2100 && time < 2359)
{
  alert("Good  Night!");
}
