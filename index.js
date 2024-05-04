// const myh3 = document.getElementById("myh3")
// const mysubmit = document.getElementById("mysubmit")

// mysubmit.onclick = function() {

//     const percentage = document.getElementById("mytext").value
//     const consttergrade;

//     switch(true){
//         case percentage > 100:
//             myh3.textContent = "This is invalid marks"
//             break;
//         case percentage >= 90:
//             consttergrade = 'A';
//             myh3.textContent = consttergrade
//             break;
//         case percentage >= 80:
//             consttergrade = 'B'
//             myh3.textContent = consttergrade
//             break;
//         case percentage >= 70:
//             consttergrade = 'C'
//             myh3.textContent = consttergrade
//             break;
//         case percentage >= 60:
//             consttergrade = 'D'
//             myh3.textContent = consttergrade
//             break;
//         case percentage >= 33:
//             consttergrade = 'E'
//             myh3.textContent = consttergrade
//             break;
//         case percentage >= 0:
//             consttergrade = 'F'
//             myh3.textContent = consttergrade
//             break;
//         default:
//             myh3.textContent = "Your marks can't be below zero"
//     }
// }

// Method chaining

// const username = window.prompt("Enter your username");

// username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1, username.indexOf(" ") ).toLowerCase() +" "+ username.trim().charAt(username.indexOf(" ")+1).toUpperCase() + username.trim().slice(username.indexOf(" ")+2).toLowerCase();

// console.log(username);

// const username = window.prompt("Enter your username");

// username = username.trim(); 

// username = username.charAt(0).toUpperCase() + username.slice(1).toLowerCase();

// const indexOfSpace = username.indexOf(" ");

// if (indexOfSpace == " ") {
//     const secondWord = username.charAt(indexOfSpace + 1).toUpperCase() + username.slice(indexOfSpace + 2);

//     username = username.slice(0, indexOfSpace) + " " + secondWord;
// }

// console.log(username);



// const mysubmit = document.getElementById("mysubmit");

// mysubmit.onclick = function() {
//     const username = document.getElementById("myuser").value;
//     const password = document.getElementById("mypass").value;
//     const result;
//     const resultelement = document.getElementById("result");

//     if (username === "username" && password === "mypassword" ){
//         result = "You are successfully login";
//         resultelement.textContent = result;
//     }
//     else {
//         result = "Invalid credentials, Please try again!";
//         resultelement.textContent = result;

//     }
// }

// for(const i = 1; i <= 10; i++){
//     if (i == 5){
//         continue;
//     }
//     else{
//         console.log(i)
//     }
// }


// const minnum = 50;
// const maxnum = 100;
// const answer = Math.floor(Math.random() * (maxnum - minnum + 1)) + minnum;
// console.log(answer);

// const attempts = 0;
// const guess;
// const running = true;

// while (running){
//     guess = window.prompt("Guess a number between 50 to 100");
//     guess = Number(guess);

//     if (isNaN(guess)){
//         window.alert("Please enter a valid number")
//     }
//     else if(guess < minnum || guess > maxnum){
//         window.alert("Please enter a valid number")
//     }
//     else {
//         attempts++;
//         if(guess < answer){
//             window.alert("To low! Try again");
//         }
//         else if(guess > answer){
//             window.alert("To High! Try again")
//         }
//         else {
//             window.alert(`Correct! The answer is ${answer} You took ${attempts} attempts`)
//         }
//     }
// }

// const textbox = document.getElementById("textbox");
// const tofarenhite = document.getElementById("tofarenhite");
// const tocelcius = document.getElementById("tocelcius");
// const result = document.getElementById("result");
// const temp;

// function convert(event){
//     event.preventDefault(event);

//     if(tofarenhite.checked){
//          temp = Number(textbox.value);
//          temp = temp * 9/5 + 32;
//          result.textContent  = `${temp.toFixed(1)} °F `;
//     }
//     else if(tocelcius.checked){
//         temp = Number(textbox.value);
//         temp = (temp - 32) * 5/9;
//         result.textContent  = `${temp.toFixed(1)} °C `;

//     }
//     else{
//         result.textContent = "Select a unit please!";
//     }
// }

// function average(...numbers){
//     const result = 0;
//     for(const number of numbers){
//         result += number;
//     }
//     return result / numbers.length;
// }

// const  answer = average(99,99,99,99);

// console.log(answer);




// function combinestring(...strings){
//     return strings.join(" ");

// }
// const fullname = combinestring("Mr.", "Ankit", "kumar","III")
// console.log(fullname);


// function roll(){
//     const numofdice = document.getElementById("textbox").value;
//     const diceresult = document.getElementById("resultofdice");
//     const diceimages = document.getElementById("resultofimages");
//     const values = [];
//     const images = [];

//     for (const i = 0; i < numofdice; i++){
//         const value  = Math.floor(Math.random() * 6) + 1;
//         values.push(value);
//         images.push(`<img src="disc_images/${value}.png" alt="Dice ${value}">`)
//     }
//     diceresult.textContent = ` Dice:  ${values.join(", ")}`;
//     diceimages.innerHTML = images.join(" ")
// }

        // const button = document.getElementById("generate");
        
        // button.addEventListener("click", function() {
        //     generatePassword();
        // });

        // function generatePassword() {
        //     const lowercheckbox = document.getElementById("lowercheckbox");
        //     const highercheckbox = document.getElementById("highercheckbox");
        //     const numberscheckbox = document.getElementById("numberscheckbox");
        //     const symbolscheckbox = document.getElementById("symbolscheckbox");
        //     const lengthofpassword = document.getElementById("lengthofpassword");

        //     const passwordlength = Number(lengthofpassword.value);
        //     const includelower = lowercheckbox.checked;
        //     const includeupper = highercheckbox.checked;
        //     const includenumbers = numberscheckbox.checked;
        //     const includesymbols = symbolscheckbox.checked;

        //     const password = generatepassword(passwordlength, includelower, includeupper, includenumbers, includesymbols);

        //     const generatedpass = document.getElementById("result");
        //     generatedpass.textContent = password;
        // }

        // function generatepassword(length, includelower, includeupper, includenumbers, includesymbols) {
        //     const lower = "abcdefghijklmnopqrstuvwxyz";
        //     const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        //     const numbers = "0123456789";
        //     const symbols = "!@#$%^&*()-_=+[{]}\\|;:,<.>/?";

        //     let password = "";
        //     let allowedchars = "";

        //     allowedchars += includelower ? lower : "";
        //     allowedchars += includeupper ? upper : "";
        //     allowedchars += includenumbers ? numbers : "";
        //     allowedchars += includesymbols ? symbols : "";

        //     if (length <= 0) {
        //         return `password length must be at least 1`;
        //     }
        //     if (allowedchars.length === 0) {
        //         return `at least one character type must be selected`;
        //     }
        //     for (let i = 0; i < length; i++) {
        //         const randomindex = Math.floor(Math.random() * allowedchars.length);
        //         password += allowedchars.charAt(randomindex);
        //     }
        //     return password;
        // }


// sum(displayconsole, 5, 9)
// function sum(callback, x , y){
//     let result = x + y;
//     callback(result);
// }
// function displayconsole(result){
//     console.log(result);
// }

// fruits = ["apple", "orange", "banana", "guava"];

// fruits.forEach(capitalize)
// fruits.forEach(display)

// function uppercase(element, index ,array ){
//     array[index] = element.toUpperCase();
// }
// function capitalize(element, index , array){
//     array[index] = element.charAt(0).toUpperCase() + element.slice(1);
// }

// function display(element){
//     console.log(element);
// }


// function hello(){
//     setTimeout(hello, 3000)
//     console.log("hello world!");
// }

// hello();



// class Animal{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
//     eat(){
//         console.log(`This ${this.name} is eating`)
//     }
//     sleep(){
//         console.log(`This ${this.name} is sleeping`)
//     }
//     move(speed){
//         console.log(`This ${this.name} can move at a  speed of ${speed}Km/hr`)
//     }
// }
// class Rabbit extends Animal{
//     constructor(name, age, runspeed){
//         super(name,age);
//         this.runspeed = runspeed;
//     }
//     run(){
//         console.log(`This ${this.name} is running`);
//         this.move(this.runspeed);
//     }
// }
// class Fish extends Animal{
//     constructor(name, age,swimspeed){
//         super(name, age);
//         this.swimspeed = swimspeed;
//     }
//     swim(){
//         console.log(`This ${this.name} is swimming`);
//         this.move(this.swimspeed);
//     }
// }
// class Hawk extends Animal{
//     constructor(name, age,flyspeed){
//         super(name, age);
//         this.flyspeed = flyspeed;
//     }
//     fly(){
//         console.log(`This ${this.name} is flying`);
//         this.move(this.flyspeed);
//     }
// }

// const rabbit = new Rabbit("Rabbit",1,25)
// const fish = new Fish("Fish",1,25)
// const hawk = new Hawk("Hawk",1,25)

// hawk.eat()
// hawk.sleep()
// hawk.fly()

// class Lerson{
//     constructor(firstname, lastname, age) {
//         this.firstname = firstname;
//         this.lastname = lastname;
//         this.age = age;
//     }
//     set firstname(newfirstname){
//         if(typeof newfirstname === "string" && newfirstname.length > 0){
//             this._firstname = newfirstname;
//         }
//         else{
//             console.error("Invalid firstname:" + newfirstname)
//         }
        
//     }
//     get firstname(){
//         return this._firstname;
//     }
//     set lastname(newlastname){
//         if(typeof newlastname === "string" && newlastname.length > 0){
//             this._lastname = newlastname;
//         }
//         else{
//             console.error("Invalid lastname:" + newlastname);
//         }
        
//     }
//     get lastname(){
//         return this._lastname;
//     }

//     set age(newage){
//         if(typeof newage === "number" && newage > 0){
//             this._age = newage;
//         }
//         else{
//             console.error("Invalid age:" + newage)
//         }     
//     }

//     get age(){
//         return this._age;
//     }
// }   

// const person1 = new Lerson("Ankit","Kumar", 17  )

// console.log(person1.firstname)
// console.log(person1.lastname)
// console.log(person1.age)




// class Person{
//     constructor(firstname, lastname, age){
//         this.firstname = firstname;
//         this.lastname = lastname;
//         this.age = age;
//     }
//     set firstname(newfirstname){
//         if(typeof newfirstname === "string" && newfirstname.length > 0){
//             this._firstname = newfirstname;
//         }
//         else{
//             console.error("Invalid firstname: " + newfirstname);
//         }
//     }
//     get firstname(){
//         return this._firstname;
//     }

//     set lastname(newlastname){
//         if(typeof newlastname === "string" && newlastname.length > 0){
//             this._lastname = newlastname;
//         }
//         else{
//             console.error("Invalid lastname: " + newlastname);
//         }
//     }

//     get lastname(){
//         return this._lastname;
//     }

//     set age(newage){
//         if(typeof newage === "number" && newage > 0){
//             this._age = newage;
//         }
//         else{
//             console.error("Invalid age: " + newage);
//         }
//     }

//     get age(){
//         return this._age;
//     }
// }
// const person = new Person("John", "Mike", 17)
// const person2 = new Person("Michael", "test", 56)

// console.log(person.firstname)
// console.log(person.lastname)
// console.log(person.age)

// console.log(person2.firstname)
// console.log(person2.lastname)
// console.log(person2.age)



// function displayperson({firstname, lastname, age, job="undefined"}) {
//     console.log(`Name: ${firstname } ${lastname} `);
//     console.log(`age: ${age}`);
//     console.log(`job: ${job}`);
// }
// const person1 = {firstname: "Rajesh",
//                 lastname: "Kumar",
//                 age: 23,
//                 job: "Software Engineer"}

// const person2 = {firstname: "Mohan",
//                 lastname: "Kumar",
//                 age: 23,
//                 }

// const person3 = {firstname: "Rajat",
//                 lastname: "Kumar",
//                 age: 3,
//                 job: "Developer"
//                 }

// displayperson(person3);

// const fruits = [{name: "apple",color: "red", calories: 45},
//               {name:"banana",color: "yellow", calories: 67},
//               {name: "orange",color: "red", calories: 56},
//               {name: "grapes",color: "yellow", calories: 56}];

// fruits.sort((a, b) => b.calories - a.calories);

// console.log(fruits);

// cards = ['A',1,2,3,4,5,6,7,8,9,10,"J","Q","K",]           unsolved project

// cards.sort(() => Math.random() - 0.5) 

// console.log(cards)

// function createGame() {

//     score = 0;

//     function increaseScore(points) {
//         score += points;
//         console.log(`Increased points: +${points}pts`);
//     }

//     function decreaseScore(points) {
//         score -= points;
//         console.log(`Decrease points: -${points}pts`);
//     }

//     function getScore() {
//         console.log(`Current score is ${score}pts`)
//     }

//     return {increaseScore, decreaseScore, getScore}

// }

// const game = createGame()

// game.increaseScore(10);
// game.increaseScore(14);
// game.decreaseScore(5);
// game.getScore();

// const display = document.getElementById("display");

// document.addEventListener('keydown', function(event) {
//     // Check if the pressed key is the space bar
//     if (event.key === ' ') {
//         event.preventDefault(); // Prevent scrolling the page down
//         // Trigger click event on the button with id 'startBtn'
//         document.getElementById('startBtn').click();
//     }
// });


// let timer = 0;
// let startTime = 0;
// let elapsedTime = 0;
// let isRunning = false;

// function start() {
//     if (!isRunning) {
//         startTime = Date.now() - elapsedTime;
//         timer = setInterval(update, 10)
//         isRunning = true;
        
//     }
//     document.addEventListener('keydown', function(event) {
//         // Check if the pressed key is the space bar
//         if (event.key === ' ') {
//             event.preventDefault(); // Prevent scrolling the page down
//             // Trigger click event on the button with id 'startBtn'
//             document.getElementById('stopBtn').click();
//         }
//     });

//     document.addEventListener('keydown', function(event) {
//         // Check if the pressed key is the space bar
//         if (event.key === 'r') {
//             event.preventDefault(); // Prevent scrolling the page down
//             // Trigger click event on the button with id 'startBtn'
//             document.getElementById('resetBtn').click();
//         }
//     });
// }

// function stop() {
//         if(isRunning) {
//             clearInterval(timer)
//             elapsedTime = Date.now() - startTime;
//             isRunning = false
//         }
//         document.addEventListener('keydown', function(event) {
//             // Check if the pressed key is the space bar
//             if (event.key === ' ') {
//                 event.preventDefault(); // Prevent scrolling the page down
//                 // Trigger click event on the button with id 'startBtn'
//                 document.getElementById('startBtn').click();
//             }
//         });
//         document.addEventListener('keydown', function(event) {
//             // Check if the pressed key is the space bar
//             if (event.key === 'r') {
//                 event.preventDefault(); // Prevent scrolling the page down
//                 // Trigger click event on the button with id 'startBtn'
//                 document.getElementById('resetBtn').click();
//             }
//         });

// }


// function reset() {
//     clearInterval(timer)
//     startTime = 0;
//     elapsedTime = 0;
//     isRunning = false;

//     display.textContent = "00:00:00:00";

//     document.addEventListener('keydown', function(event) {
//         // Check if the pressed key is the space bar
//         if (event.key === ' ') {
//             event.preventDefault(); // Prevent scrolling the page down
//             // Trigger click event on the button with id 'startBtn'
//             document.getElementById('startBtn').click();
//         }
//     });
    
// }
// function update() {

//         const currentTime = Date.now();
//         elapsedTime = Date.now() - startTime;
  
//         let hours = Math.floor(elapsedTime / (1000 * 60 * 60))
//         let minutes = Math.floor(elapsedTime / (1000 * 60))
//         let seconds = Math.floor(elapsedTime / 1000)
//         let milliseconds = Math.floor(elapsedTime % 1000 / 10);

//         hours = String(hours).padStart(2, 0)
//         minutes = String(minutes).padStart(2, 0)
//         seconds = String(seconds).padStart(2, 0)
//         milliseconds = String(milliseconds).padStart(2, 0)

//         display.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`
// }


// Es5 Module

// import {pi, getCircumference, getVolume, getArea, } from './MathUtil.js';

// console.log(pi+" cm")

// const circumference = getCircumference(10)
// console.log(circumference.toFixed(2)+" cm");

// const area = getArea(10)
// console.log(area.toFixed(2)+" cm2")

// const volume = getVolume(10)
// console.log(volume.toFixed(2)+" cm3")

// function func1(callback) {
//     setTimeout(() => {console.log("task 1");
//                       callback()}, 3000)
// }
// function func2(){
//     console.log("task 2")
//     console.log("task 3")
//     console.log("task 4")
// }

// func1(func2)



const display = document.getElementById("display");

function appendtodisplay(input) {
        display.value += input
}
function calculate() {
        try {
            
            display.value = eval(display.value);
            
        } catch (error) {
            display.value = "Error";
        }
    }
    
function clearDisplay() {
        display.value = "";
}
function backspace() {
        display.value = display.value.slice(0, -1);
    }
    