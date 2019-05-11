const app = require('express')(); 
const port = process.env.PORT || 3000; 
app.get('/', function (req, res) { 
    res.sendfile(__dirname + '/index.html'); 
}); 
app.listen(port, function() { 
    console.log("Node app is running at localhost:" + app.get('port')) 
}); 