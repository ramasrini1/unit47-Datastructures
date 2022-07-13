/**************
 * How to use maps
 * Maps are key value pairs
 */

// How to create a map 
// Method 1
const map1 = new Map();

map1.set('0', 'foo');
map1.set(1, 'bar');

//Method 2 through array initialization
const map2 = new Map([
  ["apples" , 500],
  ["bananas", 600],
  ["oranges", 300]
])

//How to get an element from a map use the key to retrieve
console.log(map1.get('1'));

// How to set an element
map1.set('2', 'milk');

//How to delete an element
console.log(map1.delete('2'));
// expected result: true
// (true indicates successful removal)

console.log(map1.has('2'));
// expected result: false

//The keys a new iterator object that contains the keys for each element 
//in the Map object in insertion order
for (let [key, value] of map1.entries()) {
  console.log("key: " + key + "values: " + value);
}


for (let key of map2.keys()){
  console.log("key of map2 " + key);
}