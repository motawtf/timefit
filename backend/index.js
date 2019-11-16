const express = require('express')
const app = express();

const PORT = process.env.PORT || 4000;

app.set('port', PORT);

app.get('/', (req, res) => {
  res.send('Hola Timefit!');
});

app.listen(PORT, () => {
  console.log(`[INFO] Timefit lanzado en el puerto ${PORT}`);
});