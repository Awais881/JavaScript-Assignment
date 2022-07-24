//Question 1
function QOne(){

    let city="";
    let userInput=prompt("Guess City Name ")
    if(userInput==="Karachi" || userInput==="karachi"){
        city= "Welocme to city of Lights"
    } else{
        city=" Please Try Again"
    }
  document.querySelector("#city").innerHTML=city
}
// Question 2
function QTwo(){
    let gender="";
    let userInput=prompt("Enter Your Gender")
    if(userInput=="Male" ||userInput=="male"){
        gender= "Good Morning Sir"
    }
    else if(userInput=="Female" ||userInput=="female"){
        gender= "Good Morning Mam"
    } else{ gender="Please enter valid gender"}
    document.querySelector("#gender").innerHTML=gender
}

//Question 3
function QThree(){
    let traffic="";
    let userInput=prompt("Enter any color of Traffic Signal")
    if(userInput=="red"|| userInput=="Red"){
        traffic= "Must Stop"
    } else if(userInput=="green"|| userInput=="Green"){
        traffic= "Move Now"
    }
    else if(userInput=="yelllo"|| userInput=="Yellow"){
        traffic= "Ready to Move"
    } else{traffic= "Please Enter Valid  Traffic color"}
    document.querySelector("#traffic").innerHTML=traffic
}

//Question 4
function QFour(){
    let fuel="";
    let userInput=prompt("Please Enetr your current fuel in Litres")
    if(userInput <=0.25){
        fuel="Please refill the fuel in your car"
    } else if(userInput >0.25){
        fuel="You have enough fuel "
    } else {
        fuel="Please enetr numbers in litres"
    }
    document.querySelector("#fuel").innerHTML=fuel
}
//Question 5
function QFive(){
    // a
   var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}
  // b
  var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
    // c
    var c = 12;
    if (c++ === 13){
    alert("condition 1 is true");
    }
    if (c === 13){
    alert("condition 2 is true");
    }
    if (++c < 14){
    alert("condition 3 is true");
    }
    if(c === 14){
    alert("condition 4 is true");
    }
   // d
   var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
  // e
  if (false){
    alert("False");
     }
  if (true){
    alert("True");
    }
    
    // f
    if("car" < "cat"){
        alert("car is smaller than cat");
        } 
}

// Question 6
function QSix(){
    document.write("<h1>Marks Sheet</h1>");
  
  
    let grade="A1"
    let grade1="A"
    let grade2="B" 
     let grade3="C"
     let gFail="Fail"

    let sub1= Number(prompt ("Enter Subject 1 Marks"))
    let sub2=Number( prompt ("Enter Subject 2 Marks"))
    let sub3=Number(prompt("Enter Subject 3 Marks"))
    let total1Marks=100;
    let total2Marks=100;
    let total3Marks=100
    let totalMarks=( total1Marks + total2Marks +total3Marks)
    let sub1per=sub1/total1Marks*100;
    let sub2per=sub2/total2Marks*100;
    let sub3per=sub3/total3Marks*100;
    let obtainedMarks= sub1 + sub2 + sub3;
    let tPercent=sub1per + sub2per  +sub3per;
     tPercent=(obtainedMarks/totalMarks)*100; tPercent = tPercent.toFixed(2); tPercent = parseFloat(tPercent);

    document.write(`TotalMarks :${totalMarks} <br> Obtained Marks : ${obtainedMarks} <br> Percentage :${tPercent} <br> `)     
    if(tPercent<50){
   
     document.write(`Grade : ${gFail}`)
     
    }
    else if(tPercent < 49 && tPercent < 60){
       
        document.write(`Grade : ${grade3}`)
       }
     else  if(tPercent > 59 && tPercent < 70){
       
        document.write(`Grade : ${grade2}`)
       }
      else if(tPercent > 69 && tPercent < 80){
       
        document.write(`Grade : ${grade1}`)
       }
      else{
      
        document.write(`Grade : ${grade}`)
       }
    
}

// Question 7
function QSeven(){
  let userInput=prompt("Gussing Game \n Please enter any nuber between 1-10")

  if(userInput==4){
      win="Bingo! Correc answer"
  }
   else{
       win="Close enough to the correct answer"
   } 
   document.querySelector("#win").innerHTML=win
}

// Question 8
function QEight(){
    let userInput=prompt("Check Number That is divisible by 3 or not")
    if(userInput%3 ==0){
        document.write(`<h1>${userInput} number is divisible by 3</h1>`)

    }else{
        document.write(`<h1>${userInput} number can not be divisible by 3 </h1>`)
    }
}
// Question 9
function QNine(){
    let evenORodd=prompt("Enter number to check even or odd")
    if(evenORodd%2==0){
        document.write("<h1>This Number is Even </h1>")

    }
    else if(evenORodd%2!=0){
        document.write("<h1>This Number is Odd</h1>")

    }

    else {
        document.write(" <h1>Error! Please Enter Valid Number</h1>")
    }
}
// Question 10
function QTen(){
    let tem=prompt("Enter Temperature ")
    if(tem>40){
        document.write("<h1>It is too hot outside </h1>")
    } else if (tem > 30 ){
        document.write(" <h1>The Weather today is Normal</h1>")
    } else if(tem > 20){
        document.write("<h1>Today’s Weather is cool</h1>")
    } else {
        document.write("<h1>OMG! Todays weather is so Cool</h1>")
    }
}

// Question 11
function QEleven(){
    let userInput1= parseInt(prompt("Enter Number one"));
    let userInput2= parseInt(prompt("Enter Number Two"));
    let operator = prompt(`Enter operator (+, -, *, /)`);

    if(operator==="+"){
        document.write(`${userInput1}+ ${userInput2} = ${userInput1 + userInput2}`)

    }
    else if (operator === "*") {
        document.write(`${userInput1} * ${userInput2} =${userInput1 + userInput2}`)
    }
    else if (operator === "/") {
        document.write(`${userInput1} / ${userInput2} = ${userInput1 + userInput2}`)
    }
    else if (operator === "%") {
        document.write(`${userInput1} % ${userInput2} = ${userInput1 + userInput2}`)
    }
    else {
        document.write(`Invalid operator`);
    }
     
     
}

