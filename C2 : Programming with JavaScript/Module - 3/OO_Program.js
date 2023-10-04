// Task 1: Code a Person class
class Person{
    constructor(name, age, energy) {
        this.name = name;
        this.age = age;
        this.energy = energy;
    }
    sleep() {
        this.energy += 10;
    }
    doSomethingFun() {
        this.energy -= 10;
    }
}

// Task 2: Code a Worker class
class Worker extends Person{
    constructor(xp = 0, hourlywage = 10, name, age, energy) {
        super(name, age, energy);
        this.xp = xp;
        this.hourlywage = hourlywage;
    }
    sleep() {
        super.sleep();
    }
    doSomethingFun() {
        super.doSomethingFun();
    }
    goToWork() {
        this.xp += 10;
    }
}

// Task 3: Code an intern object, run methods
function intern() {
    var intern = new Worker();
    intern.name = "Bob";
    intern.age = 21;
    intern.energy = 110;
    intern.xp = 0;
    intern.hourlywage = 10;
    intern.goToWork();
    return intern;
}

// Task 4: Code a manager object, methods
function manager() {
    var manager = new Worker();
    manager.name = "Alice";
    manager.age = 30;
    manager.energy = 120;
    manager.xp = 100;
    manager.hourlywage = 30;
    manager.doSomethingFun();
    return manager
}
console.log(intern());
console.log(manager());
