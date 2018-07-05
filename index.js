const theBeatlesPlay = (musicians, instruments) => {
  
  var theBand = [];
  
  for (var i = 0, l = musicians.length; i < l; i++) {
    var artist = musicians[i];
    theBand.push(`${artist} plays ${instruments[i]}`);
  }
  
  return theBand;
};

const johnLennonFacts = (facts) => {
  
  var hardTruth = [];
  let i = 0;
  
  while (i < facts.length) {
    let fact = facts[i];
    i++;
    hardTruth.push(fact + '!!!');
  }
  
  return hardTruth;
};

const iLoveTheBeatles = (n) => {
  
  var love = [];
  let i = 0;
  
  do {
    love.push('I love the Beatles!');
  } while (n < 15) {
    i++;
  }
  
  return love;
};