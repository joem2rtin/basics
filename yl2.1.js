const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question('Sisestage ohutemperatuur? ', ohutemeratuur => {
  if (ohutemeratuur > 4.0) {
  ekraan = "Ei ole jaatumise ohtu";
} else if (ohutemeratuur < 4.0) {
  ekraan = "On jaatumise oht";
}
      console.log( ekraan);
    readline.close();
  })
