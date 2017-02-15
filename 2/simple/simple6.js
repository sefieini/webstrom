// ex. 6.a: fold everything but your function (cmd shift -, cmd +)

const debug = true;

class Person {
    constructor(name) {
        this.type = 'Person';
        this.name = name;
    }

    func() {
        console.log(this.name);
    }

    func1() {
        console.log(this.name);
    }

    func2() {
        console.log(this.name);
    }

    func3() {
        console.log(this.name);
    }

    func4() {
        // doing some not very interesting hard work
        if (this.type) {
            // unfocus this
            console.log('non-important hard working');
            console.log('non-important hard working');
            console.log('non-important hard working');
            console.log('non-important hard working');
            console.log('non-important hard working');
        }
        console.log('non-important hard working');
    }

    sayName() {
        if (this.type) {
            console.log('important hard working');
            console.log('important hard working');
            console.log('important hard working');
            console.log('important hard working');
            console.log('important hard working');
        }
        // focus here
        if (true) {
            console.log(this.name);
        }

    }
}

let p = new Person('Sefi');
p.sayName();