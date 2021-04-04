/*
var objectOne = {
    one : 1,
    two : 2,
    other : 0,
}

var objectTwo = {
    three : 3,
    four : 4,
    other : -1
}

var combined = {
    one : objectOne.one,
    two : objectOne.two,
    three : objectTwo.three,
    four : objectTwo.four
};
console.log(combined);

var combined2 = Object.assign({}, objectOne, objectTwo);
console.log(combined2);

var combined3 = Object.assign({}, objectTwo, objectOne);
console.log(combined3);
var others = Object.assign({}, combined2);
console.log(others);

delete others.other;
console.log(others);
*/

var objectOne = {
    one : 1,
    two : 2,
    other : 0
}

var objectTwo = {
    three : 3,
    four : 4,
    other : -1
}

var combined = {
    ...objectOne,
    ...objectTwo
}
console.log('combined : ', combined);

var combined2 = {
    ...objectTwo,
    ...objectOne
}
console.log('combined2 : ', combined2);

var {other, ...others} = combined2;
console.log('other : ', other);
console.log('others : ', others);