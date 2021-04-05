//es6 이전 javasciprt
/* var list = [0, 1];
var item1 = list[0];
var item2 = list[1];
var item3 = list[2] || -1;

console.log("items", item1, item2, item3);

var temp = item2;
item2 = item1;
item1 = temp;

console.log("swap : ", item1, item2, temp);
var obj = {
    key1 : 'one',
    key2 : 'two'
}

var key1 = obj.key1;
var key2 = obj.key2;
var key3 = obj.key3 || 'default key3 value';
var newKey1 = obj.key1;

console.log("keys : ", key1, key2, key3, newKey1);
 */

var list = [0, 1];
var [
    item1,
    item2,
    item3 = -1
] = list;

console.log("items \n", item1, item2, item3);

[item2, item1] = [item1, item2];
console.log("items \n", item1, item2);

var obj = {
    key1 : 'one',
    key2 : 'two'
}

var {
    key1 : newKey1,
    key2,
    key3 = 'default key3 value'
} = obj;

console.log("keys : \n", key2, key3, newKey1);
