const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question('Sisestage ainepunktide arv? ', ainepunktide_arv => {
  readline.question('Sisestage nädalate arv? ', nädalate_arv => {
let ajakulu= parseInt(ainepunktide_arv) * 26
let ajakulu2= parseInt(ajakulu)/(nädalate_arv)
let ajakulu3= Math.round(ajakulu2)
    console.log(ajakulu3);
    readline.close();
  })
});

