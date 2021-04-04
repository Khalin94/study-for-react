// const로 선언하였지만 내장 함수를 통해 값을 추가하거나 뺄 수 있다.
// 하지만 이렇게 코딩 시 무결설을 위배하게 되므로 추천하지 않는다.
const arr2 = [];
arr2.push(1);
console.log(arr2);
arr2.splice(0,0,0);
console.log(arr2);
arr2.pop();
console.log(arr2);
const obj2 = {};
obj2['name'] = '내 이름';
console.log(obj2);
Object.assign(obj2, {name : '새 이름'});
console.log(obj2);
delete obj2.name;
console.log(obj2);

// 밑에 코드처럼 새로운 변수에 이전 값을 할당하는 방법을 사용하는 것이 좋다.
const obj = {
    name : '내 이름'
}
const newObj = {
    name : obj.name
}

console.log(newObj);