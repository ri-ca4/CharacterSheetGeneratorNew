const express = require('express');
const app = express();

app.use(express.static('public'));

app.listen(process.env.PORT || 5000, () => {
    console.log(`App listening on port 5000`)
   })