function sortedFrequency(arr, num){
  let i = firstOccur(arr, num);
  if ( i === -1) {
    return i;
  }
  let j= findLast(arr, num);
  console.log("i " + i + " j: " + j);
  return j - i + 1;
}

function firstOccur(arr, num, low=0, high=arr.length-1){
  if ( high >= low ){
    let mid = low + Math.floor(high - low)/2;
    if (( mid === 0 || arr[mid -1] < num) && arr[mid] === num ){
      return mid;
    }
    else if ( arr[mid] < num ){
      // go forward
      return firstOccur(arr, num, mid +1, high )
    }
    else {
      return firstOccur(arr, num, low, mid -1 );
    }
  }
  return -1;
}

function findLast(arr, num, low = 0, high = arr.length - 1) {
  if (high >= low) {
    let mid = Math.floor((low + high) / 2)
    if ((mid === arr.length - 1 || num < arr[mid + 1]) && arr[mid] === num) {
      return mid;
    } else if (num < arr[mid]) {
      return findLast(arr, num, low, mid - 1)
    } else {
      return findLast(arr, num, mid + 1, high)
    }
  }
  return -1
}


module.exports = sortedFrequency