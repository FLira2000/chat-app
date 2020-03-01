var express =  require("express");
var http =  require("http");

var app =  express();
var server = http.Server(app);
var io =  require ("socket.io")(server);

const PORT = 3366

app.get("/", function( req, res ){
    res.sendFile(__dirname + "/html/index/index.html");
});

app.get("/index.css", function( req, res ){
    res.sendFile(__dirname + "/html/index/index.css");
});


server.listen(PORT, function() {
    console.log("Watching in port " + PORT + ".");
});

io.on("connection", function(socket){
    console.log("A user has connected! ");
    socket.on("disconnect", function(){
        console.log("A user has disconnected! ");
    })
})