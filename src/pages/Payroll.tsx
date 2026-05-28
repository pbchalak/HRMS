import { DollarSign, Download, Filter } from 'lucide-react';

const payrollRecords = [
  { id: 'PR001', name: 'Rahul Sharma', role: 'HR Manager', month: 'October 2023', base: '₹ 80,000', net: '₹ 72,500', status: 'Processed' },
  { id: 'PR002', name: 'Priya Patel', role: 'Sales Executive', month: 'October 2023', base: '₹ 60,000', net: '₹ 54,200', status: 'Processed' },
  { id: 'PR003', name: 'Amit Verma', role: 'Software Developer', month: 'October 2023', base: '₹ 1,20,000', net: '₹ 1,02,000', status: 'Processed' },
  { id: 'PR004', name: 'Neha Gupta', role: 'Marketing Lead', month: 'October 2023', base: '₹ 90,000', net: '₹ 81,000', status: 'Pending' },
];

export default function Payroll() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Payroll Processing</h1>
          <p className="text-slate-500 text-sm mt-1">Manage salaries, taxes, and payslips.</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors shadow-sm">
          Run Payroll
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <p className="text-sm font-medium text-slate-500">Monthly Payroll (Oct)</p>
          <p className="text-3xl font-bold text-slate-900 mt-2">₹52,00,000</p>
          <div className="mt-4 flex items-center gap-2 text-sm text-slate-600">
            <span className="flex items-center text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded font-medium">94%</span> 
            processed
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <p className="text-sm font-medium text-slate-500">Upcoming Payroll (Nov)</p>
          <p className="text-3xl font-bold text-slate-900 mt-2">₹54,50,000</p>
          <div className="mt-4 flex items-center gap-2 text-sm text-slate-600">
            <span className="text-slate-500 bg-slate-100 px-2 py-0.5 rounded font-medium">Est</span> 
            based on current headcount
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-center gap-3">
          <button className="flex items-center justify-center gap-2 w-full py-2 bg-slate-50 border border-slate-200 text-slate-700 rounded-lg hover:bg-slate-100 transition-colors">
            <DollarSign className="w-4 h-4" />
            Salary Structures
          </button>
          <button className="flex items-center justify-center gap-2 w-full py-2 bg-slate-50 border border-slate-200 text-slate-700 rounded-lg hover:bg-slate-100 transition-colors">
            <Download className="w-4 h-4" />
            Export Payroll Data
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-slate-200 flex justify-between items-center bg-slate-50/50">
          <h2 className="font-bold text-slate-900">Recent Payslips</h2>
          <button className="flex items-center gap-2 px-3 py-1.5 bg-white border border-slate-200 text-slate-700 rounded-md text-sm hover:bg-slate-50 transition-colors">
            <Filter className="w-4 h-4" />
            Filter
          </button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm whitespace-nowrap">
            <thead className="bg-white text-slate-500 font-medium border-b border-slate-200">
              <tr>
                <th className="px-6 py-4">Employee</th>
                <th className="px-6 py-4">Month</th>
                <th className="px-6 py-4 text-right">Base Salary</th>
                <th className="px-6 py-4 text-right">Net Pay</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Payslip</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {payrollRecords.map((record) => (
                <tr key={record.id} className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-6 py-4">
                    <p className="font-medium text-slate-900">{record.name}</p>
                    <p className="text-xs text-slate-500 mt-1">{record.role}</p>
                  </td>
                  <td className="px-6 py-4 text-slate-600">{record.month}</td>
                  <td className="px-6 py-4 text-right font-medium text-slate-600">{record.base}</td>
                  <td className="px-6 py-4 text-right font-bold text-slate-900">{record.net}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      record.status === 'Processed' ? 'bg-emerald-50 text-emerald-700 ring-1 ring-inset ring-emerald-600/20' :
                      'bg-amber-50 text-amber-700 ring-1 ring-inset ring-amber-600/20'
                    }`}>
                      {record.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm text-blue-600 hover:bg-blue-50 rounded shadow-sm border border-blue-100 transition-colors disabled:opacity-50" disabled={record.status === 'Pending'}>
                      <Download className="w-4 h-4" />
                      PDF
                    </button>
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
