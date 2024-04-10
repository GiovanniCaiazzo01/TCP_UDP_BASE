import net from "net"

const tcpServer = net.createServer( socket =>  {
    socket.write("hello")
    socket.on("data", data => {
        console.log(data.toString())
    })
})

tcpServer.listen(8080)
