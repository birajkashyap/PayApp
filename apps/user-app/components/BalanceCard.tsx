import { Card } from "@repo/ui/card";

export const BalanceCard = ({
  amount,
  locked,
}: {
  amount: number;
  locked: number;
}) => {
  const total = amount + locked;

  return (
    <Card title="💼 Wallet Balance">
      <div className="space-y-4 pt-2 text-sm text-gray-700">
        <div className="flex justify-between">
          <span className="font-medium">Unlocked Balance</span>
          <span className="text-green-600 font-semibold">
            {(amount / 100).toFixed(2)} INR
          </span>
        </div>

        <div className="flex justify-between">
          <span className="font-medium">Locked Balance</span>
          <span className="text-yellow-600 font-semibold">
            {(locked / 100).toFixed(2)} INR
          </span>
        </div>

        <div className="flex justify-between border-t pt-4 mt-2 border-gray-300 text-base">
          <span className="font-semibold">Total Balance</span>
          <span className="text-blue-700 font-bold">
            {(total / 100).toFixed(2)} INR
          </span>
        </div>
      </div>
    </Card>
  );
};
