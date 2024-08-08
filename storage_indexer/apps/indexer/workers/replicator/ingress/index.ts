import 'dotenv/config'
import nine, { UnimplementedNineServiceService } from '@nine/grpc'
import nineSever from './server'

const server = new nine.Server()
server.addService(UnimplementedNineServiceService.definition, nineSever)

const PORT = process.env.GRPC_PORT! || process.env.PORT! || '8089'

function main() {
    server.bindAsync(`0.0.0.0:${PORT}`, nine.ServerCredentials.createInsecure(), (error, port) => {
        if (error) {
            console.log("Error::", error)
            return
        }
        server.start()
        console.log("Server started on port::", port)
    })
}

main()