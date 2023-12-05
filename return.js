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
try {
  person.pengenalan();
} catch {
  console.log("Error");
}

// person.pengenalan()
console.log("Setelah Try And Catch");

function teriak(msg) {
  try {
    console.log(msg.toUpperCase());
  } catch (err) {
    console.log(err); // Argumen Pada catch menghasilkan pemberitahuan
    console.log("Silahkan Masukan Tipe Data String Pada Argumen Teriak");
  }
}

teriak("Reza");
