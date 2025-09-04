"use client";
import { Button } from "@repo/ui/button";
import { Card } from "@repo/ui/card";
import { Select } from "@repo/ui/select";
import { useState } from "react";
import { TextInput } from "@repo/ui/textinput";
import { createOnRampTransaction } from "../app/lib/actions/createOnRamptxn";

const SUPPORTED_BANKS = [
  {
    name: "HDFC Bank",
    redirectUrl: "https://netbanking.hdfcbank.com",
  },
  {
    name: "Axis Bank",
    redirectUrl: "https://www.axisbank.com/",
  },
];

export const AddMoney = () => {
  const [redirectUrl, setRedirectUrl] = useState(
    SUPPORTED_BANKS[0]?.redirectUrl
  );
  const [amount, setAmount] = useState(0);
  const [provider, setProvider] = useState(SUPPORTED_BANKS[0]?.name || "");

  return (
    <Card title="💰 Add Money to Wallet">
      <div className="w-full space-y-6">
        <TextInput
          label={"Enter Amount (₹)"}
          placeholder={"e.g. 500"}
          onChange={(value) => setAmount(Number(value))}
        />

        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Select Bank
          </label>
          <Select
            onSelect={(value) => {
              const selectedBank = SUPPORTED_BANKS.find(
                (x) => x.name === value
              );
              setRedirectUrl(selectedBank?.redirectUrl || "");
              setProvider(selectedBank?.name || "");
            }}
            options={SUPPORTED_BANKS.map((x) => ({
              key: x.name,
              value: x.name,
            }))}
          />
        </div>

        <div className="pt-4 flex justify-center">
          <Button
            onClick={async () => {
              await createOnRampTransaction(provider, amount);
              window.location.href = redirectUrl || "";
            }}
          >
            ➕ Add Money
          </Button>
        </div>
      </div>
    </Card>
  );
};
