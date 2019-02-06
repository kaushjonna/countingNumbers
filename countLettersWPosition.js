
function countLetters (sentence){
  var input = sentence.split(' ').join('');
  output = {};
  var index = 0;

  for(var a of input) {
    output[a] = {"occurances": 0, "position": []};
  }

  for(var a of input) {
    output[a].occurances++;
    output[a].position.push(index);
    index++;
  }
  console.log(output);

}


console.log(countLetters("lighthouse in the house"));