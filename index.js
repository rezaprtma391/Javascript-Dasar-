//Literals
let name = "Reza Pratama";
let age = 19;
let status = "punya pacar"

let greeting = "Hello World!";

console.log(greeting.replace("World", "There"),`Nama Saya Adalah ${name} Dan Umur Saya Adalah ${age} Status Saya Adalah ${status}`);

//Looping
let x = 0;

for(x = 0; x <= 10; x++) {
    console.log("Angka Ke", x)
}

let count = 0;

while (count <= 10) {
 console.log("Angka Ke", count);
 count++;
}

//function
//Pakai Console.log
function myFunction(x, y) {
    console.log(x * y)
}

myFunction(5, 5)
//Pakai Return
let add = function(a, b) {
    return a + b;
    };

let hasil = add(1, 2);
console.log(hasil)