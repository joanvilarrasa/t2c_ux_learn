import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage, BreadcrumbList } from "./ui/breadcrumb";
import { Separator } from "./ui/separator";
import { SidebarGroup, SidebarGroupContent, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarGroupLabel, SidebarContent, Sidebar, SidebarInset, SidebarTrigger } from "./ui/sidebar";
import { ThemeToggle } from "./theme-toggle";
import type { Route } from "@/hooks/use-router";

export interface RouteGroup {
  title: string;
  routes: Route[];
}

export interface AppSidebarProps {
  routeGroups: RouteGroup[];
  currentPath: string;
  currentTitle: string;
  currentGroup: string;
  onNavigate: (path: string) => void;
  children: React.ReactNode;
}

export function AppSidebar({ routeGroups, currentPath, currentTitle, currentGroup, onNavigate, children }: AppSidebarProps) {
  return (
    <>
      <Sidebar>
        <SidebarContent>
          {routeGroups.map((group) => (
            <SidebarGroup key={group.title}>
              <SidebarGroupLabel>{group.title}</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {group.routes.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton 
                        onClick={() => onNavigate(item.path)}
                        isActive={currentPath === item.path}
                      >
                        <span>{item.title}</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          ))}
        </SidebarContent>
      </Sidebar>
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center justify-between gap-2 border-b">
          <div className="flex items-center gap-2 px-3">
            <SidebarTrigger />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">
                    {currentGroup}
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>
                    {currentTitle}
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <div className="flex justify-end items-center gap-2 px-3">
            <ThemeToggle />
          </div>
        </header>
        <main className="flex flex-col" style={{ height: 'calc(100vh - (var(--spacing) * 16))' }}>
          {children}
        </main>
      </SidebarInset>
    </>
  );
}
