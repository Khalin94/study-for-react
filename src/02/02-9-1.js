function parse(qs){
    const queryString = qs.substr(1);
    const chunks = queryString.split("&");

    let result = {};

    chunks.forEach((chunk) => {
        /* const parts = chunk.split('=');
        const key = parts[0];
        const value = Number.isNaN(Number(parts[1])) ? parts[1] : Number(parts[1]);
 */        
        // 구조분해할당으로 더 간결하게 만들기
        const [key, value] = chunk.split('=');
        result[key] = value;
    });

    return result;
}

const qs = "banana=10&apple=20&orange=30";

console.log(parse(qs));
var forVar = parse(qs);
console.log("forEach type : ", typeof forVar);

function parseToMap(qs){
    const queryString =qs.substr(0);
    const chunks = queryString.split("&");
    const result = chunks.map((chunk) => {
        const [key, value] = chunk.split("=");
        return {
            key : key,
            value : value
        }
    });
    return result;
}

var a = parseToMap(qs);
console.log(a[0].key);
console.log(parseToMap(qs));
console.log("map type : ", typeof a);

function sum(number){
    //reduce의 파라미터에는 첫번째 파라미터에는 (total, num) => total +num 변환함수가 두번째 인자 0에는 초기값이 들어간다.
    // 변환 함수의 첫번째 파라미터에 이전 결과 값이 두번 째 파라미터에 배열의 요소값이 들어간다.
    return number.reduce((total, num) => total + num, 0);
}
console.log(sum([1,2,3,4,5]));
var mapVar = sum([1,2,3,4,5,6,6,7,7,8]);
console.log("map type : ", typeof mapVar);
// map, reduce를 사용하여 배열 -> 객체로 만들기
function parseArrayToObj(qs){
    const queryString = qs.substr(0);
    const chunks = queryString.split("&");
    return chunks.map((chunk) =>{
        const [key, value] = chunk.split("=");
        return {
            key, value
        };
    }).reduce((result, item) => {
        result[item.key] = item.value;
        return result;
    }, {}); 
}

console.log(parseArrayToObj(qs));
var atoVar = parseArrayToObj(qs);
console.log("map type2 : ", typeof atoVar);