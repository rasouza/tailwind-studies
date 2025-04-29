import { ListTodo, Telescope, Users } from 'lucide-react'

export default [
  {
    group: 'Management',
    title: 'Users',
    url: '#',
    icon: Users,
    isActive: true,
    items: [
      {
        title: 'Add',
        url: '/dashboard/users/add',
      },
      {
        title: 'List',
        url: '/dashboard/users/list',
      },
    ],
  },
  {
    group: 'To Do',
    title: 'To Do',
    url: '/dashboard/todo',
    icon: ListTodo,
  },
  {
    group: 'Star Wars',
    title: 'Star Wars',
    url: '#',
    icon: Telescope,
    items: [
      {
        title: 'List Movies',
        url: '/dashboard/star-wars',
      },
    ],
  },
]
