import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

export default function SendTransactionForm() {
  return (
    <Card className="max-w-md mx-auto mt-10 p-6 shadow-lg">
      <CardHeader>
        <h2 className="text-xl font-bold">Send ALGO Transaction</h2>
      </CardHeader>
      <CardContent className="space-y-4">
        <Input placeholder="Recipient Address" />
        <Input placeholder="Mnemonic" />
        <Input placeholder="Amount (e.g., 0.1)" />
        <Button className="w-full">Send Transaction</Button>
      </CardContent>
    </Card>
  );
}
