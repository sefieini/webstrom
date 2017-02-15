// ex. 2.a: extract method report all possibilities
// ex. 2.b: add message to extract block and see what happen

const debug = true;

class Person {
    constructor(name) {
        this.type = 'Person';
        this.name = name;
    }

    sayName() {
        let message = this.type + ': ' + this.name;
        // start extract
        if (debug) {
            console.log(message);
        }
        //  end extract
    }
}

let p = new Person('Sefi');
p.sayName();