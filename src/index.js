module.exports = function multiply(first, second) {
  let string1 = first.split('').reverse().join('');
  let string2 = second.split('').reverse().join('');
  let multipliers = [];

  for(let i=0; i<string1.length; i++) {
    for(let j=0; j<string2.length; j++) {
      let elem = string1[i]*string2[j];
      (multipliers[i+j])? multipliers[i+j] += elem : multipliers[i+j] = elem;
    }
  }

  for(let i=0; i<multipliers.length; i++) {
    let remainder = multipliers[i]%10; 
      let change = Math.floor(multipliers[i]/10);
      if(change >= 1) {
        multipliers[i] = remainder;
        if(multipliers[i+1]) {
          multipliers[i+1] += change;
        }
        else {
          multipliers[i+1] = change;
        }
      }
  }

  return multipliers.reverse().join('');
} 