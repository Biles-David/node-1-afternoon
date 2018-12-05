const express = require("express");
const {json} = require("body-parser");
const mc = require("./controllers/messages_controller")

const app = express();

app.use( json() )
app.use(express.static(__dirname + "/../public/build"))

app.post("/api/messages", mc.createMessage)
app.get("/api/messages", mc.readMessage)
app.put("/api/messages/:id", mc.updateMessage)
app.delete("/api/messages/:id", mc.deleteMessage)

app.listen(3001, () => {console.log("Listening")})
