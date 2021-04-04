class MyClass{
    value = 10;

    //콜백 함수의 this범위로 생기는 오류를 피하기 위해 bind함수를 사용한다.
    addThis1 = function(first, second){
        return this.value + first + second;
    }.bind(this);

    // 화살표 함수는 bind를 사용하여 this객체를 전달하는 과정을 포함하고 있다.
    addThis2 = (first, second) => this.value + first + second;
}

var a = new MyClass();
console.log(a.addThis1(1, 1));
console.log(a.addThis2(2, 2));