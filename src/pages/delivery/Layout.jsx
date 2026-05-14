import { Outlet } from 'react-router-dom';

export default function DeliveryLayout() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-green-600 text-white p-4 shadow-md flex justify-between">
        <h1 className="text-xl font-bold">Delivery Portal</h1>
        <div className="flex items-center space-x-2">
          <span className="h-3 w-3 bg-green-300 rounded-full inline-block animate-pulse"></span>
          <span>Online</span>
        </div>
      </header>
      <main className="flex-1 p-4 max-w-4xl mx-auto w-full">
        <Outlet />
      </main>
    </div>
  );
}
