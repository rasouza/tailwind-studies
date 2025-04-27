import {
  BarChart,
  ChevronDown,
  ChevronRight,
  FileText,
  HelpCircle,
  Home,
  Layers,
  Settings,
  Users,
} from 'lucide-react'
import React from 'react'
import NavItem from './NavItem'

interface SidebarProps {
  isOpen: boolean
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  const [activeItem, setActiveItem] = React.useState('dashboard')
  const [expandedGroups, setExpandedGroups] = React.useState<string[]>([
    'analytics',
  ])

  const toggleGroup = (group: string) => {
    setExpandedGroups((prev) =>
      prev.includes(group)
        ? prev.filter((item) => item !== group)
        : [...prev, group],
    )
  }

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && <div className="fixed inset-0 bg-black/30 z-40 lg:hidden" />}

      <aside
        className={`fixed top-0 left-0 pt-16 h-full w-64 bg-white dark:bg-gray-900 shadow-lg border-r border-gray-200 dark:border-gray-800 transition-all duration-300 transform z-30 ${
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <div className="flex flex-col h-full overflow-y-auto">
          <div className="px-4 py-6">
            <div className="flex flex-col space-y-1">
              <NavItem
                icon={<Home size={18} />}
                label="Dashboard"
                isActive={activeItem === 'dashboard'}
                onClick={() => setActiveItem('dashboard')}
              />

              {/* Analytics group */}
              <div className="py-1">
                <button
                  type="button"
                  onClick={() => toggleGroup('analytics')}
                  className="flex items-center justify-between w-full px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
                >
                  <div className="flex items-center">
                    <BarChart
                      size={18}
                      className="text-gray-500 dark:text-gray-400 mr-3"
                    />
                    <span>Analytics</span>
                  </div>
                  {expandedGroups.includes('analytics') ? (
                    <ChevronDown size={16} className="text-gray-500" />
                  ) : (
                    <ChevronRight size={16} className="text-gray-500" />
                  )}
                </button>

                {expandedGroups.includes('analytics') && (
                  <div className="ml-6 mt-1 space-y-1">
                    <NavItem
                      label="Reports"
                      isActive={activeItem === 'reports'}
                      onClick={() => setActiveItem('reports')}
                      isSubItem
                    />
                    <NavItem
                      label="Statistics"
                      isActive={activeItem === 'statistics'}
                      onClick={() => setActiveItem('statistics')}
                      isSubItem
                    />
                    <NavItem
                      label="Performance"
                      isActive={activeItem === 'performance'}
                      onClick={() => setActiveItem('performance')}
                      isSubItem
                    />
                  </div>
                )}
              </div>

              <NavItem
                icon={<Layers size={18} />}
                label="Projects"
                isActive={activeItem === 'projects'}
                onClick={() => setActiveItem('projects')}
              />

              <NavItem
                icon={<Users size={18} />}
                label="Team"
                isActive={activeItem === 'team'}
                onClick={() => setActiveItem('team')}
              />

              <NavItem
                icon={<FileText size={18} />}
                label="Documents"
                isActive={activeItem === 'documents'}
                onClick={() => setActiveItem('documents')}
              />
            </div>
          </div>

          <div className="mt-auto border-t border-gray-200 dark:border-gray-800 px-4 py-4">
            <div className="flex flex-col space-y-1">
              <NavItem
                icon={<Settings size={18} />}
                label="Settings"
                isActive={activeItem === 'settings'}
                onClick={() => setActiveItem('settings')}
              />

              <NavItem
                icon={<HelpCircle size={18} />}
                label="Help & Support"
                isActive={activeItem === 'help'}
                onClick={() => setActiveItem('help')}
              />
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}

export default Sidebar
