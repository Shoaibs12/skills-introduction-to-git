import { motion } from 'framer-motion';

export default function Login() {
  return (
    <div className="flex items-center justify-center min-h-[80vh]">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full"
      >
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Welcome Back</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-1">Email</label>
            <input type="email" className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500" placeholder="you@example.com" />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Password</label>
            <input type="password" className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500" placeholder="••••••••" />
          </div>
          <button type="button" className="w-full bg-orange-600 text-white font-bold py-2 px-4 rounded hover:bg-orange-700 transition">
            Login
          </button>
        </form>
        <p className="text-center mt-4 text-sm text-gray-600">
          Don't have an account? <a href="#" className="text-orange-600 hover:underline">Sign up</a>
        </p>
      </motion.div>
    </div>
  );
}
