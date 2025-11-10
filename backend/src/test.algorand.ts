import { getAlgorandClient } from "./services/algorand.service";
import dotenv from "dotenv";
dotenv.config();

const client = getAlgorandClient();

client.status().do()
  .then(s => console.log("Algorand TestNet status:", s))
  .catch(e => console.log("Algorand error:", e));
