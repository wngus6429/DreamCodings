/** @format */

class shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }
  draw() {
    console.log(`drawing ${this.color} color of`);
  }
  getArea() {
    return this.width * this.height;
  }
}

class Rectangle extends shape {}
class Triangle extends shape {
  draw() {
    super.draw();
    console.log("삼각형"); //결과4
  }
  getArea() {
    //덮어쓰기 오버라이딩
    return (this.width * this.height) / 2;
  }
}
//extends 해서 상속

const rectangle = new Rectangle(20, 20, "blue");
rectangle.draw(); //결과1
console.log(rectangle.getArea()); //결과2
const Tr = new Triangle(20, 20, "black");
Tr.draw(); //결과3
console.log(Tr.getArea()); //결과5
