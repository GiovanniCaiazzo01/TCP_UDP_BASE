import net from "net";
import Networker from "./networker.js";

const socket = net.createConnection({ port: 8000, host: "localhost" });

socket.on("connect", () => {
  let networker = new Networker(socket, (data) => {
    console.log("received:", data.toString());
  });
  networker.init();
  networker.send("Hi Server!");
});
