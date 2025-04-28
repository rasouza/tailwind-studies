import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { Separator } from '@/components/ui/separator'
import { usePageContext } from 'vike-react/usePageContext'
import { SidebarTrigger } from './ui/sidebar'

const configModules = import.meta.glob(
  // adjust to match your file extensions/layout:
  '../pages/**/+config.{js,ts,jsx,tsx}',
  { eager: true },
)
export function Breadcrumbs() {
  const pageContext = usePageContext()
  const { urlParsed, config, globalContext } = pageContext
  const segments = urlParsed.pathname.split('/').filter(Boolean)
  // console.log('urlParsed :>> ', urlParsed)
  // console.log('config :>> ', config)
  // console.log('segments :>> ', segments)
  // console.log('pageContext :>> ', pageContext)
  // console.log('globalContext :>> ', globalContext)
  // console.log('configModules :>> ', configModules)
  return (
    <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
      <div className="flex items-center gap-2 px-4">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mr-2 h-4" />
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem className="hidden md:block">
              <BreadcrumbLink href="#">
                Building Your Application
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="hidden md:block" />
            <BreadcrumbItem>
              <BreadcrumbPage>Data Fetching</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </header>
  )
}
