const express = require('express');
const app = express();


// Loggger
function log(x) {
    console.log(x ?  x : 'Empty logger')  
  } 


app.get('/', (req, res) => {
    res.send('An alligator approaches!');
    log( "New request at" + Date.now() )
});

app.listen(3000, () => log('app listening on port 3000!'));