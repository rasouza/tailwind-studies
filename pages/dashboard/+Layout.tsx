import { Breadcrumbs } from '@/components/Breadcrumbs'
import '../../assets/style.css'

import '../../assets/tailwind.css'

import { AppSidebar } from '@/components/Sidebar/Sidebar'

import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'

export default function LayoutDefault({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <Breadcrumbs />
        {children}
      </SidebarInset>
    </SidebarProvider>
  )
}
