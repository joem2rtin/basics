const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question('Sisestage oma nimi? ', nimi => {
  readline.question('Sisestage lubatud kiirus (km/h) ', lubatud_kiirus => {
    readline.question('Sisestage tegelik kiirus(km/h) ', tegelik_kiirus => {
let yletatud= parseInt(tegelik_kiirus) - parseInt(lubatud_kiirus)
let arvutatudTrahv= yletatud * 3.0
let tegelikTrahv= Math.min(190, arvutatudTrahv) 
    console.log(nimi+ ', kiiruse yletamise eest on teie trahv ' + tegelikTrahv +` eurot.`);
    readline.close();
  })
     })
});