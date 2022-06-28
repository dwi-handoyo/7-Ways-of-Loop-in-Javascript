# 7-Ways-of-Loop-in-Javascript

There are seven ways to perform loop in javascript. Loop is applicable in array, string, and node list. 

1. while

   Loops through a block of code while a specified condition is true. 

   let i = 0;
   while (i < 3) {
      console.log(i);
      i++;
   }
   // output: 1 2 3

2. do while

   Loops through a block of code while a specified condition is true.

   let i = 0;
   do {
      i += 1;
      console.log(i);
   } while (i < 5)
   // output: 1 2 3 4 5 

3. for

   Loops through a block of code a number of times.
   
   for(let i = 0; i < 10; i++){
      console.log(i)
   }
   // output: 1 2 3 4 5 6 7 8 9 10

4. for … in

   Loops through the properties of an object. for ...in loop return the keys of array.
   
   let arr = ["Apple", "Pear", "Cucumber"];
   
   for (let x in arr) {
       console.log(arr[x]);
   }
   // output: Apple Pear Cucumber

5. for … of

   Loops through the values of an iterable object. for ...of loop return the values of array.
   
   const arr = [3, 5, 7];
   // Set arr.foo
   arr.foo = 'hello';

   // For ... in loop returns keys (0, 1, 2, 3)
   for (let i in arr) {
    console.log(i); // output: "0", "1", "2", "foo"  
   }

   // For ... of loop returns values (3, 5, 7)
   for (let i of arr) {
     console.log(i); // output: 3, 5, 7
   }
   // For ... of will not show 'foo'

6. forEach

   An Array method that executes a custom callback function on each item in an array. The forEach loop can only be used on Arrays, Sets, and Maps.

   let arr = [1, 2, 3, 4]
   arr.forEach((item, index) => {
     console.log(item)
   })
   //output: 1 2 3 4

7. Recursive

   A function that calls itself until something (base case) stops it.

   function loop(loopsLeft){
      if(loopsLeft > 0){              // this is the base case
        console.log(loopsLeft)
      loop(loopsLeft - 1)
      } else {
        return true; 
      }
   }

   loop(5); // output: 5 4 3 2 1
