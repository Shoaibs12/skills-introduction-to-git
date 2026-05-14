import { motion } from 'framer-motion';
import { ShoppingBag, Star, HelpCircle } from 'lucide-react';

const products = [
  { id: 1, name: "Handcrafted Necklace", shop: "Nagpur Gems", price: "₹1,200", image: "https://via.placeholder.com/150" },
  { id: 2, name: "Cotton Kurti", shop: "Desi Threads", price: "₹850", image: "https://via.placeholder.com/150" },
  { id: 3, name: "Leather Wallet", shop: "Vintage Goods", price: "₹450", image: "https://via.placeholder.com/150" },
  { id: 4, name: "Sunglasses", shop: "Style Shades", price: "₹600", image: "https://via.placeholder.com/150" },
];

export default function Home() {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-orange-100 rounded-xl p-8 text-center"
      >
        <h2 className="text-3xl font-bold text-orange-800 mb-2">Local Shops, Delivered Fast.</h2>
        <p className="text-orange-600">Support local Instagram vendors in Nagpur with ease.</p>
      </motion.section>

      {/* Featured Products */}
      <section>
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-2xl font-semibold flex items-center gap-2"><ShoppingBag className="w-6 h-6"/> Trending Products</h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {products.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-4 rounded shadow hover:shadow-md transition"
            >
              <img src={p.image} alt={p.name} className="w-full h-32 object-cover rounded mb-2" />
              <h4 className="font-medium text-gray-800">{p.name}</h4>
              <p className="text-xs text-gray-500 mb-2">By {p.shop}</p>
              <div className="flex justify-between items-center">
                <span className="font-bold text-orange-600">{p.price}</span>
                <button className="text-sm bg-gray-100 px-2 py-1 rounded hover:bg-gray-200">Add</button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Ratings & Help */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-6 rounded shadow flex flex-col items-center text-center">
          <Star className="w-10 h-10 text-yellow-500 mb-2" />
          <h4 className="font-bold mb-2">Rate Your Experience</h4>
          <p className="text-sm text-gray-600 mb-4">Leave feedback for your recent purchases to help vendors grow.</p>
          <button className="text-blue-600 font-medium hover:underline">Submit Feedback</button>
        </div>
        <div className="bg-white p-6 rounded shadow flex flex-col items-center text-center">
          <HelpCircle className="w-10 h-10 text-blue-500 mb-2" />
          <h4 className="font-bold mb-2">Need Help?</h4>
          <p className="text-sm text-gray-600 mb-4">Contact our support team for any issues with your orders or delivery.</p>
          <button className="text-blue-600 font-medium hover:underline">Get Support</button>
        </div>
      </section>
    </div>
  );
}
