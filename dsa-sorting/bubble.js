function bubbleSort(arr) {
  let swap;
  for ( let i=0; i<arr.length; i++){
    swap = false;
    for (let j=0; j<arr.length-i; j++){
      if (arr[j+1] < arr[j]){
        //swap
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
        swap = true;
      }
    }
    if ( swap === false) {return arr}
  }
  return arr;

}
//console.log(bubbleSort([11,10,3,7,9]));

module.exports = bubbleSort;