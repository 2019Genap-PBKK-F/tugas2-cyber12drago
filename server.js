var express = require('express');
var app = express();
const hostname = '10.199.13.253';
const port = 8019;

var GotoController = require('./controller')();

app.get("/",function(request, response)
{
    response.json({"Message":"Welcome"});
});
app.use("/api/mahasiswa", GotoController);

app.listen(port, function () {
    var message = "Server runnning on Port: " + port;
    console.log(message);
});

