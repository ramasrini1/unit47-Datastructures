const arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}];
const arr1 = [3, 6, 7, 8];

function extractValue(arr, name){
  let names = [];
  for( let i=0; i< arr.length; i++){
    names.push(arr[i].name);
  }
  return names;
}

console.log(extractValue(arr, "name"));



function extractValue1(arr, key){
  return arr.reduce(function(acc,next){
      acc.push(next[key]);
      return acc;
  },[]);
}
function addElements(arr1){
  return arr1.reduce(function(acc, next){
    console.log("acc " + acc);
    console.log("next " + next);
    return acc + next;
  });
}


console.log(extractValue1(arr, "name"));
console.log(addElements(arr1));
