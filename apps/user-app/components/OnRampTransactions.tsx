import { Card } from "@repo/ui/card";

export const OnRampTransactions = ({
  transactions,
}: {
  transactions: {
    time: Date;
    amount: number;
    status: "success" | "failed" | "pending" | string; // type narrowed slightly
    provider: string;
  }[];
}) => {
  if (!transactions.length) {
    return (
      <Card title="🧾 Recent Transactions">
        <div className="text-center text-gray-500 py-8 text-sm">
          No recent transactions.
        </div>
      </Card>
    );
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "success":
        return "text-green-600";
      case "failed":
        return "text-red-500";
      case "pending":
        return "text-yellow-500";
      default:
        return "text-gray-600";
    }
  };

  return (
    <Card title="🧾 Recent Transactions">
      <div className="pt-2 space-y-4">
        {transactions.map((t, index) => (
          <div
            key={index}
            className="flex justify-between items-center border-b pb-2 last:border-b-0"
          >
            <div>
              <div className="text-sm font-medium text-gray-700">
                {t.provider}
              </div>
              <div className="text-xs text-gray-500">
                {t.time.toLocaleString()}
              </div>
            </div>

            <div className="text-right">
              <div className="text-base font-semibold text-blue-600">
                + ₹{(t.amount / 100).toFixed(2)}
              </div>
              <div
                className={`text-xs font-medium ${getStatusColor(t.status)}`}
              >
                {t.status.toUpperCase()}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};
