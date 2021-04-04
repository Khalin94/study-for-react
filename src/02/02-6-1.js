class Shape{
    //class 내에서는 생성자, 클래스 변수, 클래스 함수 정의에 변수선언 키워드(var, let, const)를 사용하지 않는다.
    static create(x, y){
        return new Shape(x, y);
    }
    name = 'Shape';
    constructor(x, y){
        this.move(x, y);
    }
    move(x, y){
        this.x = x;
        this.y = y;
    }
    area(){
        return 0;
    }
}
var s = new Shape(0, 0);
var result = s.area();
console.log(result);

class Circle extends Shape{
    constructor(x, y, radius){
        super(x, y);
        this.radius = radius;
    }

    area(){
        if(this.radius === 0){
            return super.area();
        }
        return this.radius * this.radius;
    }
}

var c = new Circle(0,0,10);
var cResult = c.area();
console.log(cResult);