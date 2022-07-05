function reverse(str){
  let result = '';
  for (let i=str.length -1; i>=0; i-- ){
    result += str[i]
  }
  return result;
}

console.log(reverse("chicken"));

function reverse2(str){
  //"chicken".split(''); //Gives array ['c', 'h', 'i', 'c', 'k', 'e', 'n']
  // reverse array using reverse method of array and join on empty string to 
  //return a string
  return str.split('').reverse().join('');
}

console.log(reverse2("chicken"));