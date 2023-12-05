// Method Splice
let bulan = ["Januari","April","Juni","Agustus", "Desember"];
bulan.splice(1,0, "Feb", "Maret")
bulan.splice(4, 0, "Mei")
bulan.splice(6, 0, "July")
bulan.splice(8, 1, "September" , "Oktober", "November", "Desember")
console.log(bulan)

//Cek panjang isi array
let angka = [1,2,3,4,5,6]
console.log(angka.length);

//For array
for (let i = 1; i <= angka.length; i++){
    console.log("Ini Adalah hasilnya",i)
}

// Method ForEach
angka.forEach(coba => {
    console.log("mencoba forEach",coba)
});

//Cek Panjang Isi Object
let orang = {
    nama: "Reza",
    alamat: "Pamulang"
}
// console.log(orang.length) //undefined
console.log(orang.nama.length)

// Method Map
let number = [1,3,5,8,10];
let number1 = number.map((x) => x * 2)
console.log(number1)

// Function 
// let lemparDadu = Math.floor(Math.random() * 10) + 1
// console.log(mtk)

// //Function Return
// function lemparDadu(){
//     return Math.floor(Math.random() * 10) + 1
// }

// let hasil = lemparDadu()
// console.log(hasil)

// Function Console.log
// function lemparDadu(){
//     console.log(Math.floor(Math.random() * 10) + 1)
// }

// lemparDadu()

// Arrow function
// let lemparDadu = () => {
//     console.log(Math.floor(Math.random() * 10) + 1)
// }

// lemparDadu()

// Parameter Dan Argument
let sayHello = (name, aktivitas) => {
    console.log(`Hello ${name} Selamat Pagi!`)
    console.log(`Selamat Ber ${aktivitas}!`)
}

//Argument
// let Helo = sayHello("Xena", "Ngoding")
// console.log(Helo)

sayHello("Xena", "Ngoding")

// Function Multiple Parameter dan argument
// let perkalian = (x, y) => {
//     console.log(x * y)
// }

// perkalian(1,5)

// Default value Function
let perkalian = (x, y = 0) => {
    console.log(x * y)
}

perkalian(10)