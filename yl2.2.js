const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question('Sisestage Leedu perekonnanimi? ', nimi => {
  let result
  if (nimi.slice(-2)=="ne" || nimi.slice(-2) =="te" ) {
  if (nimi.slice(-2)== "ne")
    result= 'Abielus'

} else if(nimi.slice(-2)== "te") {
  result = "Vallaline";
}
 else if(nimi.slice(-1)=="e") {
  result = "Määramata";
}
 else  {
  result = "Pole Leedukas";
}
      console.log( result);
    readline.close();
  })
