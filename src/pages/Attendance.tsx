import { Clock, MapPin, Search } from 'lucide-react';

const attendanceRecords = [
  { id: 1, name: 'Rahul Sharma', date: 'Oct 24, 2023', checkIn: '09:02 AM', checkOut: '06:15 PM', status: 'Present', workHours: '9h 13m' },
  { id: 2, name: 'Priya Patel', date: 'Oct 24, 2023', checkIn: '08:55 AM', checkOut: '05:45 PM', status: 'Present', workHours: '8h 50m' },
  { id: 3, name: 'Amit Verma', date: 'Oct 24, 2023', checkIn: '10:15 AM', checkOut: '07:00 PM', status: 'Late', workHours: '8h 45m' },
  { id: 4, name: 'Neha Gupta', date: 'Oct 24, 2023', checkIn: '-', checkOut: '-', status: 'Absent', workHours: '0h 0m' },
];

export default function Attendance() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Attendance</h1>
          <p className="text-slate-500 text-sm mt-1">Monitor daily presence and shift timings.</p>
        </div>
        <div className="flex bg-slate-100 p-1 rounded-lg">
          <button className="px-4 py-1.5 text-sm font-medium bg-white shadow-sm rounded-md text-slate-900">Today</button>
          <button className="px-4 py-1.5 text-sm font-medium text-slate-500 hover:text-slate-900">Weekly</button>
          <button className="px-4 py-1.5 text-sm font-medium text-slate-500 hover:text-slate-900">Monthly</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-slate-500">Avg Clock-In</p>
            <p className="text-2xl font-bold text-slate-900 mt-2">09:12 AM</p>
          </div>
          <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center">
            <Clock className="w-6 h-6" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-slate-500">Avg Clock-Out</p>
            <p className="text-2xl font-bold text-slate-900 mt-2">06:45 PM</p>
          </div>
          <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center">
            <Clock className="w-6 h-6" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-slate-500">Remote Check-ins</p>
            <p className="text-2xl font-bold text-slate-900 mt-2">14%</p>
          </div>
          <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-full flex items-center justify-center">
            <MapPin className="w-6 h-6" />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-slate-200 flex items-center gap-4 bg-slate-50/50">
          <div className="relative w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            <input 
              type="text" 
              placeholder="Search employee..." 
              className="pl-9 pr-4 py-2 w-full rounded-lg bg-white border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
            />
          </div>
          <input type="date" className="py-2 px-3 rounded-lg bg-white border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-slate-600" defaultValue="2023-10-24" />
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm whitespace-nowrap">
            <thead className="bg-slate-50 text-slate-600 font-medium border-b border-slate-200">
              <tr>
                <th className="px-6 py-4">Employee</th>
                <th className="px-6 py-4">Date</th>
                <th className="px-6 py-4">Check In</th>
                <th className="px-6 py-4">Check Out</th>
                <th className="px-6 py-4">Work Hours</th>
                <th className="px-6 py-4">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {attendanceRecords.map((record) => (
                <tr key={record.id} className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-6 py-4 font-medium text-slate-900">{record.name}</td>
                  <td className="px-6 py-4 text-slate-600">{record.date}</td>
                  <td className="px-6 py-4 font-medium text-slate-700">{record.checkIn}</td>
                  <td className="px-6 py-4 font-medium text-slate-700">{record.checkOut}</td>
                  <td className="px-6 py-4 text-slate-600">{record.workHours}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      record.status === 'Present' ? 'bg-emerald-50 text-emerald-700 ring-1 ring-inset ring-emerald-600/20' :
                      record.status === 'Late' ? 'bg-amber-50 text-amber-700 ring-1 ring-inset ring-amber-600/20' :
                      'bg-red-50 text-red-700 ring-1 ring-inset ring-red-600/20'
                    }`}>
                      {record.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
