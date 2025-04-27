import type React from 'react'

interface NavItemProps {
  icon?: React.ReactNode
  label: string
  isActive: boolean
  onClick: () => void
  isSubItem?: boolean
}

const NavItem: React.FC<NavItemProps> = ({
  icon,
  label,
  isActive,
  onClick,
  isSubItem = false,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex items-center w-full px-3 py-2 text-sm rounded-md transition-all duration-200 ${
        isActive
          ? 'bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
      }`}
    >
      {icon && (
        <span
          className={`${isActive ? 'text-blue-600 dark:text-blue-400' : 'text-gray-500 dark:text-gray-400'} mr-3`}
        >
          {icon}
        </span>
      )}
      <span className={isSubItem ? 'text-xs' : ''}>{label}</span>

      {isActive && (
        <span className="ml-auto w-1 h-5 bg-blue-500 rounded-full" />
      )}
    </button>
  )
}

export default NavItem
