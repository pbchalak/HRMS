import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer, Legend } from 'recharts';
import { FileText, Download } from 'lucide-react';

const departmentData = [
  { name: 'Engineering', employees: 120, budget: 1200 },
  { name: 'Sales', employees: 45, budget: 400 },
  { name: 'HR', employees: 12, budget: 150 },
  { name: 'Marketing', employees: 28, budget: 350 },
  { name: 'Support', employees: 45, budget: 250 },
];

export default function Reports() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Reports & Analytics</h1>
          <p className="text-slate-500 text-sm mt-1">Workforce insights and cost distributions.</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-50 transition-colors shadow-sm">
          <Download className="w-4 h-4" />
          Export All Data
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h3 className="font-bold text-slate-900 mb-6">Headcount by Department</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={departmentData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} dy={10} />
                <YAxis yAxisId="left" orientation="left" stroke="#3b82f6" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                <RechartsTooltip cursor={{fill: '#f8fafc'}} contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                <Legend iconType="circle" wrapperStyle={{ fontSize: '12px', paddingTop: '20px' }} />
                <Bar yAxisId="left" dataKey="employees" name="Employees" fill="#3b82f6" radius={[4, 4, 0, 0]} barSize={32} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-slate-900">Canned Reports</h3>
          </div>
          
          <div className="space-y-3">
            {[
              { title: "Monthly Attendance Summary", desc: "Aggregated check-in/out times by department." },
              { title: "Leave Balance Report", desc: "Remaining and consumed leave quotas." },
              { title: "Payroll Variance", desc: "Analysis of month-over-month salary changes." },
              { title: "Employee Turnover", desc: "Joining vs. exiting ratios over the last quarter." }
            ].map((report, idx) => (
              <div key={idx} className="flex justify-between items-center p-4 border border-slate-200 rounded-lg hover:border-blue-300 hover:bg-blue-50/30 transition-colors group cursor-pointer">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-slate-100 text-slate-600 rounded group-hover:bg-blue-100 group-hover:text-blue-600 transition-colors">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-900">{report.title}</h4>
                    <p className="text-sm text-slate-500 mt-0.5">{report.desc}</p>
                  </div>
                </div>
                <Download className="w-5 h-5 text-slate-400 group-hover:text-blue-600" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
