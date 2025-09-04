export default function Dashboard() {
  return (
    <div className="p-6 bg-gray-50 min-h-[calc(100vh-4rem)]">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-semibold text-indigo-600 mb-6">
          Dashboard
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white shadow rounded-lg p-5 border border-gray-100 hover:shadow-md transition">
            <h2 className="text-lg font-medium text-gray-700 mb-2">
              Current Balance
            </h2>
            <p className="text-2xl font-bold text-indigo-500">₹0.00</p>
          </div>

          <div className="bg-white shadow rounded-lg p-5 border border-gray-100 hover:shadow-md transition">
            <h2 className="text-lg font-medium text-gray-700 mb-2">
              Recent Transactions
            </h2>
            <p className="text-gray-500 text-sm">No transactions yet.</p>
          </div>

          <div className="bg-white shadow rounded-lg p-5 border border-gray-100 hover:shadow-md transition">
            <h2 className="text-lg font-medium text-gray-700 mb-2">
              Quick Action
            </h2>
            <button className="mt-2 inline-flex items-center justify-center bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm px-4 py-2 rounded-md transition">
              + Add Money
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
