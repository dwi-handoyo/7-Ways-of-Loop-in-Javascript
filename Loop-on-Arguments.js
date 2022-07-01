
// 1. Pengertian Arguments

function jumlahkanAngka() { // function () maka nilai parameter akan masuk ke arguments - by default, silakan cek console.log
 console.log(arguments) 
}

jumlahkanAngka(1, 2, 3, 4, 5); //parameternya akan ditangkap oleh arguments pada function jumlahAngka()
//outputnya berupa arguments, bukan array:
//Arguments(5) [1, 2, 3, 4, 5, callee: ƒ, Symbol(Symbol.iterator): ƒ]
//0: 1
//1: 2
//2: 3
//3: 4
//4: 5

//sementara kalau Array:
const arr = [1, 2, 3, 4, 5];
console.log(arr);
//outputnya berupa array:
//(5) [1, 2, 3, 4, 5]
//0: 1
//1: 2
//2: 3
//3: 4
//4: 5

// 2. Loop on Arguments

// Spread operator (...)
function sumTwo(...args){
  let sum = 0;
  for(const arg of args){
    sum += arg;
  }
  return sum;
}

let hsl = sumTwo(5, 6);
console.log(hsl);

//output:
// 11

// Rest parameter (...)
function sumThree(a, b, ...args){
  let multi = a * b;
  let sum = 0;
  
  for(const arg of args){
     sum += arg;
  }
  return [sum, multi];
}

console.log(sumThree(3, 5, 7, 6, 8));

// output:
// [21, 15]

// Spread Operator
function sumAll(...args){
 sum = 0;
 for(let arg of args){
  sum += arg; 
 }
 return sum; 
}

console.log(sumAll(1,2,3,4,5,6));
// output:
// 21






