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