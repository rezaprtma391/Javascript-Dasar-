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

// Belajar If Nested
// let email = prompt("Masukan Email Anda");

// if(email.length >= 8) {
//     if(email.indexOf("@") !== -1){
//         console.log("Email Valid")
//     }else{
//         console.log("Tidak Ada Symbol @")
//     }
// }else {
//     console.log("Email Belum Valid")
// };

// Belajar if Tanpa @
let password = "rezaprtma391 @43"

if(password.indexOf('@') !== -1){
    console.log("true")
}else {
    console.log("false")
}

//Belajar And
let gender = "male"
let price = 10.000

if(gender === "male" && price >= 5.000){
    console.log("Anda Mendapatkan Diskon")
}

// Belajar Or

let usia = 19;
if (usia === 19 || usia === 20){
    console.log("Anda Bisa Menikah")
} else {
    console.log("Anda Belum Bisa Menikah")
}

// Belajar Not
let user = "admin";
if (user !== "admin") {
    console.log("akses ditolak")
}else {
    console.log("akses diterima")
}

// Belajar Switch Case
let buah = "mangga"

switch(buah){
    case "apel":
        console.log("Buah Apel")
    break;
    case "stroberi":
        console.log("Buah Stroberi");
    break;
    case "mangga":
        console.log("Buah Mangga");
    break;
    default:
        console.log("Enjoy!")
};

let hari = 1;

switch(hari){
    case 1:
        console.log("Ini Adalah Hari Senin")
        break;
    case 2:
        console.log("Ini Adalah Hari Selasa")
        break;
    case 3:
        console.log("Ini Adalah Hari Rabu")
        break;
    case 4:
        console.log("Ini Adalah Hari Kamis")
        break;
    case 5:
        console.log("Ini Adalah Hari Jumat")
        break;
    case 6:
        console.log("Ini Adalah Hari Sabtu")
        break;
    case 7:
        console.log("Ini Adalah Hari Minggu")
        break;
    default:
        console.log("Tidak Ada Lagi!!!!")
}

//Belajar Array

//Array Kosong
let kosong =[];
kosong = [true, "string,", 1, null]
console.log(kosong);

// Array String
let carBrand = ["Toyota", "Honda", "Daihatsu"];
console.log(carBrand);

// Array Number
let angkaArray = [1,2,3,4,5,6];
console.log(angkaArray);

// Mengganti Isi Array
let merkMotor = [1, "Honda", "Yamaha"];
merkMotor[0] = "Yamaha"; // Mengubah index array 0 
merkMotor[2] = 1; // Mengubah index array 2
merkMotor[5] = "Suzuki"
console.log(merkMotor)

// Push Menambahkan item array mulai dari akhir
// Pop Menghapus item arrat mulai dari akhir
// Array Method Push And Pop
let Alphabet = ["A","B","C","D"];
Alphabet.push("E", "F", "G", "H", "I"); // Menambahkan data ke array
console.log(Alphabet);

console.log(Alphabet.pop()) // Menghapus data array yang paling terakhir
console.log(Alphabet)




// Unshift Menambahkan item array mulai dari depan
// Shift menghapus item array mulai dari depan
//Array Method Unshift dan Shift
let siswa = ["Babi","Camdan","Devi","Eman"];
console.log(siswa);
siswa.unshift("Alif"); // Menambahkan Item array dari depan
console.log(siswa);
siswa.shift() // Menghapus item array dari depan
console.log(siswa)

// Array Method Concat
let array1 = ["a","b","c"];
let array2 = ["e","f","g"];
let array3 = array1.concat(array2);
console.log(array3)

// Array Method indexOf
console.log(array3.indexOf("e")); // Mencari Nilai Index Array
console.log(array3[3]) // mencari nilai nilai array melalui index
// Array Method Include
console.log(array3.includes("e")) // NgeCek Apakah Ada Nilai tersebut
console.log(array3.includes("z")) // same

// Array Method Sort
let arrSort = [9,8,7,6,5,4,3,2,1]; // Sort Dimulai dari paling huruf/angka paling depan
console.log(arrSort.sort());

// Array Method Splice
const months = ['Jan', 'March', 'April', 'June', 'July'];
months.splice(0, 1, "Feb")
console.log(months)

// Array Method slice
let fruits = ["Apple", "Orange", "Banana", "Kiwi", "Strawberry"]
console.log(fruits.slice(0,3)) // Mencopy Data Dari Index Ke-0 hingga Index Ke-2
console.log(fruits.slice(2,-1))

// Array Method Join
let animals = ["Cat", "Dog", "Elephant"];
console.log(animals.join(" ")); // gabung data array dan ditambah symbol dll