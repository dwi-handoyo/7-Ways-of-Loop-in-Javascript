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


