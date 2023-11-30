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
};

let count = 0;

while (count <= 10) {
 console.log("Angka Ke", count);
 count++;
};

//function
//Pakai Console.log
function myFunction(x, y) {
    console.log(x * y)
};

myFunction(5, 5)
//Pakai Return
let add = function(a, b) {
    return a + b;
};

let hasil = add(1, 2);
console.log(hasil);

//Method Math
console.log(Math.PI);
console.log(Math.random());
console.log(Math.abs(-123));
console.log(Math.round(5.9));
console.log(Math.floor(5.9));
console.log(Math.cos(1));

//Logika Perbadingan
console.log(5 >= 5, 5 > 5);
console.log(5 == '5', 5 === '5');
console.log(5 != 5, 5 !== '5');

//Bilangan Ganjil-Genap
let bilangan = 8;
if (bilangan % 2 === 0) {
    console.log(bilangan, "adalah bilangan genap")
} else {
    console.log(bilangan, "adalah bilangan ganjil")
};

// Belajar IF
let angka = Math.random();
console.log("Ini adalah angkanya", angka);
if (angka >= 0.5) {
    console.log("Angka lebih besar dari angka 0.5")
};
if (angka <= 0.5) {
    console.log("Angka lebih kecil dari angka 0.5")
};

//Belajar Else IF 
let Hari = "Sabtu";
if (Hari === "Senin") {
    console.log("Anda berada di hari Senin");
}
else if (Hari === "Sabtu") {
    console.log("Anda berada di hari sabtu")
};

let nilai = 49;
if (nilai > 90) {
    console.log("A");
}
else if (nilai > 70) {
    console.log("B")
}
else if (nilai > 60) {
    console.log("C")
}
else if (nilai > 50) {
    console.log("E")
}
else if (nilai < 50) {
    console.log("D")
}

//Belajar Else
let hariHari = "Selasa";

if (hariHari === "Senin") {
    console.log("Anda berada di hari Senin");
}
else if (hariHari === "Sabtu") {
    console.log("Anda berada di hari sabtu")
}
else {
    console.log("Selain Senin Dan Sabtu")
};
