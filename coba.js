// Tools Js
// alert("Assalamualaikum!");
// prompt("1 === 1 Adalah");
// console.log("WKWKWKWKWKW");
// console.warn("Warning Bukan Artinya Warna Kuning Ya!!!!")
// console.error("Yah Kok Error XIXiXIXIXI")

// Belajar If
// let bilangan = 8;
// if (bilangan % 2 === 0) {
//     console.log(bilangan,"adalah bilangan genap")
// } else {
//     console.log(bilangan,"adalah bilangan ganjil")
// };

// let nama = prompt('Masukkan Nama Anda: ', 'Yang Bener!'); 
// if (nama === '') { 
//     alert('Anda belum memasukkan nama')
// }

//Belajar If Nested
// let password = prompt("Masukan Password Anda");
// // Ini Kurang Aman
// if (password.length >= 6) { 
//     // if (password.indexOf(' ') === -1){
//         console.log("Password Valid");
//     // } else {
//         // console.log("Tidak boleh ada spasi di dalam password");
//     // }
// } else {
//     console.log("Password Tidak Valid");   
// }

// if (password.indexOf(' ') === -1) {
//     console.log("Password Tidak Ada Spasi")
// } else {
//     console.log("Password Tidak Valid Karena Ada Spasi")
// }

// Belajar If Nested
// let password = prompt("Masukan Password Anda");

// if(password.length >= 6) {
//     if(password.indexOf(' ') === -1) {
//         console.log("Password Valid")
//     } else {
//         console.log("Password Tidak Boleh Ada Spasi")
//     }
// }else {
//     console.log("Password Tidak Valid")
// }

// Belajar Nested If
// let email = prompt("Masukan Email Anda");

// if(email.length >= 8) {
//     if(email.indexOf("@") !== -1){
//         console.log("Email Valid")
//     }else{
//         console.log("Tidak Ada Symbol @")
//     }
// }else {
//     console.log("Email Belum Valid")
// }

let msg = "Ini Adalah DOM";
let content = "Halo Guys Welcome Back Ini Adalah Sesi Belajar Tentang DOM, Disini Saya Akan Belajar DOM dan Mengimplementasikannya!"

document.querySelector("#header").innerHTML = msg;
document.querySelector("#content").innerHTML = content;

//Belajar Logika And
// let password = prompt("Masukan Password Anda!");

// if(password.length >= 6 && password.indexOf(' ') === -1) {
//     console.log("Password Valid")
// }else {
//     console.log("Password Tidak Valid")
// }

//Belajar Logika Or
let role = prompt("Masukan Role Anda").toLowerCase();
if(role === "admin" || role === "spv") {
    console.log("Akses Diterima")
}else {
    console.log("Akses Ditolak")
}

//Array
let carBrand = ["Toyota", "Honda", "Daihatsu"];
console.log(carBrand);
