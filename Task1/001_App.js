function Box(w, h, d, m) {
    this.width = w;
    this.height = h;
    this.depth = d;
    this.material = m;
}

Box.prototype.Volume = function () {
    return this.width * this.height * this.depth;
}


Box.prototype.toString = function () {
    return "Коробка M:" + this.material + " W:" + this.width + " H:" + this.height + "  D:" + this.depth + '<br>';
};


// метод для проверки равенства объектов
Box.prototype.equals = function (otherObj) {
    return (this.width === otherObj.width && this.height === otherObj.height && this.depth === otherObj.depth) && (this.material === otherObj.material);
};


let Box1 = new Box(100, 50, 50, 'Box1');
let Box2 = new Box(100, 50, 50, 'Box2');
let Box3 = new Box(100, 40, 50, 'Box3');

document.write(Box1.toString());
document.write("Объем коробки 1 " + Box1.Volume() + "<br />");
document.write(Box2.toString());
document.write("Объем коробки 2 " + Box2.Volume() + "<br />");
document.write(Box3.toString());
document.write("Объем коробки 2 " + Box3.Volume() + "<br />");


document.write("Box1 == Box2 -> " + Box1.equals(Box2) + '<br>');
document.write("Box1 == Box3 -> " + Box1.equals(Box3));