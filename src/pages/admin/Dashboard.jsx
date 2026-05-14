import { Users, IndianRupee, ShoppingCart, TrendingUp } from 'lucide-react';

export default function Dashboard() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-8 text-gray-800">Overview</h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow border-l-4 border-blue-500">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-500 text-sm">Total Sales</p>
              <h3 className="text-2xl font-bold">₹1,24,500</h3>
            </div>
            <IndianRupee className="text-blue-500 w-8 h-8 opacity-80" />
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow border-l-4 border-green-500">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-500 text-sm">Active Orders</p>
              <h3 className="text-2xl font-bold">42</h3>
            </div>
            <ShoppingCart className="text-green-500 w-8 h-8 opacity-80" />
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow border-l-4 border-purple-500">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-500 text-sm">Total Customers</p>
              <h3 className="text-2xl font-bold">892</h3>
            </div>
            <Users className="text-purple-500 w-8 h-8 opacity-80" />
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow border-l-4 border-orange-500">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-500 text-sm">Growth</p>
              <h3 className="text-2xl font-bold">+14%</h3>
            </div>
            <TrendingUp className="text-orange-500 w-8 h-8 opacity-80" />
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-bold mb-4 border-b pb-2">Recent Transactions</h3>
        <table className="w-full text-left">
          <thead>
            <tr className="text-gray-500 text-sm">
              <th className="pb-2">Order ID</th>
              <th className="pb-2">Customer</th>
              <th className="pb-2">Amount</th>
              <th className="pb-2">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
              <td className="py-3">#ORD-9821</td>
              <td className="py-3">Rahul Sharma</td>
              <td className="py-3">₹450</td>
              <td className="py-3"><span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">Pending</span></td>
            </tr>
            <tr className="border-t">
              <td className="py-3">#ORD-9820</td>
              <td className="py-3">Priya Patel</td>
              <td className="py-3">₹1,200</td>
              <td className="py-3"><span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Completed</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
