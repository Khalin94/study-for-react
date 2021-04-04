// es6 이전 javascript
// var string1 = '안녕하세요';
// var string2 = '반갑습니다.';
// var greeting = string1 + ' ' + string2;
// var product = {
//     name : '도서',
//     price : '4200원'
// }
// var message = '제품' + product.name + '의 가격은 ' + product.price + '입니다.';

// var multiLine = '문자열 \n 문자열2';
// var value1 = 1;
// var value2 = 2;
// var boolValue = false;
// var operator1 = '곱셈 값은 ' + (value1 * value2) + '입니다.';
// var operator2 = '불린 값은 ' + (boolValue ? '참' : '거짓') + '입니다.';

// es6 javascript
// 백틱(`)과 ${}을 사용해서 변수를 표현할 수 있다.
var string1 = '안녕하세요';
var string2 = '반갑습니다.';
var greeting = `${string1} ${string2}`;
var product = {
    name : '도서',
    price : '4200원',
}
var message = `제품 : ${product.name}의 가격은 ${product.price}입니다.`;
var multiLine = `문자열1
문자열2`;
var value1 = 1;
var value2 = 2;
var boolValue = false;
var operator1 = `곱셈 값은 ${value1 * value2}입니다.`;
var operator2 = `불린 값은 ${boolValue ? '참' : '거짓'}입니다.`;

console.log('greeting : ', greeting);
console.log('message : ', message);
console.log('multiLine : ' + multiLine);
console.log('operator1 : ' + operator1);
console.log('operator2 : ', operator2);

var cart = { name : '도서', price : 1500};
var getTotal = function(cart){
    return cart.price + '원';
}
var myCart = '장바구니에 ' + cart.name + '가 있습니다. 총 금액은 ' + getTotal(cart) + '입니다.';

console.log(myCart);

var cart2 = { name : '도서', price : 2000};
var getTotal2 = (cart2) => {
    return `${cart2.price}원`;
}
var myCart2  = `장바구니에 ${cart2.name}가 있습니다. 총 금액은 ${getTotal2(cart2)}입니다.`;
console.log(myCart2);
