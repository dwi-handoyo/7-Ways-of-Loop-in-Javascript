// Loop On Array

// Loop by using "for", "forEach", and "for ...of" 

// Array extracted from HTML list:

// <ul>
// <li class="nama">Arjuna</li>
// <li class="nama">Nakula</li>
// <li class="nama">Sadewa</li>
// </ul>

// 1# Way - "for" Loop 

const mhs = ['Arjuna', 'Nakula', 'Sadewa'];

for (let i = 0; i < mhs.length; i++) {
  console.log(mhs[i]); 
}

     // Result:
     // Arjuna
     // Nakula
     // Sadewa

// #2 Way - "forEach" Loop

mhs.forEach(m => console.log(m)); 
//forEach() calls a function for each element in an array:

     // Arjuna
     // Nakula
     // Sadewa

// Indeks (i) in a loop using forEach

mhs.forEach((m, i) => {
 console.log(`${m} adalah mahasiswa ke-${i + 1}`);
}); 

    // Result: 
    // Arjuna adalah mahasiswa ke-1
    // Nakula adalah mahasiswa ke-2
    // Sadewa adalah mahasiswa ke-3

let arr = [2,1,3,6,4,9,2,4,7,8,5];

let arr1 = [];

arr.forEach( function(m){
 if(m>4){
  return arr1.push(m); 
 }
});

console.log(arr1);

    // Result: [6, 9, 7, 8, 5]

// #3 Way - "for ...of" Loop 

for (const m of mhs) {
  console.log(m);
}

     // Result:
     // Arjuna
     // Nakula
     // Sadewa

// Indeks (i) in a loop using "for..of"

for (const m of mhs.entries()){
 console.log(m);
}

     // Result:
     // (2) [0, 'Arjuna']
     // (2) [1, 'Nakula']
     // (2) [2, 'Sadewa']

for (const [i, m] of mhs.entries()) {
 console.log(`${m} adalah mahasiswa ke-${i + 1}`);
}

    // Result:
    // Arjuna adalah mahasiswa ke-1

    // Nakula adalah mahasiswa ke-2
    // Sadewa adalah mahasiswa ke-3

const mhs = ['Arjuna', 'Nakula', 'Sadewa'];

// #4 Way - "for ...in" Loop

// for ...in loop will return array index
for(let item in mhs){
 console.log(item);
}
    // output: 
    // 0 
    // 1 
    // 2 

// to return array values, apply this
for(let item in mhs){
 console.log(mhs[item]);
}
    // output:
    // Arjuna
    // Nakula
    // Sadewa

for(let item in mhs){
 console.log(`${mhs[item]} adalah mahasiswa ke-${item * 1 + 1}`); // multiply by "1" first to make it integer, or:
 // console.log (`${mhs[item]} adalah mahasiswa ke-${parseInt(item) + 1}`);
}
    // output:
    // Arjuna adalah mahasiswa ke-1"
    // Nakula adalah mahasiswa ke-2"
    // Sadewa adalah mahasiswa ke-3"


