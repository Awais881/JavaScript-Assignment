// Question 1

function QOne() {
    let character = prompt("Enter character");

    if (character == "" || character == null || character == " " || character == "  " || character == "   " || character == "    " || character == "     ") {
        alert("Empty String");
    }
    else if (!isNaN(character)) {
        alert('This is a Number');
    }
    else if (character == character.toUpperCase()) {
        alert('This is Upper Case');
    }
    else if (character == character.toLowerCase()) {
        alert('This is Lower Case');
    }
    else {
        alert('Please enter an Alphabet or a Number');
    }
}

// Question 2
function QTwo() {
    let int1 = Number(prompt("Enter Number One To Check Which Number is Greater"))
    let int2 = Number(prompt("Enter Number Two To Check Which Number is Greater"))
    if (int1 > int2) {
        document.write(`${int1} is Greater than ${int2}`)

    }
    else if (int1 < int2) {
        document.write(`${int2} is Greater than ${int1}`)

    } else if (int1 == int2) {
        document.write("Both Numbers are equal")
    } else {
        document.write(`Please Enter Valid Number`)

    }
}

// question 3
function QThree() {
    let input = Number(prompt("Please enter number to check positive or negative"))
    if (input > 0) {
        document.write(`<h1>Numner ${input} is positive</h1>`)

    } else if (input < 0) {
        document.write(`<h1>Numner ${input} is Negative</h1>`)
    } else {
        document.write(`<h1>Numner ${input} is zero</h1>`)
    }
}

// Question 4
function QFour() {
    let character = prompt("Please Enter Character to check the character is vowel or not ")

    if (character == "a" || character == "e" || character == "i" || character == "o" || character == "u") {
        document.write(`<h1> ${character} is vowel</h1>`)
    }
    else {
        document.write(`<h1> ${character} is not vowel</h1>`)
    }
}

// Question 5
function QFive() {
    // Methode 1

    // let password=123456;
    // let input=prompt("Please enter your password")

    // if(input==password){
    //     document.write(`<h1>Correct! The password you entered matches the original password </h1>`)
    // } else {
    //     document.write(`<h1>Incorrect password</h1>`)
    // }
    // Methode 2 Confirm Password
    let password1 = prompt("Please enter Your Password ")
    let confirmPassword = prompt("Confirm Your your Pasword  ")
    if (password1 == confirmPassword) {
        document.write(`<h1>Correct! The password you entered matches the original password </h1>`)
    } else {
        document.write(`<h1> The Password you entered Doesn't Mathced</h1>`)
    }

}

// Qustion 6
// function QSix() {
//     var greeting;
//     var hour = 13;
//     if (hour < 18) {
//         greeting = "Good day"
//     }
//          else{
//         greeting = "Good evening";
//     }
 
// }
function QSix(){
    let hour=prompt("Enter Time in hours")
    if(hour<18){
        alert("Good day")
    }else{
        alert("Good evening")
    }
}

// Question 7
function QSeven(){
    let hour = prompt(`Enter time in 24 hours clock format like 1900 = 7pm`);
    if (hour >= 0000 && hour < 1200) {
        alert(`Good Morning`);
    }
    else if (hour >= 1200 && hour < 1700) {
        alert(`Good Afternoon`);
    }
    else if (hour >= 1700 && hour < 2100) {
        alert(`Good Evening`);
    }
    else if (hour >= 2100 && hour <= 2359) {
        alert(`Good Night`);
    }
    else {
        alert(`Invalid Time`);
    }
}