import { Breadcrumbs } from '@/components/Breadcrumbs'
import { AppSidebar } from '@/components/Sidebar/Sidebar'
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'
import '../../assets/style.css'
import '../../assets/tailwind.css'
import routes from './routes'

export default function LayoutDefault({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SidebarProvider>
      <AppSidebar routes={routes} />
      <SidebarInset>
        <Breadcrumbs />
        {children}
      </SidebarInset>
    </SidebarProvider>
  )
}
