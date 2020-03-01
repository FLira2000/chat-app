var express =  require("express");
var http =  require("http");

var app =  express();
var server = http.Server(app);

const PORT = 3366

app.get("/", function( req, res ){
    res.send("<h1> Hello Stranger! </h1>");
});

server.listen(PORT, function() {
    console.log("Watching in port " + PORT + ".");
});
