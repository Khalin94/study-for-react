var [item, ...otherItems] = [0, 1, 2];
var {key1, ...otherKeys} = {
    key1 : 'one',
    key2 : 'two'
};

console.log("item : ", item);
console.log("otherItems : ", otherItems);
console.log("key1 : ", key1);
console.log("otherKeys : ", otherKeys);