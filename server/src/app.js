import express from "express";
import http from "http";
import socketIo from "socket.io";
import routes from "./routes";
import { determineHandValue } from "./modules/cards/hand";
import Card from "./modules/cards/card";
import { ACE, THREE, TWO } from "./modules/cards/value";
import { HEART } from "./modules/cards/suit";

const port = process.env.PORT || 4000;

const app = express();
app.use(routes);

const server = http.createServer(app);

const io = socketIo(server); // < Interesting!

const getApiAndEmit = async socket => {
  socket.emit("FromAPI", new Date()); // Emitting a new message. It will be consumed by the client
};

let interval;

server.listen(port, () => {
  console.log(`Listening on port ${port}`);

  // TODO: Remove debug stuff below.
  determineHandValue([
    new Card(ACE, HEART),
    new Card(THREE, HEART),
    new Card(TWO, HEART),
    new Card(TWO, HEART),
    new Card(THREE, HEART)
  ]);
});

io.on("connection", socket => {
  console.log("New client connected");
  if (interval) {
    clearInterval(interval);
  }
  interval = setInterval(() => getApiAndEmit(socket), 1000);

  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});
