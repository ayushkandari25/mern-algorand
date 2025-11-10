import { Router } from "express";
import { sendTxn, getTxnStatus, getAllTxns  } from "../controllers/algorand.controller";

const router = Router();

router.post("/send", sendTxn);
router.get("/status/:txId", getTxnStatus);
router.get("/transactions", getAllTxns);


export default router;
