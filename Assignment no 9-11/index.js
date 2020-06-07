<!-- Task no1  -->
var city;
city = prompt("Enter the name of your city");
if (city === "karachi") {
  document.write("Welcome to city of lights ");
}



// !--Task no2 -->
var gender;
city = prompt("Enter gender");
if (city === "male") {
  alert("Good morning Sir ");
} else if (city === "female") {
  alert("Good morning Ma'am ");
}


// <
// !--Task no3-- >
var signal;
city = prompt("Enter signal color");
if (signal === "red") {
  alert("please stop ");
} else if (signal === "green") {
  alert("Read to move");
} else if (signal === "yellow") {
  alert("move move");
}


// <
// !--Task no4-- >
var fuel;
fuel = prompt("Enter remaining fuel");
if (fuel <= "0.25") {
  alert("please refill your fuel ");
}


// task no 5
var a = "4";
++a;
if (++a === "5") {
  alert("given condition for variable a is true");
}
var c = "12";
++c;
if (c++ === "13") {
  alert("condition 1 is true");
}
if (c === "13") {
  alert("condition 2 is true");
}
if (++c < "14") {
  alert("condition 3 is true");
}
if (c === "14") {
  alert("condition 4 is true");
}

var materialCost = "20000";
var laborCost = "2000";
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
  console.log("The cost equals to" + totalCost);
}
if (totalCost === laborCost + materialCost) {
  alert("True");
} else {
  alert("False");
}


if ("car" < "cat") {
  alert("car is smaller than cat");
}


// task no 6
document.write("<br> <br>"+ "student record" +"<br>");
var sub1 ,sub2 ,sub3 ,obt_marks ,total_marks ,percent ;
sub1 = Number(prompt("Enter the marks of subject 1 "));
sub2 = Number(prompt("Enter the marks of subject 2 "));
sub3 = Number(prompt("Enter the marks of subject 3 "));
obt_marks = sub1+sub2+sub3;
total_marks = "300";
percent = (obt_marks/total_marks)*100;
document.write("sub1 english :" +sub1 +"<br>");
document.write("sub2 urdu :" +sub2 +"<br>");
document.write("sub3 math :" +sub3 +"<br>");
document.write("obtained marks :" + obt_marks +"<br>");
document.write("percentage :" +percent +"<br>");
if(percent>=80){
  document.write("A+" + "<br>" +"Excellent work");
}
else if(percent>=70 && percent <=80){
  document.write("A" + "<br>" +"Good work");
}
else if(percent>=60 && percent <=70){
  document.write("B" + "<br>" +"Fail work");
}
else{
  document.write("fail");
}

//
// task no 7
document.write("<br> <br>"+ "GAME" +"<br>");
var myNum ="5";
var userNum ;
userNum = Number(prompt("Enter number"));
if(myNum === userNum){
  alert("Bingo");
}
else if(++myNum === userNum){
  alert("Close!");
}


//task no 8\
var d_num ;
d_num = Number(prompt("enter dnum"));
d_num % 3;
if(d_num = 0)
{
  alert("NUmber divisible by 3");
}

// task no 9
var check_num;
check_num = Number(prompt("enter num"));
if(check_num/2){
  alert("even number");
}
else{
  alert("odd no");
}

// task no 10
var check_temp;
check_temp = Number(prompt("Enter temperature"));
if(check_temp>40)
{
  alert("Very hot")
}
else if(check_temp>=30 && check_temp<40)
{
  alert("Noraml whether");
}
else if(check_temp>=20 && check_temp<30)
{
  alert("Cool whether");
}
else if(check_temp>=10 && check_temp<20)
{
  alert("To Cool outside");
}


// task no 11
var num1,num2,operator,result;
num1 = Number(prompt("Enter value"));
num2 = Number(prompt("Enter value"));
operator = prompt("Enter opeartor");

if(operator === "+")
{
  result = num1+num2;
  alert(result);
}
else if(operator === "-")
{
  result = num1-num2;
  alert(result);
}
else if(operator === "+")
{
  result = num1*num2;
  alert(result);
}
else if(operator === "/")
{
  result= num1/num2;
  alert(result);
}
else if(operator === "%")
{
  result = num1%num2;
  alert(result);
}
