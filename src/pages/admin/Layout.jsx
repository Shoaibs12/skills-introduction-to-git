import { Outlet, Link } from 'react-router-dom';

export default function AdminLayout() {
  return (
    <div className="min-h-screen flex">
      <aside className="w-64 bg-gray-900 text-white p-4">
        <h2 className="text-xl font-bold mb-6">Admin Panel</h2>
        <nav className="flex flex-col space-y-2">
          <Link to="/admin" className="p-2 hover:bg-gray-700 rounded">Dashboard</Link>
          <Link to="/admin/products" className="p-2 hover:bg-gray-700 rounded">Products</Link>
          <Link to="/admin/customers" className="p-2 hover:bg-gray-700 rounded">Customers</Link>
        </nav>
      </aside>
      <main className="flex-1 bg-gray-100 p-8">
        <Outlet />
      </main>
    </div>
  );
}
