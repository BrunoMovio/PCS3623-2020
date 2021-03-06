import dotenv from "dotenv"
import {AddressInfo} from "net"
import express from "express"
import {userRouter} from "./routes/UserRouter";
import { groupRouter } from "./routes/GroupRouter";
import { postRouter } from "./routes/PostRouter";
import { eventRouter } from "./routes/EventRouter";
import { pageRouter } from "./routes/PageRouter";

dotenv.config();

const cors = require('cors')
const app = express();
app.use(cors())
app.use(express.json());

app.use("/user", userRouter);
app.use("/group", groupRouter);
app.use("/post", postRouter);
app.use("/pageEvent", eventRouter);
app.use("/page", pageRouter);

const server = app.listen(process.env.PORT || 5000, () => {
  if (server) {
    const address = server.address() as AddressInfo
    console.log(`Servidor rodando em http://localhost:${address.port}`)
  } else {
    console.error(`Falha ao rodar o servidor.`)
  }
});