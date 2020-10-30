function HumanSort(arr,sort){

    document.write('Not sort' + '<br>')

    document.write(arr.join(', '));

    document.write('Is sort' + '<br>')

    document.write(arr.sort(function(a,b){ return (sort===0 ? a.age-b.age: b.age-a.age) }).join(', '));


}

function Human(name, age) {
    this.age = age;
    this.name = name;
}


Human.prototype.toString = function () {
    return "Name -" + this.name + ' age - ' + this.age + '<br/>';
};

let HumanFactory = function () {

    let objectArray = [];

    for (let i = 0; i < 10; i++) {
        objectArray[i] = new Human('Pavel_' + i, RandomInRange(10, 59));
    }

    return objectArray;
};

function RandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

HumanSort(HumanFactory(),+prompt('Set sort desc - 1 or asc - 0 ',1))