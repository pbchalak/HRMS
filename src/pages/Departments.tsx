import { Plus, Users, FolderOpen } from 'lucide-react';

const departments = [
  { id: 1, name: 'Engineering', head: 'Rajiv Menon', count: 120, budget: '$1.2M' },
  { id: 2, name: 'Sales & Revenue', head: 'Priya Patel', count: 45, budget: '$400K' },
  { id: 3, name: 'Human Resources', head: 'Rahul Sharma', count: 12, budget: '$150K' },
  { id: 4, name: 'Marketing', head: 'Neha Gupta', count: 28, budget: '$350K' },
  { id: 5, name: 'Customer Support', head: 'Suresh Kumar', count: 45, budget: '$250K' }
];

export default function Departments() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Departments</h1>
          <p className="text-slate-500 text-sm mt-1">Organize and manage structural teams.</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors shadow-sm">
          <Plus className="w-4 h-4" />
          Add Department
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {departments.map((dept) => (
          <div key={dept.id} className="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="p-5 border-b border-slate-100">
              <div className="flex justify-between items-start mb-4">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center">
                  <FolderOpen className="w-6 h-6" />
                </div>
                <button className="text-slate-400 hover:text-slate-600">
                  <span className="sr-only">Options</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path></svg>
                </button>
              </div>
              <h3 className="text-lg font-bold text-slate-900">{dept.name}</h3>
              <p className="text-sm text-slate-500">Head: <span className="font-medium text-slate-700">{dept.head}</span></p>
            </div>
            <div className="p-5 bg-slate-50/50 rounded-b-xl flex justify-between items-center text-sm">
              <div className="flex items-center gap-2 text-slate-600">
                <Users className="w-4 h-4 text-slate-400" />
                <span className="font-medium text-slate-900">{dept.count}</span> Employees
              </div>
              <div className="text-slate-600">
                Budget: <span className="font-medium text-slate-900">{dept.budget}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
