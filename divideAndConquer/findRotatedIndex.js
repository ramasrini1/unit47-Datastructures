//[6, 7, 8, 9, 1, 2, 3, 4]
//const arr = [6, 7, 8, 9, 1, 2, 3, 4];

function findRotatedIndex(array, num){
  let pivot = findPivot(array)
  if ( pivot === 0){
    return -1;
  }
  console.log("pivot is " + pivot);
  //if num is between 0 and pivot - 1 index
  if ( num >= array[0] && num <= array[pivot -1 ]) {
    return binarySearch(array, num, 0, pivot - 1);
  } else {
    return binarySearch(array, num, pivot, array.length - 1);
  }
}

function findPivot(arr){
  // No pivot return 0
  if (arr.length === 1 || arr[0] < arr[arr.length - 1]) return 0;

  let start = 0;
  let end = arr.length - 1;

  while ( end >= start ){
    //Find mid
    let mid = Math.floor((end + start)/2);
    if ( arr[mid + 1 ] < arr[mid] ){ //Pivot point
      return mid + 1;
    }
    //Which dir to iterate?
    if( arr[start] < arr[mid]){
      // Move right of pivot, values to the left are increasing consecutivelly
      start = mid + 1;
    } else {
      end = mid -1;
    }
  }
}

function binarySearch(array, num, start, end ){
  if (array.length === 0) return -1;
  if (num < array[start] || num > array[end]) return -1;

  while ( end >= start){
    let mid = Math.floor((end + start)/2);
    if ( array[mid] === num){
      return mid;
    } else if ( array[mid] < num){
      //Go right
      start = mid + 1;
    } else {
      //left conditions
      end = mid - 1;
    }
  }
  return -1;
}

module.exports =  findRotatedIndex;

// function binarySearch(array, num, start, end) {
//   if (array.length === 0) return -1;
//   if (num < array[start] || num > array[end]) return -1;

//   while (start <= end) {
//     var mid = Math.floor((start + end) / 2);
//     if (array[mid] === num) {
//       return mid;
//     } else if (num < array[mid]) {
//       end = mid - 1;
//     } else {
//       start = mid + 1;
//     }
//   }
//   return -1;
// }


//console.log(findRotatedIndex([3,4,1,2],4) );
//console.log(findRotatedIndex([37,44,66,102,10,22],14));