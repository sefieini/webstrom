// ex. 4.a: console log as in goal (add the first key from the inner object to console)
//         approach 1: copy multiline edit mode, paste in alt + j

const data = {
    key: {firstKey: 'value1', key: 'value'},
    otherKey: {otherKeyFirstKey: 'value2', key2: 'value2'},
    someSpecialKey: {innerKeyFirstKey: 'value1', key3: 'value3'}
};

console.log(data.key);
// now logging other keys
if (data) {
    console.log(data.otherKey);
    if (data.someSpecialKey) {
        console.log(data.someSpecialKey);
    }
}

/* goal
 console.log(data.key.firstKey);
 // now logging other keys
 if (data) {
   console.log(data.otherKey.otherKeyFirstKey);
   if (data.someSpecialKey) {
     console.log(data.someSpecialKey.innerKeyFirstKey);
   }
 }
*/
