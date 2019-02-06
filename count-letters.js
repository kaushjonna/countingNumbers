var counter = {};
function countLetters (sentence){
  for(var a of sentence){
    if(a != " "){
      if(counter[a] === undefined){
        counter[a] = 0;
      }
      counter[a] += 1;
    }
  }
  return counter;
}


console.log(countLetters("lighthouse in the house"));