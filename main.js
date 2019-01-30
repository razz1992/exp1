const express = require('express');
const app = express();
const basicAuth = require('express-basic-auth')
const os = require('os');

var port = 5000
port = process.env.PORT || port

// Loggger
function log(x) {
    console.log(x ?  x : 'Empty logger')  
  } 


app.get('/', (req, res) => {
    res.send('An alligator approaches!');
    log( "New request GET / at " + Date.now() )
});
 
app.use(basicAuth({
    users: { 'admin': 'supersecret' }
}))
app.get('/machinedetails', (req, res) => {
   var machDetails = {}
    machDetails = {
        osArchitecture: os.arch(),
        cpus : os.cpus(),
        osHostName: os.hostname(),
        networkInterfaces: os.networkInterfaces()
    }
        
    res.send(machDetails );
    log( "New request GET /machinedetails  at " + Date.now() )
});



app.listen(port, () => log('app listening on port ', port));
