const express = require("express");
const app = express();
const path = require("path");
const publicPath = path.resolve(__dirname, "./public");
app.use(express.static(publicPath));
app.listen(3000, function(){
    "servidor levantado en el puerto 3000"
});

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "/views/home.html"))
})