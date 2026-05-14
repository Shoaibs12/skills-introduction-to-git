import { MapPin, Navigation, Clock, CheckCircle } from 'lucide-react';

const activeDeliveries = [
  { id: "DL-482", order: "ORD-9821", address: "Dharampeth, Nagpur", distance: "2.4 km", time: "15 mins", status: "Pickup" },
  { id: "DL-483", order: "ORD-9815", address: "Sitabuldi, Nagpur", distance: "4.1 km", time: "25 mins", status: "In Transit" },
];

export default function DeliveryDashboard() {
  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-lg shadow text-center">
          <p className="text-gray-500 text-sm">Today's Deliveries</p>
          <h3 className="text-2xl font-bold text-green-600">14</h3>
        </div>
        <div className="bg-white p-4 rounded-lg shadow text-center">
          <p className="text-gray-500 text-sm">Active Now</p>
          <h3 className="text-2xl font-bold text-orange-500">2</h3>
        </div>
        <div className="bg-white p-4 rounded-lg shadow text-center">
          <p className="text-gray-500 text-sm">Earnings</p>
          <h3 className="text-2xl font-bold text-gray-800">₹450</h3>
        </div>
      </div>

      <h2 className="text-xl font-bold text-gray-800 border-b pb-2">Active Deliveries (Real-time)</h2>

      <div className="space-y-4">
        {activeDeliveries.map(d => (
          <div key={d.id} className="bg-white p-5 rounded-lg shadow flex flex-col md:flex-row md:items-center justify-between border-l-4 border-green-500">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="font-bold text-lg">{d.order}</span>
                <span className={`text-xs px-2 py-1 rounded-full ${d.status === 'Pickup' ? 'bg-orange-100 text-orange-800' : 'bg-blue-100 text-blue-800'}`}>
                  {d.status}
                </span>
              </div>
              <p className="text-gray-600 flex items-center gap-1"><MapPin className="w-4 h-4" /> {d.address}</p>
            </div>

            <div className="mt-4 md:mt-0 flex gap-4">
              <div className="text-center bg-gray-50 p-2 rounded">
                <p className="text-xs text-gray-500 flex items-center justify-center gap-1"><Navigation className="w-3 h-3"/> Distance</p>
                <span className="font-semibold">{d.distance}</span>
              </div>
              <div className="text-center bg-gray-50 p-2 rounded">
                <p className="text-xs text-gray-500 flex items-center justify-center gap-1"><Clock className="w-3 h-3"/> Est. Time</p>
                <span className="font-semibold">{d.time}</span>
              </div>
              <button className="bg-green-600 text-white px-4 py-2 rounded flex items-center gap-1 hover:bg-green-700 transition">
                <CheckCircle className="w-4 h-4"/> Update
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
