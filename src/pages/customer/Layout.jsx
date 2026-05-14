import { Outlet, Link } from 'react-router-dom';

export default function CustomerLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white shadow p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-orange-600"><Link to="/">Nagpur Deliveries</Link></h1>
        <nav className="space-x-4">
          <Link to="/" className="text-gray-600 hover:text-black">Home</Link>
          <Link to="/orders" className="text-gray-600 hover:text-black">Orders</Link>
          <Link to="/profile" className="text-gray-600 hover:text-black">Profile</Link>
          <Link to="/login" className="text-blue-600 hover:text-blue-800">Login</Link>
        </nav>
      </header>
      <main className="flex-1 p-4">
        <Outlet />
      </main>
      <footer className="bg-gray-800 text-white text-center p-4">
        &copy; 2025 Nagpur Deliveries
      </footer>
    </div>
  );
}
