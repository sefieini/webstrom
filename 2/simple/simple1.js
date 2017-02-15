// ex. 1.a: rename var before => after
// ex. 1.b: rename var name => after with comment (two options)


function a() {
    // before holds the number 1
    const before = 1;
    console.log(before);
}

// ex. 1.c: move to goal
log = (str) => console.log(str);
const data = some_string;
/*
 const data = log('some_string');
 */



// ex. 1.d: format parts of the code

if (true) {
console.log('indent');
console.log('indent');
console.log('indent');
}

if (true) {
console.log('do not indent');
console.log('do not indent');
console.log('do not indent');
}

/* goal
 if (true) {
   console.log('indent');
   console.log('indent');
   console.log('indent');
 }

 if (true) {
 console.log('do not indent');
 console.log('do not indent');
 console.log('do not indent');
 }
 */
