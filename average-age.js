function averageAge(characters) {
  let totalAge = 0;
  let count = 0;

  for (let age of Object.values(characters)) {
    totalAge += age;
    count++;
  }

  return totalAge / count;
}
  
  const emblemCharacters = {
    Alear: 17,
    Vander: 52,
    Saphir: 35,
    Ivy: 23,
    Alcryst: 16,
    Fogado: 20
  };
  
  const avgAge = averageAge(emblemCharacters);
  console.log(avgAge); 

