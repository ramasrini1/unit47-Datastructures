function countZeros(arr, low, high){
  let firstZeroIndex = firstZeros(arr)
  if ( firstZeroIndex === -1 ){
    return 0;
  }
  return arr.length - firstZeroIndex;
}

//Big(O) = logn
function firstZeros(arr, low=0, high=arr.length-1){

  if ( high >= low ){
    let mid = low + Math.floor((high-low)/2);
    console.log(`start ${low} end: ${high}`);
    if( (mid === 0 || arr[mid -1] === 1) && arr[mid] === 0){
      return mid;
    }

    if ( arr[mid] === 1) { 
      // if mid is not zero go forward
      low = mid + 1;
      return firstZeros(arr, low, high);
    }
    else {
      // If mid element is 0, but not first 0 
      high = mid - 1;
      return firstZeros(arr, low, high);
    }
  }
  return -1;
}

//Big(O)= n
function countZeros2(arr) {
  let count = 0;
  for( let i=0; i<arr.length; i++){
    if(arr[i] === 0){
      count++;
    }
  }
  return count
}
// console.log(countZeros([1,0,0,0,0])) // 4
// console.log(countZeros2([1,0,0,0,0]))

module.exports = countZeros