// function penjumlahan (a, b) {
//     const total = a + b
//     return total
// }

//Function return dan kondisi
// function jumlah (a, b) {
//     if(typeof a !== "number" || b !== "number"){
//         return "Bukan Angka"
//     }
//     return a + b
// }

//Function Scope
// let windows = 11;
// function easyWindows() {
//   windows = 10;
//   console.log(windows);
// }

// easyWindows();
// console.log(windows)

// Cek Negasi
// let tinggi = 10;
// if (tinggi !== 5) {
//   console.log("selamat");
// }

// Lexical Scope "Nested Function"
// function cariJabatan(){
//   let jabatan = "Programer";

//     function orangDalam(){

//       function lebihDalam(){
//         console.log(`Ini memakai Variabel didalam function cariJabatan ${jabatan}`)
//       }

//       lebihDalam();

//     }

//     orangDalam()
// }

// cariJabatan()

// Block Scope
// {let name = "Reza"}
// // console.log(name)

// {const name = "Reza"}
// // console.log(name)

// {var usia = 19}
// console.log(usia)

// Function Scope "Var, Let , Const"

// console.log(carName)
// code here CAN'T use carName
// function myFunction() {
//   let carName = "Volvo";
//   console.log(carName)
//   // code here CAN use carName
// }
// // code here CAN'T use carName
// console.log(carName)

// // Global Scope
// let carName = "Volvo";
// // code here can use carName
// function myFunction() {
// // code here can also use carName
//   console.log(carName)
// }

// myFunction()

// Function Expression
// function perkalian (a, b) {
//   return a + b
// }
// let hasill = perkalian(5, 5)
// console.log(hasill)

// //Function Expression
// let hasil = function (a, b){
//   return a + b
// }
// console.log(hasil(1,6))

// Function Sebagai Function Argument Lain
// function duaKali (dua){
//   dua()
//   dua()
// }

// function tigaKali (tiga){
//   tiga()
//   tiga()
//   tiga()
// }

// // Argumennya
// function lemparDadu() {
//   const hasil = Math.floor(Math.random() * 5) + 1
//   console.log(hasil)
// }

// duaKali(lemparDadu)

// Function Bernilai Balik Function
// function hasilnyaAdalahFunction() {
//   const ran = Math.random();

//   if (ran > 0.1) {
//     return function () {
//       console.log("Selamat, Angkanya Lebih Besar");
//     };
//   } else {
//     return function () {
//       console.log("Maaf, Mungkin Bisa Coba Lagi");
//     };
//   }
// }

// let hasil = hasilnyaAdalahFunction();
// console.log(hasil());

// Method
// let Aritmatika = { //Object
//   pertambahan: function (x, y) { // Method
//     return x + y;
//   },
//   pengurangan: function (x, y) { //Method
//     return x - y;
//   },
// };

// console.log(Aritmatika.pertambahan(20, 20));

// Keywoard This
// let person = {
//   nama: "Reza",
//   usia: 19,
//   pengenalan: function () {
//     return `Nama Saya ${this.nama} dan usia saya ${this.usia}`;
//   },
// };

// person.nama = "Xena";
// person.usia = 18;
// console.log(person.pengenalan());

// Try And Catch
// try {
//   person.pengenalan();
// } catch {
//   console.log("Error");
// }

// // person.pengenalan()
// console.log("Setelah Try And Catch");

// function teriak(msg) {
//   try {
//     console.log(msg.toUpperCase());
//   } catch (err) {
//     console.log(err); // Argumen Pada catch menghasilkan pemberitahuan
//     console.log("Silahkan Masukan Tipe Data String Pada Argumen Teriak");
//   }
// }

// teriak("Reza");

// Function Biasa
// function helloThere(name) {
// return `Hello ${name}`;
// }

// let hasil = helloThere("Reza");
// console.log(hasil);

// Function Expression
// let Perkalian = function (x) {
// return x * x;
// };

// console.log(Perkalian(5));

// Arrow Function
// let HelloThere = (name) => {
// console.log(`Hello ${name}`);
// };

// HelloThere("Reza");

// Meringkas Function
// const random = () => Math.floor(Math.random() * 1000) + 1;

// console.log(random());

// Function Satu Baris
// const add = (a, b) => a + b;

// console.log(add(1, 27));

// SetTimeOut Dan SetIrtenval
// console.log("Apa Kabar Kamu?");
// setTimeout(() => {
//   console.log("Masih Kok, Emang Kenapa?");
// }, 5000);

// setTimeout(() => {
//   console.log("Aku Otw Sana Ya!!!")
// }, 8000);

// const interval = setInterval(() => {
//   console.log(Math.floor(Math.random() * 1000) + 1);
// }, 3000);

// clearInterval(interval) // Untuk Berhentikan Interval

// setInterval(() => {
//   console.log(Math.floor(Math.random() * 1000) + 1);
// }, 3000);

// Method Filter
// let angka = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let angkaGenap = angka.filter((y) => {
//   return y % 2 === 0;
// });

// let angkaGanjil = angka.filter((n) => {
//   return n % 2 === 1;
// });

// let angkaBaru = angka.filter((a) => {
//   return a < 5;
// });

// console.log(angka);
// console.log(angkaGenap);
// console.log(angkaGanjil);
// console.log(angkaBaru)

// Method Every

// let hasilUlangan = [87, 78, 80, 87, 89];

// let lulus = hasilUlangan.every((score) => {
//   return (score) >= 75;
// });

// console.log(lulus)

// Method Some, Yang memenuhi kondisi satu pun tetep true, tidak spt every harus semua kondisi terpenuhi
// let hasilUlangan = [60, 72, 24, 14, 80];

// let lulus = hasilUlangan.some((score) => {
//   return score >= 75;
// });

// console.log(lulus);

// Method Reduce
// let subtotal = [1500, 20000, 4000, 19000, 32000];

// let total = subtotal.reduce((currTotal, singleSubTotal) => {
//   return currTotal + singleSubTotal;
// });

// console.log(subtotal)
// console.log(total)

//Funtion this Didalam Object

// let person = {
//   name: "John",
//   lastname: "Doe",
//   fullName: function () {
//     return `${this.name} ${this.lastname}`;
//   },
// };

// Akan Undifined
// let person = {
//   name: "John",
//   lastname: "Doe",
//   fullName: () => {
//     console.log(this); // ini bakal Masuk Ke Object Windows
//     return `${this.person} ${this.lastname}`;
//   },
// };

// Pakai Function Anounymous Didalam Object Tetapi Ada Function/ CallBack Function lagi Akan Ke Windows lagi
// let person = {
//   name: "John",
//   lastName: "Doe",
//   fullName: function () {
//     setTimeout(function () {
//       console.log(this)
//       console.log(`${this.name} ${this.lastName}`)
//     },3000)
//   },
// }

// Default Value Function
// let sayHello = (name , msg = "Hello World") => {
//   console.log(`${name} ${msg}`)
// }

// sayHello("Reza")

// let sayHello = (name = "Reza", msg) => {
//   console.log(`${name} ${msg}`)
// }

// sayHello("Hello World") // Hello World Undefined

// Spread Operator
// Math.max(1,2,3,4,5,6,7,8) // 8
// Math.min(8,7,6,5,4,3,2,1) // 1

// let angka = [1,2,3,4,5,6,7,8,9]

// let angkaMaxx = Math.max(angka) // Tidak Bisa Karena var angka tipe data array
// console.log(angkaMaxx)
// let angkaMax = Math.max(...angka) // Bisa Karena Memakai ...
// console.log(angkaMax)

// Menggabungkan Array / Merge Array dengan Spread Operator
// let angka = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let name = ["Alif", "Bobby", "Cristian", "Debora"];
// Menambahkan element Didalam array
// let addAngka = angka.push(10, "A", "B", "C");
// let addAngka = [...angka, 10, "A", "B", "C", "D"]
// console.log(addAngka);

// let gabunganArr = [...angka, ...name,...addAngka];
// console.log(gabunganArr);

// Menggabungkan Object Satu Dengan Object Lainnya
// let person = {
//   name: "John",
//   age: 30,
// };

// let newPerson = { ...person, Hoby: "Code" };

// console.log(newPerson)

// let person = {
//   name: "John",
//   age: 30,
// };

// let addPerson = {...person, alamat: "Tangerang Selatan", asalSekolah: "Letris"}
// console.log(addPerson)

// let newPerson = {
//   hoby: "Code",
//   // ...person, //Ini Bisa
// }

// // console.log(newPerson)

// let objectGabungan = {...person,...newPerson}
// console.log(objectGabungan)

// Spread Operator Jadi rest Param

// let numAll = (...nums) => {
//   return nums.reduce((total, el) => total + el );
// };

// console.log(numAll(20,30,40,23))

// Spread Operator
let name = ["Alif", "Bobby", "Cristian", "Debora", "Elvian"];

// const Pemenang = (Emas, Silver, Perunggu, ...Sisa) => {
//   console.log(`Juara Pertama Ialah : ${Emas}`);
//   console.log(`Juara Kedua Ialah : ${Silver}`);
//   console.log(`Juara Ketiga Ialah : ${Perunggu}`);
//   console.log(`Sisanya Peserta Lainnya : ${Sisa}`);
// };

// Pemenang(...name)

// DecStructuring Array
let [Emas, Silver, Bronze, ...Sisa] = name
console.log(Emas)
console.log(Silver)
console.log(Bronze)
console.log(Sisa)

// DecStructuring Object
// let person = {
//   name: "John",
//   age: 30,
// };

//properti name didalam object diganti menjadi nama dan menambahkan object phone default value
// let = {name: nama, age , phone = 4453636253} = person

// console.log(nama)
// console.log(age)
// console.log(phone)

let person = {
    name: "John",
    age: 30,
  };

const nameAndAge = ({name, age}) => {
  return `${name} - ${age}`
} 

console.log(nameAndAge(person))