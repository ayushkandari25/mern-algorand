import React, { useState } from "react";
import axios from "axios";
import { Card, CardHeader, CardContent } from "@/components/ui/card.js";
import { Input } from "@/components/ui/input.js";
import { Button } from "@/components/ui/button.js";

export default function SendTransactionForm() {
  const [recipient, setRecipient] = useState<string>("");
  const [mnemonic, setMnemonic] = useState<string>("");
  const [amount, setAmount] = useState<string>("");
  const [txId, setTxId] = useState<string>("");
  const [status, setStatus] = useState<string>("");

  const backendURL = import.meta.env.VITE_BACKEND_URL;

  const handleSend = async () => {
    try {
      setStatus("Pending...");
      const response = await axios.post(`${backendURL}/api/algorand/send`, {
        to: recipient,
        mnemonic,
        amount: parseFloat(amount),
      });
      setTxId(response.data.txId);

      const statusResponse = await axios.get(
        `${backendURL}/api/algorand/status/${response.data.txId}`
      );
      setStatus(statusResponse.data.status);
    } catch (error: any) {
      console.error(error);
      setStatus("Error sending transaction");
    }
  };

  return (
    <Card className="max-w-md mx-auto mt-10 p-6 shadow-lg">
      <CardHeader>
        <h2 className="text-xl font-bold">Send ALGO Transaction</h2>
      </CardHeader>
      <CardContent className="space-y-4">
        <Input
          placeholder="Recipient Address"
          value={recipient}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setRecipient(e.target.value)
          }
        />
        <Input
          placeholder="Mnemonic"
          value={mnemonic}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setMnemonic(e.target.value)
          }
        />
        <Input
          placeholder="Amount (e.g., 0.1)"
          value={amount}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setAmount(e.target.value)
          }
        />
        <Button className="w-full" onClick={handleSend}>
          Send Transaction
        </Button>
        {txId && <p>Transaction ID: {txId}</p>}
        {status && <p>Status: {status}</p>}
      </CardContent>
    </Card>
  );
}
