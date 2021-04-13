import shallowEqual from 'shallow-equal';

const obj = { name : 'park'};
const myList = [1, 2, 3, obj];
const list1 = [1, 2, 3, obj];
const list2 = [1, 2, 3, { name : 'park'}];

console.log('myList === list1 : ', myList === list1);
console.log('shallowEquals(myList, list1) : ', shallowEqual(myList, list1));
console.log('shallowEqual(list1, list2) : ', shallowEqual(list1, list2));