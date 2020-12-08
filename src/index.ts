import dotenv from "dotenv"
import {AddressInfo} from "net"
import express from "express"
import {imageRouter} from "./routes/ImageRouter";
import {musicRouter} from "./routes/MusicRouter";
import {userRouter} from "./routes/UserRouter";

dotenv.config();
const app = express();

app.use(express.json());

app.use("/user", userRouter);
app.use('/image', imageRouter);
app.use('/music', musicRouter);

const server = app.listen(3000, () => {
  if (server) {
    const address = server.address() as AddressInfo
    console.log(`Servidor rodando em http://localhost:${address.port}`)
  } else {
    console.error(`Falha ao rodar o servidor.`)
  }
});