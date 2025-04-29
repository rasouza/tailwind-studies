import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@radix-ui/react-collapsible'
import { ChevronRight, type LucideIcon } from 'lucide-react'
import { group } from 'radash'
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from '../ui/sidebar'

export interface NavigationItem {
  group: string
  title: string
  url: string
  icon?: LucideIcon
  isActive?: boolean
  items?: NavigationSubItem[]
}
export interface NavigationSubItem {
  title: string
  url: string
}

export function Navigation({ items }: { items: NavigationItem[] }) {
  const sections = group(items, (item) => item.group)

  return (
    <div>
      {Object.entries(sections).map(([group, items]) => (
        <SidebarGroup key={group}>
          <SidebarGroupLabel>{group}</SidebarGroupLabel>
          <SidebarMenu>
            {items?.map((item) =>
              item.items && item.items.length > 0 ? (
                <ItemWithSubmenu key={item.title} item={item} />
              ) : (
                <ItemWithoutSubmenu key={item.title} item={item} />
              ),
            )}
          </SidebarMenu>
        </SidebarGroup>
      ))}
    </div>
  )
}

function ItemWithSubmenu({
  item,
}: {
  item: NavigationItem
}) {
  return (
    <Collapsible
      asChild
      defaultOpen={item.isActive}
      className="group/collapsible"
    >
      <SidebarMenuItem>
        <CollapsibleTrigger asChild>
          <SidebarMenuButton tooltip={item.title}>
            {item.icon && <item.icon />}
            <span>{item.title}</span>
            <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
          </SidebarMenuButton>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <SidebarMenuSub>
            {item.items?.map((subItem) => (
              <SidebarMenuSubItem key={subItem.title}>
                <SidebarMenuSubButton asChild>
                  <a href={subItem.url}>
                    <span>{subItem.title}</span>
                  </a>
                </SidebarMenuSubButton>
              </SidebarMenuSubItem>
            ))}
          </SidebarMenuSub>
        </CollapsibleContent>
      </SidebarMenuItem>
    </Collapsible>
  )
}

function ItemWithoutSubmenu({
  item,
}: {
  item: NavigationItem
}) {
  return (
    <SidebarMenuSubItem key={item.title}>
      <SidebarMenuSubButton asChild>
        <a href={item.url}>
          {item.icon && <item.icon />}
          <span>{item.title}</span>
        </a>
      </SidebarMenuSubButton>
    </SidebarMenuSubItem>
  )
}
