import { motion } from 'framer-motion';
import { Package, Truck, CheckCircle } from 'lucide-react';

const orders = [
  { id: "ORD-9821", shop: "Vintage Goods", item: "Leather Wallet", status: "In Transit", date: "Today, 10:30 AM", step: 2 },
  { id: "ORD-9810", shop: "Desi Threads", item: "Cotton Kurti", status: "Delivered", date: "Yesterday", step: 3 },
];

export default function Orders() {
  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <h2 className="text-2xl font-bold">Your Orders</h2>

      {orders.map((order, i) => (
        <motion.div
          key={order.id}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.1 }}
          className="bg-white p-6 rounded-lg shadow"
        >
          <div className="flex justify-between items-center mb-4 border-b pb-4">
            <div>
              <span className="text-sm text-gray-500">Order #{order.id}</span>
              <h3 className="font-bold text-lg">{order.item}</h3>
              <p className="text-sm text-gray-600">from {order.shop}</p>
            </div>
            <div className="text-right">
              <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${order.step === 3 ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}`}>
                {order.status}
              </span>
              <p className="text-xs text-gray-500 mt-1">{order.date}</p>
            </div>
          </div>

          {/* Progress Tracker */}
          <div className="relative flex justify-between items-center px-4">
            <div className="absolute top-1/2 left-4 right-4 h-1 bg-gray-200 -z-10 transform -translate-y-1/2"></div>
            <div className={`absolute top-1/2 left-4 h-1 bg-orange-500 -z-10 transform -translate-y-1/2 transition-all duration-500`} style={{ width: `${(order.step / 3) * 100}%` }}></div>

            <div className="flex flex-col items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${order.step >= 1 ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-400'}`}>
                <Package className="w-4 h-4" />
              </div>
              <span className="text-xs mt-1 font-medium">Packed</span>
            </div>

            <div className="flex flex-col items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${order.step >= 2 ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-400'}`}>
                <Truck className="w-4 h-4" />
              </div>
              <span className="text-xs mt-1 font-medium">In Transit</span>
            </div>

            <div className="flex flex-col items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${order.step >= 3 ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-400'}`}>
                <CheckCircle className="w-4 h-4" />
              </div>
              <span className="text-xs mt-1 font-medium">Delivered</span>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
