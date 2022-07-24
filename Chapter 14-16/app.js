// Question 8

function QEight(){
    let studentName=["Awais","Hamza","Ali"]
    let score=[480,300,399]
    let total=500;

    let percentage=[];

  for(let i=0; i<3; i++){ 
    percentage[i]=(score[i]/total)*100;
    document.write(`<h1>Score of ${studentName [i]} is ${score [i]}: percentage ${percentage [i]} %</h1> `)
   
  }
  document.write(`<a href="../Chapter 14-16/index.html"><button>Back</button></a>`)
}

// // Question 9
// function QNine(){ 
    
//     let colors=["Blue","Red","Green","Black"]
//     document.write(`${colors}`)
  
//     // //a
//     let beginColor=prompt("Which Color do you want to add in begininning in the Array")
//     colors.unshift(beginColor)
//     // document.write(beginColor)
  


// }
 
// Question 10
// the array in ascending order using Array’s sort method. Write a program to store student scores in an array & sort
function QTen(){
    document.write(`<h2>Q 10:  Write a program to store student scores in an array & sort the array in ascending order using Array’s sort method.</h2><br><br>`);
    let studentScores=[320,676,221,500]
    document.write(`Score of Student : ${studentScores} <br>`)
    document.write(`Ordered Score of Student : ${studentScores.sort()} <br> <br> <br>`)
    document.write(`<a href="../Chapter 14-16/index.html"><button>Back</button></a>`) 
}

// Question 11
// 11. Write a program to initialize an array with city names Copy 3 array elements from cities array to selectedCities array.

function QEleven(){
    document.write(`<h2>Q 11: Write a program to initialize an array with city names Copy 3 array elements from cities array to selectedCities array.</h2><br><br>`);
     let cities=["Karachi","Lahore", "Quetta ","Islamabad","Peshawar"]
     selectedCities=[]
     selectedCities[0]=cities[2]
     selectedCities[1]=cities[4]
     selectedCities[2]=cities[1]
     document.write(`<h3>Cities List : ${cities} </h3><br> `)
     document.write(`<h3>Selected Cities List : ${selectedCities}</h3> <br>`)
     document.write(`<a href="../Chapter 14-16/index.html"><button>Back</button></a>`)

}

// Question 12
// Write a program to create a single string from the below mentioned array:var arr = [“This ”, “ is ”, “ my ”, “ cat”]; (Use array’s join method)

function  QTwelve() {
    document.write(`<h3>Q 12: Write a program to create a single string from the below mentioned array <br><br>var arr = [“This ”, “ is ”, “ my ”, “ cat”]; (Use array’s join method).</h3><br><br>`);
    let array=["This" , "is" ,"my" , "cat"];
    let string = array.join("  ");
    document.write(`Array : ${array}<br> `)
    document.write(`String : ${string} <br> <br><br>`)
    document.write(`<a href="../Chapter 14-16/index.html"><button>Back</button></a>`) 
    // let arr = ["This","is","my","cat"]
    // let str = arr.join("");
    // document.write(`<h3>Q 12:  Write a program to create a single string from the below mentioned array: <br><br>let arr = [“This ”, “ is ”, “ my ”, “ cat”];</h3><br><br>`);
    // document.write(`Array: ${arr}<br>`);
    // document.write(`String: ${str}<br>`);
   

}

// Question 13
function QThirteen(){
  let devices = ["Keyboard", "Mouse", "Printer", "Monitor"];
  document.write(`<h3>Q 13:  Create a new array. Store values one by one in such a way that you can access the values in the order in which they were stored. (FIFO-First In First Out). Using foreach loop.</h3><br><br>`);
  document.write(`<b>Devices : ${devices}</b> <br> <br>`)
  devices.forEach(function (item){
   document.write(`Out:<br> ${item}<br> <br>`)
   });
  document.write(`<a href="../Chapter 14-16/index.html"><button>Back</button></a>`)
  }
//Question 14
function QFourteen(){
  document.write(`<h3>Q 14:  Create a new array. Store values one by one in such a way that you can access the values in reverse order. (Last In First Out). Using foreach loop.</h3><br><br>`);
  let devices = ["Keyboard", "Mouse", "Printer", "Monitor"];
  document.write(`<b>Devices : ${devices}</b> <br> <br>`);
  devices.reverse()
  devices.forEach(function (item){
    document.write(`Out:<br> ${item}<br> <br>`)
    
   });
   document.write(`<a href="../Chapter 14-16/index.html"><button>Back</button></a>`)
}

// Question 15 
function QFifteen(){
  document.write(`<h3>Q 15:  Write a program to store phone manufacturers (Apple, Samsung, Motorola, Nokia, Sony & Haier) in an array. <br>Display the following dropdown/select menu in your browser using document.write() method:</h3><br><br>`);
  let phoneCompanies=["Apple","Samsung", "Motorola", "Nokia", "Sony" ,"Haier" ]
  
  document.write(`<select>`)
phoneCompanies.forEach(function (item){
document.write(`<option>${item}</option>`)});

  document.write(`</select> <br> <br>`)

document.write(`<a href="../Chapter 14-16/index.html"><button>Back</button></a>`)
}
