import { Check, X, Calendar as CalendarIcon, Clock } from 'lucide-react';

const leaveRequests = [
  { id: 1, name: 'Rahul Sharma', type: 'Sick Leave', dates: 'Oct 26 - Oct 27', days: 2, status: 'Pending', applied: 'Oct 24, 2023' },
  { id: 2, name: 'Priya Patel', type: 'Annual Leave', dates: 'Nov 01 - Nov 05', days: 5, status: 'Pending', applied: 'Oct 23, 2023' },
  { id: 3, name: 'Amit Verma', type: 'Casual Leave', dates: 'Oct 15', days: 1, status: 'Approved', applied: 'Oct 10, 2023' },
  { id: 4, name: 'Neha Gupta', type: 'Unpaid Leave', dates: 'Oct 12 - Oct 14', days: 3, status: 'Rejected', applied: 'Oct 08, 2023' },
];

export default function Leave() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Leave Management</h1>
          <p className="text-slate-500 text-sm mt-1">Review blockages and approve time off.</p>
        </div>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors shadow-sm">
          Apply Leave
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-start gap-4">
          <div className="p-3 bg-amber-50 text-amber-600 rounded-lg">
            <Clock className="w-5 h-5" />
          </div>
          <div>
            <p className="text-sm font-medium text-slate-500">Pending Requests</p>
            <p className="text-2xl font-bold text-slate-900 mt-1">12</p>
          </div>
        </div>
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-start gap-4">
          <div className="p-3 bg-emerald-50 text-emerald-600 rounded-lg">
            <Check className="w-5 h-5" />
          </div>
          <div>
            <p className="text-sm font-medium text-slate-500">Approved This Month</p>
            <p className="text-2xl font-bold text-slate-900 mt-1">45</p>
          </div>
        </div>
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-start gap-4">
          <div className="p-3 bg-blue-50 text-blue-600 rounded-lg">
            <CalendarIcon className="w-5 h-5" />
          </div>
          <div>
            <p className="text-sm font-medium text-slate-500">Upcoming Holidays</p>
            <p className="text-2xl font-bold text-slate-900 mt-1">2</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-5 border-b border-slate-200 bg-slate-50/50">
          <h2 className="text-base font-bold text-slate-900">Recent Leave Requests</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm whitespace-nowrap">
            <thead className="bg-white text-slate-500 font-medium border-b border-slate-200">
              <tr>
                <th className="px-6 py-4">Employee</th>
                <th className="px-6 py-4">Leave Type</th>
                <th className="px-6 py-4">Duration</th>
                <th className="px-6 py-4">Applied On</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {leaveRequests.map((req) => (
                <tr key={req.id} className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-6 py-4 font-medium text-slate-900">{req.name}</td>
                  <td className="px-6 py-4 text-slate-600">{req.type}</td>
                  <td className="px-6 py-4">
                    <span className="text-slate-900">{req.dates}</span>
                    <span className="text-slate-500 ml-2">({req.days} days)</span>
                  </td>
                  <td className="px-6 py-4 text-slate-600">{req.applied}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      req.status === 'Approved' ? 'bg-emerald-50 text-emerald-700 ring-1 ring-inset ring-emerald-600/20' :
                      req.status === 'Pending' ? 'bg-amber-50 text-amber-700 ring-1 ring-inset ring-amber-600/20' :
                      'bg-red-50 text-red-700 ring-1 ring-inset ring-red-600/20'
                    }`}>
                      {req.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    {req.status === 'Pending' ? (
                      <div className="flex items-center justify-end gap-2">
                        <button className="p-1 text-emerald-600 hover:bg-emerald-50 rounded transition-colors" title="Approve">
                          <Check className="w-5 h-5" />
                        </button>
                        <button className="p-1 text-red-600 hover:bg-red-50 rounded transition-colors" title="Reject">
                          <X className="w-5 h-5" />
                        </button>
                      </div>
                    ) : (
                      <span className="text-slate-400">-</span>
                    )}
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
