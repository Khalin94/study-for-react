function add(first, second){
    return first + second;
}
console.dir(add);

//익명 함수
var add = function(first, second){
    return first + second;
}
console.dir(add);

//화살표 함수
var add = (first, second) => {
    return first + second;
}

// 바로 결과값을 리턴하는 경우 중괄호를 생략하고 return을 생략할 수 있다.
var add = (first, second) => first + second;

var addAndMultiple = (first, second) => ({
    add :
        first + second,
    multiple :
        first * second
});
console.log(addAndMultiple(2, 3));

// 커링 시 함수 표현식
function addNumber(num){
    return function(value){
        return num + value;
    };
}

// 커링시 화살표 표현식
var addNumber = num => value => num + value;

//커링 함수 호출
console.log(addNumber(2)(3));
var a = addNumber(2);
var b = a(3);
console.log("curing : ", b);