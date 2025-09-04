"use client";

import { Button } from "@repo/ui/button";
import { Card } from "@repo/ui/card";
import { Center } from "@repo/ui/center";
import { TextInput } from "@repo/ui/textinput";
import { useState } from "react";
import { p2pTransfer } from "../app/lib/actions/p2ptransfer";

export function SendCard() {
  const [number, setNumber] = useState("");
  const [amount, setAmount] = useState("");

  return (
    <div className="h-[90vh] flex items-center justify-center bg-gray-50">
      <Center>
        <Card title="📤 Send Money">
          <div className="min-w-80 space-y-4 pt-2">
            <TextInput
              placeholder="Enter recipient's number"
              label="Recipient Number"
              onChange={(value) => setNumber(value)}
            />
            <TextInput
              placeholder="Enter amount in INR"
              label="Amount (INR)"
              onChange={(value) => setAmount(value)}
            />
            <div className="pt-4 flex justify-center">
              <Button
                onClick={async () => {
                  await p2pTransfer(number, Number(amount) * 100);
                }}
              >
                🚀 Send
              </Button>
            </div>
          </div>
        </Card>
      </Center>
    </div>
  );
}
