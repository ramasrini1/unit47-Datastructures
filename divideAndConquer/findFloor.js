function findFloor(arr, num){
  let low = 0;
  let high = arr.length - 1;
  let res  = -1;
  while ( low <= high){
    let mid = Math.floor((high + low)/2);
    if (arr[mid] === num ){
      return arr[mid];
    }
    if ( arr[mid] > num ){
      //Go left
      high = mid - 1;
    } else {
      //Go right
      low = mid + 1;

      res = arr[mid]

    }
  }
  return res;
}

module.exports = findFloor



// //let x = findFloor([1,2,8,10,10,12,19], 20)
// let x = findFloor([1,2,8,10,10,12,19], 0);
// //let x = findFloor([1,2,8,10,10,12,19], 9);
// console.log(x);