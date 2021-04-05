// es6 이전 javascript
/* var x = 0;
var y = 0;
var obj = {
    x : x,
    y : y
}


var randomKeyString = 'other';
var combined = {};
combined['one' + randomKeyString] = 'some value';


var obj2 = {
    x : x,
    methodA : function() {
        console.log('method A');
    },
    methodB : function() {
        return 0;
    }
} */
// es6 부터 적용된 객체 확장 표현식
var x =0;
var y = 0;
var obj = {
    x,
    y
}

var randomKeyString = 'other';
var combined = {
    ['one' + randomKeyString] : 'some Value',
}

var obj2 = {
    x,
    methodA(){
        console.log("method A");
    },
    methodB(){
        return 0;
    }
}

console.log("obj", obj);
console.log(combined);
console.log(obj.x);
console.log(obj2.methodA());
console.log(obj2.methodB());