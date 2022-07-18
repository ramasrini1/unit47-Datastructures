//let arr1 = [1,3,4,5];
//let arr2 = [2,4,6,8];
//merge(arr1,arr2) // [1,2,3,4,4,5,6,8]

function merge(arr1, arr2) {
  let j=0;
  let i=0;
  let arr = [];
 
  while ( i<arr1.length && j< arr2.length){
    if ( arr1[i]< arr2[j]){
      arr.push(arr1[i]);
      i++;
    } else {
      arr.push(arr2[j])
      j++
    } 
  }
  while ( i< arr1.length){
    arr.push(arr1[i]);
    i++
  }
  while ( j< arr2.length){
    arr.push(arr2[j]);
    j++
  }
  return arr;
}

function mergeSort(arr) {
  //base case
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

// let arr1 = [1,3,4,5];
// let arr2 = [2,4,6,8];
// let arr3 = [-2,-1,0,4,5,6];
// let arr4 = [-3,-2,-1,2,3,5,7,8];
// console.log(merge(arr3, arr4)) // [1,2,3,4,4,5,6,8]

module.exports = { merge, mergeSort};