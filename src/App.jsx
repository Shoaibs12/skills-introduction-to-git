import { Routes, Route } from 'react-router-dom';
import CustomerLayout from './pages/customer/Layout';
import Login from './pages/customer/Login';
import Home from './pages/customer/Home';
import Orders from './pages/customer/Orders';
import Profile from './pages/customer/Profile';

import AdminLayout from './pages/admin/Layout';
import AdminDashboard from './pages/admin/Dashboard';
import AdminProducts from './pages/admin/Products';
import AdminCustomers from './pages/admin/Customers';

import DeliveryLayout from './pages/delivery/Layout';
import DeliveryDashboard from './pages/delivery/Dashboard';

function App() {
  return (
    <Routes>
      <Route path="/" element={<CustomerLayout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="orders" element={<Orders />} />
        <Route path="profile" element={<Profile />} />
      </Route>

      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<AdminDashboard />} />
        <Route path="products" element={<AdminProducts />} />
        <Route path="customers" element={<AdminCustomers />} />
      </Route>

      <Route path="/delivery" element={<DeliveryLayout />}>
        <Route index element={<DeliveryDashboard />} />
      </Route>
    </Routes>
  );
}

export default App;
