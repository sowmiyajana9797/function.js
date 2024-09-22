// javascript function task :

// Do the below programs in anonymous function & named function & function declaration 

// ●	Print odd numbers in an array
// ●	Sum of all numbers in an array
// ●	Return all the prime numbers in an array




// Function declaration:

function oddnum(array) {
    for (let i of array )
 {
     if (i % 2 ==1) {
         console.log(i)
     }
 }}
 let num = [1,2,3,4,5,6,7,8,9,10];
 oddnum(num);

// output
// 1
// 3
// 5
// 7
// 9

// named function:

let name = function named (array) {
    return`hai; ${array}` ;
};
console.log (name ("sowmiya"));

// output

// hai; sowmiya

// Anonyomus function

let named = function () {
    let numbers = [21, 22, 23, 24, 25, 26, 27, 28, 29, 30];

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            console.log(numbers[i]); 
        }
    }
};

named(); 

// output

// 22
// 24
// 26
// 28
// 30

// Do the below programs in arrow function & llFE

// ●	Print odd numbers in an array
// ●	Sum of all numbers in an array
// ●	Return all the prime numbers in an array


// Arrow Function

const oddnumber= (num) =>{
    for (let i=0; i < num.length; i++) {
        if (num[i] % 2 == 0) {
            console.log(num[i]);
        }
    }
}

let number =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
oddnumber(number);


// output
// 2
// 4
// 6
// 8
// 10
// 12
// 14
// 16
// 18
// 20

const sumArray = (arr) => {
    let sum = 0;
    for (let num of arr) {
        sum += num;
    }
     return sum;
};
  const numbersb = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
  console.log(sumArray(numbersb));

//  output
//  210

const theprime = (num) => {
    if (num < 2) return 0; 
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return 0; 
    }
    return 1; 
};

const getPrimes = (arr) => {
    let primes = [];
    for (let i = 0; i < arr.length; i++) {
        if (theprime(arr[i])) {
            primes[primes.length] = arr[i]; 
        }
    }
    return primes;
};

const numbers = [1,2,3,4,5,6,7,8,9,10];
console.log(getPrimes(numbers));

// output
// [ 2, 3, 5, 7 ]