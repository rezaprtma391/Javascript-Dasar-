// // Method ForEach
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// numbers.forEach(function (number) {
//   console.log(`Number: ${number}`);
// });

// // Object In Array

let movies = [
  {
    title: "The Shawshank Redemption",
    director: "Frank Darabont",
    nilai: 87,
  },
  {
    title: "The Saw",
    director: "Muhamad Reza Pratama",
    nilai: 84,
  },
  {
    title: "The Saw",
    director: "Muhamad Reza Pratama",
    nilai: 89,
  },
  {
    title: "The Saw",
    director: "Muhamad Reza Pratama",
    nilai: 83,
  },
  {
    title: "The Saw",
    director: "Muhamad Reza Pratama",
    nilai: 80,
  },
  {
    title: "The Saw",
    director: "Muhamad Reza Pratama",
    nilai: 81,
  },
  {
    title: "The Saw",
    director: "Muhamad Reza Pratama",
    nilai: 82,
  },
  {
    title: "The Saw",
    director: "Muhamad Reza Pratama",
    nilai: 87,
  },
  {
    title: "The Saw",
    director: "Muhamad Reza Pratama",
    nilai: 95,
  },
];

// Method Filter
let movie = movies.filter((film) => {
  return film.nilai >= 85;
});

console.log(movie);

let movies2 = movies.filter((film) => {
  return film.nilai < 85;
});

console.log(movies2)

// movies.forEach(function (movie) {
//   console.log(`Title: ${movie.title} Director: ${movie.director}`);
// });

// Method Map
// let siswa = ["Reza", "Fathir", "Dandi", "Rafka"];

// // Method map, Membuat data array baru dari array yang lama
// let capsSiswa = siswa.map(function (data) {
//   return data.toUpperCase();
// });

// console.log(siswa);
// console.log(capsSiswa);

// // Map
// let angka = [1,2,3,4,5,6,7,8,9,10]

// let angkaDouble = angka.map(function(data){
//     return data * 2;
// })

// console.log(angka)
// console.log(angkaDouble)

// // Method String To Array
// let namaLengkap = "Muhamad Reza Pratama"
// let arrNamaLengkap = namaLengkap.split(" ")
// console.log(arrNamaLengkap)
