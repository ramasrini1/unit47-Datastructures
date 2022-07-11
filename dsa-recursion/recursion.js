/** product: calculate the product of an array of numbers. */

function product(nums, i=0) {
  
  if ( i === nums.length) {
    return 1;
  }
  return nums[i] * product(nums, i+1 )

}

function sum(nums, i=0){
  if (i === nums.length){
    return 0;
  }
  return nums[i] + sum(nums, i+1)
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, i=0, max=0) {
  
  //console.log(" i " + i + " max " + max + " len of arr" + words.length);
  if( i === words.length){
    return max;
  }
 
  max = Math.max(words[i].length, max);
  
  return longest(words, i+1, max)

}

/** everyOther: return a string with every other letter. */

function everyOther(str, i=0, newStr="") {
  if ( i >= str.length){
    return newStr;
  }
  newStr += str.charAt(i);
  return everyOther(str, i+2, newStr);
}


function isPalindrome(str, i=0 ) {
  let leftIndex = i;
  let rightIndex = str.length - i - 1;
  if ( leftIndex >= rightIndex ){
    return true;
  }
  if ( str[leftIndex] !== str[rightIndex]){
    return false;
  }
 return isPalindrome(str, i+1)
}


/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, i=0) {
  if ( i >= arr.length){
    return -1;
  }
  if( arr[i] === val){
    return i;
  }
  return findIndex(arr, val, i+1);

}

/** revString: return a copy of a string, but in reverse. */

function revString(str, i=0, newStr="") {
  let len = str.length
  if ( i>= len){
    return newStr;
  }
  newStr += str[len-1-i];
  return revString(str, i+1, newStr);
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj ) {
  let temp = []
  let stringArr = []
  for (let key in obj) {
    
    if (typeof obj[key] === "string") {
      //temp.push(obj[key])
      stringArr.push(obj[key]);
    }
 
    if (typeof obj[key] === "object") {
      //temp.push(obj[key]);
      //console.log(temp)
      stringArr.push(...gatherStrings(obj[key]));
    }
  }
  return stringArr;
}


/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, low=0, high=arr.length) {
  let mid = Math.floor((high + low)/2)
  console.log("mid is " + mid);
  if ( val === arr[mid] ){
    console.log("found value")
    return mid;
  }
  if ( val > arr[mid]){
    //Go right
    return binarySearch(arr, val, mid + 1, high)
  } else if ( val < arr[mid]){
    return binarySearch(arr, val, low, mid-1);
  } else {
    // not found
    return -1;
  }

}

// // For testing
// if( isPalindrome("tacocat")){
//   console.log("true")
// } else {
//   console.log("false");
// }
// let animals = ["duck", "cat", "pony"];
// console.log(findIndex(animals, "cat") );
// console.log(findIndex(animals, "procupine") );

// console.log(revString("porcupine"));

// let nestedObj = {
//   firstName: "Lester",
//   favoriteNumber: 22,
//   moreData: {
//     lastName: "Testowitz"
//   },
//   funFacts: {
//     moreStuff: {
//       anotherNumber: 100,
//       deeplyNestedString: {
//         almostThere: {
//           success: "you made it!"
//         }
//       }
//     },
//     favoriteString: "nice!"
//   }
// };

// gatherStrings(nestedObj) 
// console.log(binarySearch([1,2,3,4], 5));
// console.log(gatherStrings(nestedObj) );


module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
