
// Loop on String

const nama = 'Arjuna';

// # "for" Loop
for(let i=0; i<nama.length; i++ ){
 console.log(nama[i]);
} 
   // result:
   // A
   // r
   // j
   // u
   // n
   // a
 
// # "for ...of" Loop
for(let item of nama){
 console.log(item);
}
   // result:
   // A
   // r
   // j
   // u
   // n
   // a

// # "for ...in" Loop
for(let item in nama){
 console.log(nama[item]);
}
   // result:
   // A
   // r
   // j
   // u
   // n
   // a

// "forEach" loop is not applicable for Loop on String, it is for Array only
// Loop String menggunakan forEach tidak bisa, karena forEach hanya untuk Array saja

// "do ...while" Loop

let i = 0;
do
{
 console.log(nama[i]);
 i++;
}
while(i < nama.length);

   // result:
   // A
   // r
   // j
   // u
   // n
   // a

// "while" Loop

let i = 0;
while(i<nama.length){
 console.log(nama[i]);
 i++;
}

   // result:
   // A
   // r
   // j
   // u
   // n
   // a

