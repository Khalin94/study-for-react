// var array1 = ['one', 'two'];
// var array2 = ['three', 'four'];
// var combined = [array1[0], array1[1], array2[0], array2[1]];
// var combined2 = array1.concat(array2);
// var combined3 = [].concat(array1, array2);

// var first = array1[0];
// var seconed = array1[1];
// var three = array1[2] || 'empty';
// function func(){
//     var args = Array.prototype.slice.call(this, arguments);
//     var first = args[0];
//     var other = args.slice(1, args.length);
//     console.log(`first : ${first}`);
//     console.log(`other : ${other}`);
// }
var array1 = ['one', 'two'];
var array2 = ['three', 'four'];
var combined = [...array1, ...array2];
const [first, second, three = 'empty', ...other] = array1;
// func(...args)
// { 
//     var [first, ...other] = args
// }


console.log(`combined : ${combined}`);
// console.log(`combined2 : ${combined2}`);
// console.log(`combined3 : ${combined3}`);
//console.log(`func() : ${func(array1)}`);