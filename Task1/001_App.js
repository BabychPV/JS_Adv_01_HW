function Star(c) {
    this.color = c;
    let internalcolor = 'green';

    this.SetInternalColor = function (c) {
        internalcolor = c;
    };

    this.GetInternalColor = function () {
       return internalcolor;
    };
}


Star.prototype.GetColor = function () {
    return this.color;
}

Star.prototype.toString = function () {
    return "Star is" + this.color;
};


let Star1 = new Star('Yellow');


document.write(Star1.toString() + "<br />");
document.write("Star color " + Star1.GetColor() + "<br />");
document.write("Star internal color " + Star1.GetInternalColor() + "<br />");
Star1.SetInternalColor('Black');
document.write("Star internal color " + Star1.GetInternalColor() + "<br />");
