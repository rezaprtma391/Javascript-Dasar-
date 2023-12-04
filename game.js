// Game Tebak Tebakan angka
let maximal = parseInt(prompt("Masukan Nilai Maksimal!"))
while(!maximal){
    maximal = parseInt(prompt("Masukan Nilai Maksimal!"))
}

const targetNum = Math.floor(Math.random() * maximal) + 1
console.log(targetNum)

let guess = parseInt(prompt("Isi Tebakan Pertama kamu!"))
let percobaan = 1

while(parseInt(guess) !== targetNum) {
    if (guess > targetNum) {
        guess = parseInt(prompt("Tebakan Kamu Terlalu Tinggi, Tebak Lagi:"))
    }else{
        guess = parseInt(prompt("Tebakan Kamu Terlalu Rendah, Tebak Lagi:"))
    }
    percobaan++
}

alert(`Selamat Tebakan Anda Benar, Dengan Percobaan ${percobaan} Kali`)




