//task01
console.log('Hello, World') // english 
console.log('Hej, Världen') // swedish hello
console.log('Hello, Dunia') // urdu hello

//task02
console.log('Im awesome'); // semicolon is extre, 'I' was wrong 

//task03
let x // declare variable x
console.log("the value of my variable x will be:10" ) // declare in words
console.log(x)
x=10
console.log("the value of x will be: 10")
console.log(x)

//task04
let y="first string"
console.log("the value of my string will be :first string");
console.log(y);
y="This is new string assigned to the variable";
console.log('the value of my string will be: this is new string assigned to the variable');
console.log(y);

//task05
let z=7.25;
console.log(z);
let a = Math.round(z);
console.log(a);
let highestValue= Math.max(z,a);
console.log(highestValue);

//task06
let myFavouriteAnimals = [];
console.log("the value of array is empty");
myFavouriteAnimals = ["cats","dogs","parrots"];
console.log(myFavouriteAnimals);
myFavouriteAnimals.push("baby pig");
console.log(myFavouriteAnimals);

//task07
let myString = "this is a test";
console.log(myString);
let stringLength= myString.length;
console.log(stringLength);

//task08
let firstName = "Axel";
console.log=("The value of my variable firstName is: " + firstName);
console.log= ("The type of my variable firstName is string ")
console.log= (typeof firstName)

let age = 31;
console.log=("The value of my variable age is: " + age);
console.log= ("The type of my variable age is number ")
console.log= (typeof age)

let isMale = true
console.log=("The value of my variable adress is: " + isMale);
console.log= ("The type of my variable firstName is bolean ")
console.log= (typeof isMale)

let phoneNo = 76555444
console.log=("The value of my variable phoneNo is: " + phoneNo);
console.log= ("The type of my variable firstName is number ")
console.log= (typeof phoneNo)

function CopmareType (firstName, age) {
if ( typeof(firstName) === typeof(age) || typeof(firstName) ===typeof(isMale))
  {
    console.log("same type")
  }
else {
      console.log("Diffrent type")
}
}

//task09
let x = 7;
x = x % 3;
console.log("first decalre and initilize x with value 7")
console.log("Answer is 1 which is remainder of x ")
console.log(" the remainder opertaor divides a variable by the value of the right operand and assigns the remainder to the variable")


//task 10
console.log(Number.isFinite(6/0));
console.log(Number.isFinite(10/0));
console.log("when divide by 0 , number become infinite")