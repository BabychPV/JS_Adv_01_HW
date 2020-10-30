function Human(name, age, preferences, likeEat, likeTimeSleep) {
    this.age = age;
    this.name = name;
    this.preferences = preferences;
    this.likeEat = likeEat;
    this.likeTimeSleep = likeTimeSleep;
}

Human.prototype.toString = function () {
    return "Name -" + this.name + '; age - ' + this.age + '; preferences - ' + this.preferences + '; likeEat - ' + this.likeEat + '; likeTimeSleep - ' + this.likeTimeSleep + '<br/>';
};

let Human_1 = new Human('Pavel_1', 25,'read book', 'макорошки)', '20-9');


document.write(Human_1.toString());


