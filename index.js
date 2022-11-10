console.log("hello world");
// JS value types given below:string,number,boolean,undefined,null,
let name = "Amin"; 
let age=23.5; //number int,float,double don't exist in JS
let age1=23; //number
let isApproved = false;
let firtsNumber = undefined;
let LastName = null;
const value =30;
//cons value won't change
console.log(name);
console.log(value);
console.log(age);
//JS Reference types given below:object,array,function
// Object
let person = {
    name: "Momin",
    age: 19
};
console.log(person);
//change object properties : 1. Dot notation(Use it)
person.name ="John";
//change object properties : 2.Brackets notation
person["age"] = 20;

//Array: length can change meaning array in JS is dynamic. Array is an object is JS
let SelectedColors = ["red", "green", ];
console.log(SelectedColors);
console.log(SelectedColors[1]);
console.log(SelectedColors.length);
//function
function greet(name, age) {
    console.log("Hello " + name + " " + age);
    console.log("How is life!");
}
greet("Amin",3);
//types of function

//performing a task
function greet1(name, age) {
    console.log("Hello " + name + " " + age);
    console.log("How is life!");
}

//calculating a value
function square(value) {
    return value * 100;
}
console.log(square(2));
