function Human(name, age, preferences, likeEat, likeTimeSleep) {
    this.age = age;
    this.name = name;
    this.preferences = preferences;
    this.likeEat = likeEat;
    this.likeTimeSleep = likeTimeSleep;
}


Human.prototype.Sleeping = function () {
    document.write('I eat a ' + this.likeTimeSleep + '<br>')
}

Human.prototype.Eating = function () {
    document.write('I eat a ' + this.likeEat + '<br>')
}

Human.prototype.Interesting = function () {
    document.write('I eat a ' + this.preferences + '<br>')
}


Human.prototype.toString = function () {
    return "Name -" + this.name + '; age - ' + this.age + '; preferences - ' + this.preferences + '; likeEat - ' + this.likeEat + '; likeTimeSleep - ' + this.likeTimeSleep + '<br/>';
};

let Human_1 = new Human('Pavel_1', 25,'read book', 'макорошки)', '20-9');
let Human_2 = new Human('Pavel_2', 26,'play game', 'пелемешки))', '22-8');

document.write(Human_1);
document.write(Human_2);

Human_1.Sleeping();
Human_1.Eating();
Human_1.Interesting();

Human_2.Sleeping();
Human_2.Eating();
Human_2.Interesting();


