// ex. 3.a: console log as in goal
//         approach 1: alt+j from :
//         approach 2: multiline edit mode

const data = {
    key: 'value1',
    otherKey: 'value2',
    someSpecialKey: 'value1'
};

/* goal
 const data = {
   key: {innerKey: 'value1'},
   otherKey: {innerKey: 'value2'},
   someSpecialKey: {innerKey: 'value1'}
 };
 */

// ex. 3.b: console log as in goal
//         approach 1: alt+j from :, copy within alt + j
//         approach 2: multiline edit mode

const data = {
    key: {innerKey: 'value1'},
    otherKey: {innerKey: 'value2'},
    someSpecialKey: {innerKey: 'value1'}
};

/* goal
 console.log(data.key.innerKey);
 console.log(data.otherKey.innerKey);
 console.log(data.someSpecialKey.innerKey);
 */