/*
Step 1: 
JavaScript is the programming language that powers the web. Unlike the HTML and CSS you have learned previously, JavaScript is most commonly used to write logic instead of markup.
One of the most important concepts in programming is variables. A variable points to a specific memory address that stores a value. 
Variables are given a name which can be used throughout your code to access that value.
Declaring a variable means giving it a name. In JavaScript, this is often done with the let keyword. For example, here is how you would declare a hello variable:
                let hello;
Variable naming follows specific rules: names can include letters, numbers, dollar signs, and underscores, but cannot contain spaces and must not begin with a number.
Declare a character variable in your code.
Note: It is common practice to end statements in JavaScript with a semicolon. ; 
*/

//let character;

/*
Step 2:
Your character variable currently does not have a value. You can assign a value using the assignment operator =. For example:
                let hello = "Hello";
Assigning a value to a variable at the moment of its declaration is known as initialization.
Initialize your character variable by assigning it the value "Hello" during its declaration.
*/

// let character = "Hello";

/*
Step 3:
JavaScript has seven primitive data types, with String being one of them. In JavaScript, a string represents 
a sequence of characters and can be enclosed in either single (') or double (") quotes.
Note that strings are immutable, which means once they are created, they cannot be changed.
Change your "Hello" string to use single quotes.
*/

// let character = 'Hello';

/*
Step 4:
The console allows you to print and view JavaScript output. 
You can send information to the console using console.log(). For example, this code will print "Naomi" to the console:
                let developer = "Naomi";
                console.log(developer);
The code above accesses the developer variable with its name in the console.log(). 
Note that the value between the parentheses is the value that will be printed.
Print the value of the character variable to the console. Then, click the "Console" button to view the JavaScript console.
*/

// let character = 'Hello';
// console.log(character);

/*
Step 5:
When a variable is declared with the let keyword, you can reassign (or change the value of) that variable later on. 
In this example, the value of programmer is changed from "Naomi" to "CamperChan".
                let programmer = "Naomi";
                programmer = "CamperChan";
Note that when reassigning a variable that has already been declared, you do not use the let keyword.
After your console.log, assign the value "World" to your character variable.
*/

// let character = 'Hello';
// console.log(character);
// character = "World";

/*
Step 6:
Now log your character variable to the console again. You should see the string "Hello", then the string "World", in the console.
*/

// let character = 'Hello';
// console.log(character);
// character = "World";
// console.log(character);

/*
Step 7:
When variable names are more than one word, there are specific naming conventions for how you capitalize the words. In JavaScript, the convention to use is camel case.
Camel case means that the first word in the name is entirely lowercase, but the following words are all title-cased. Here are some examples of camel case:
                let variableOne;
                let secondVariable;
                let yetAnotherVariable;
                let thisIsAnAbsurdlyLongName;
Use camel case to declare a new secondCharacter variable.
*/

let character = 'Hello';
console.log(character);
character = "World";
console.log(character);
let secondCharacter;
