const prompt = require('prompt-sync')({sigint: true})

// Input num
const num = prompt('Input num: ');

if (num < 0) { // Jika angka yang diinput < 0
    console.log('Input must be a positive num!');
} else if (num % 2 != 0) { // Jika angka yang diinput adalah ganjil
    console.log('Input must be an even num!');
} else { // Jika angka yang diinput adalah genap dan bilangan positif
    num_sqrt = Math.sqrt(num)
    console.log('The square root of '+num+' is '+num_sqrt.toFixed(2))
}
