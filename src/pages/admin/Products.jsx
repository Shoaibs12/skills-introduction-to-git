import { Plus, Image as ImageIcon } from 'lucide-react';

export default function Products() {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Product Management</h2>
        <button className="bg-gray-900 text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-gray-800 transition">
          <Plus className="w-4 h-4" /> Add Product
        </button>
      </div>

      <div className="bg-white p-6 rounded-lg shadow max-w-2xl">
        <h3 className="text-lg font-bold mb-4 border-b pb-2">Add New Product</h3>
        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-600 mb-1">Product Name</label>
              <input type="text" className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300" placeholder="e.g. Cotton Kurti" />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">Price (₹)</label>
              <input type="number" className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300" placeholder="0" />
            </div>
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">Description</label>
            <textarea className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300 h-24" placeholder="Product details..."></textarea>
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">Sizes (comma separated)</label>
            <input type="text" className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300" placeholder="S, M, L, XL" />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-2">Product Image</label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 flex flex-col items-center justify-center text-gray-500 hover:bg-gray-50 cursor-pointer transition">
              <ImageIcon className="w-8 h-8 mb-2" />
              <span className="text-sm">Click to upload image</span>
            </div>
          </div>

          <button type="button" className="w-full bg-blue-600 text-white font-bold py-2 rounded hover:bg-blue-700 transition">
            Save Product
          </button>
        </form>
      </div>
    </div>
  );
}
