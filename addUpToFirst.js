function addUpToFirst(n){
  let sum = 0;
  for( let i=1; i<=n; i++){
    sum = sum + i;
  }
  return sum;
}

function addUpToSecond(n){
  return  (n * (n+1))/2
}

console.log(addUpToSecond(4));
