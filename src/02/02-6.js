//es6 이전의 javascript
function Shape(x, y){
    this.name = 'Shape';
    this.move(x, y);
}

//static 함수를 선언
Shape.create = function(x, y){
    return new Shape(x, y);
};

//인스턴스 함수를 선언
Shape.prototype.move = function(x, y){
    this.x = x;
    this.y = y;
};
Shape.prototype.area = function(){
    return 0;
};
//인스턴스 함수를 선언하는 다른 방법
Shape.prototype = {
    move : function(x, y){
        this.x = x;
        this.y = y;
    },
    area : function(){
        return 0;
    }
};

var s = new Shape(0, 0);
var result = s.area();

console.log(result);

//Shape을 상속할 경우
function Circle(x, y, radius){
    Shape.call(this, x, y);
    this.name = 'circle';
    this.radius = radius;
}
Object.assign(Circle.prototype, Shape.prototype, {
    area : function() {
        return this.radius * this.radius;
    }
});
var c = new Circle(0,0,10);
var cResult = c.area();
console.log(cResult);