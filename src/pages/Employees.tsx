import { Search, Plus, Filter, MoreVertical, Edit2, Trash2 } from 'lucide-react';

const employeesList = [
  { id: 'EMP001', name: 'Rahul Sharma', email: 'rahul.s@company.com', dept: 'Human Resources', role: 'HR Manager', status: 'Active' },
  { id: 'EMP002', name: 'Priya Patel', email: 'priya.p@company.com', dept: 'Sales', role: 'Sales Executive', status: 'Active' },
  { id: 'EMP003', name: 'Amit Verma', email: 'amit.v@company.com', dept: 'Engineering', role: 'Software Developer', status: 'Active' },
  { id: 'EMP004', name: 'Neha Gupta', email: 'neha.g@company.com', dept: 'Marketing', role: 'Marketing Lead', status: 'On Leave' },
  { id: 'EMP005', name: 'Vikram Singh', email: 'vikram.s@company.com', dept: 'Engineering', role: 'DevOps Engineer', status: 'Active' },
];

export default function Employees() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Employees</h1>
          <p className="text-slate-500 text-sm mt-1">Manage your workforce directory.</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors shadow-sm">
          <Plus className="w-4 h-4" />
          Add Employee
        </button>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        {/* Table Controls */}
        <div className="p-4 border-b border-slate-200 flex flex-col sm:flex-row gap-4 justify-between items-center bg-slate-50/50">
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            <input 
              type="text" 
              placeholder="Search by name, ID or email..." 
              className="pl-9 pr-4 py-2 w-full rounded-lg bg-white border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
            />
          </div>
          <div className="flex gap-2 w-full sm:w-auto">
            <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 bg-white border border-slate-200 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-50 transition-colors">
              <Filter className="w-4 h-4" />
              Filter
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm whitespace-nowrap">
            <thead className="bg-slate-50 text-slate-600 font-medium border-b border-slate-200">
              <tr>
                <th className="px-6 py-4">Employee</th>
                <th className="px-6 py-4">ID</th>
                <th className="px-6 py-4">Department</th>
                <th className="px-6 py-4">Role</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 right-0">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {employeesList.map((emp) => (
                <tr key={emp.id} className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 font-medium">
                        {emp.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-medium text-slate-900">{emp.name}</p>
                        <p className="text-slate-500 text-xs">{emp.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 font-medium text-slate-700">{emp.id}</td>
                  <td className="px-6 py-4 text-slate-600">{emp.dept}</td>
                  <td className="px-6 py-4 text-slate-600">{emp.role}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      emp.status === 'Active' 
                        ? 'bg-emerald-50 text-emerald-700 ring-1 ring-inset ring-emerald-600/20' 
                        : 'bg-amber-50 text-amber-700 ring-1 ring-inset ring-amber-600/20'
                    }`}>
                      {emp.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <button className="text-slate-400 hover:text-blue-600 transition-colors">
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button className="text-slate-400 hover:text-red-600 transition-colors">
                        <Trash2 className="w-4 h-4" />
                      </button>
                      <button className="text-slate-400 hover:text-slate-600 transition-colors">
                        <MoreVertical className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination Dummy */}
        <div className="p-4 border-t border-slate-200 flex items-center justify-between text-sm text-slate-500 bg-slate-50/50">
          <p>Showing 1 to 5 of 250 entries</p>
          <div className="flex gap-1">
            <button className="px-3 py-1 rounded border border-slate-200 bg-white hover:bg-slate-50 disabled:opacity-50">Prev</button>
            <button className="px-3 py-1 rounded bg-blue-600 text-white font-medium">1</button>
            <button className="px-3 py-1 rounded border border-slate-200 bg-white hover:bg-slate-50">2</button>
            <button className="px-3 py-1 rounded border border-slate-200 bg-white hover:bg-slate-50">3</button>
            <button className="px-3 py-1 rounded border border-slate-200 bg-white hover:bg-slate-50">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}
