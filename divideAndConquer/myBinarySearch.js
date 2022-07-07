function myBinarySearch(arr, val){
  let length = arr.length;
  let mid = 0;
  let start = 0;
  let end = length -1 ;
  
  console.log( `start: ${start} j: ${end} `);

  while ( start <= end ){
    let range = (end + start)/2;
    mid =  Math.floor(range);
    console.log("mid is " + mid)
    
    if (arr[mid] === val ){
      return mid;
    }
    
    else if ( arr[mid] > val){
      //left half
      end = mid - 1;
    }
    else {
      //right half
      start = mid + 1 ;
    } 
  }
  return -1;
}

let arr = [5,6,8,9,10,11,12, 13];
console.log(myBinarySearch(arr, 15));