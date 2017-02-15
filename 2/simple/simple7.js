// ex. 7.a: delete two specific functions using (cmd shift -, cmd +)
// ex. 7.b: add sayName2 with same params

const debug = true;

class Person {
    constructor(name) {
        this.type = 'Person';
        this.name = name;
    }

    funcToDelete() {
        console.log('hard working');
        console.log('hard working');
        console.log('hard working');
        console.log('hard working');
        console.log('hard working');
    }

    sayName(param1, param2) {
        console.log(this.name + param1 + param2);
        console.log('say name logic');
        console.log('say name logic');
        console.log('say name logic');
    }

    func2ToDelete() {
        console.log('hard working');
        console.log('hard working');
        console.log('hard working');
        console.log('hard working');
        console.log('hard working');
    }
}

let p = new Person('Sefi');
p.sayName();