const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question('Sisestage kirja suurus ', suurus => {
  readline.question('Sisestage kirja teema pealkiri ', pealkiri => {
    readline.question('Kas kirjaga on kaasas fail ("jah/ei")', fail => {

if (fail== "jah")
  result= "Kiri ei ole spamm"

else if (fail=="ei")
  result= "Kiri on spamm"

          console.log(result)
    readline.close();
  })
    })
});
