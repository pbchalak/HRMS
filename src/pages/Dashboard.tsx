import { Users, UserCheck, CalendarOff, UserPlus } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const chartData = [
  { name: 'Jan', attendance: 92 },
  { name: 'Feb', attendance: 90 },
  { name: 'Mar', attendance: 95 },
  { name: 'Apr', attendance: 94 },
  { name: 'May', attendance: 96 },
  { name: 'Jun', attendance: 95 },
];

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Dashboard</h1>
          <p className="text-slate-500 text-sm mt-1">Welcome back, here's what's happening today.</p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-white border border-slate-200 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-50 transition-colors">
            Generate Report
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors shadow-sm">
            Add Employee
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-slate-500">Total Employees</p>
            <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
              <Users className="w-5 h-5" />
            </div>
          </div>
          <p className="text-2xl font-bold text-slate-900 mt-4">250</p>
          <div className="flex items-center gap-2 mt-2">
            <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">+4 this month</span>
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-slate-500">Present Today</p>
            <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg">
              <UserCheck className="w-5 h-5" />
            </div>
          </div>
          <p className="text-2xl font-bold text-slate-900 mt-4">228</p>
          <div className="flex items-center gap-2 mt-2">
            <span className="text-xs font-medium text-slate-500">91% presence rate</span>
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-slate-500">On Leave</p>
            <div className="p-2 bg-amber-50 text-amber-600 rounded-lg">
              <CalendarOff className="w-5 h-5" />
            </div>
          </div>
          <p className="text-2xl font-bold text-slate-900 mt-4">12</p>
          <div className="flex items-center gap-2 mt-2">
            <span className="text-xs font-medium text-slate-500">3 pending approvals</span>
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-slate-500">New Joiners</p>
            <div className="p-2 bg-purple-50 text-purple-600 rounded-lg">
              <UserPlus className="w-5 h-5" />
            </div>
          </div>
          <p className="text-2xl font-bold text-slate-900 mt-4">6</p>
          <div className="flex items-center gap-2 mt-2">
            <span className="text-xs font-medium text-slate-500">In onboarding</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Chart */}
        <div className="lg:col-span-2 bg-white rounded-xl border border-slate-200 shadow-sm p-6">
          <h2 className="text-base font-bold text-slate-900 mb-6">Attendance Overview</h2>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorAttendance" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#2563eb" stopOpacity={0.2}/>
                    <stop offset="95%" stopColor="#2563eb" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                <Tooltip 
                  contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                />
                <Area type="monotone" dataKey="attendance" stroke="#2563eb" strokeWidth={2} fillOpacity={1} fill="url(#colorAttendance)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
          <h2 className="text-base font-bold text-slate-900 mb-6">Recent Activity</h2>
          <div className="space-y-6">
            {[
              { id: 1, text: "Leave request approved for Amit Verma", time: "2 hours ago", type: "leave" },
              { id: 2, text: "May payroll generated successfully", time: "5 hours ago", type: "payroll" },
              { id: 3, text: "Rahul Sharma completed onboarding", time: "1 day ago", type: "onboarding" },
              { id: 4, text: "New holiday calendar published", time: "2 days ago", type: "announcement" },
            ].map((activity) => (
              <div key={activity.id} className="flex gap-4">
                <div className="relative mt-1">
                  <div className="w-2.5 h-2.5 rounded-full bg-blue-500 ring-4 ring-blue-50"></div>
                  {activity.id !== 4 && <div className="absolute top-3 left-1/2 -ml-px w-px h-10 bg-slate-200"></div>}
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-800">{activity.text}</p>
                  <p className="text-xs text-slate-500 mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
