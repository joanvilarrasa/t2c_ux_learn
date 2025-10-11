import { useRouter } from "@/hooks/use-router";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { AppSidebar } from "./components/app-sidebar";
import { SidebarProvider } from "./components/ui/sidebar";

export function App() {
  const { currentRoute, navigate, routeGroups, currentGroup } = useRouter();
  const CurrentComponent = currentRoute!.component;

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <SidebarProvider>
        <AppSidebar routeGroups={routeGroups} currentPath={currentRoute?.path ?? ""} currentTitle={currentRoute?.title ?? ""} currentGroup={currentGroup?.title ?? ""} currentDescription={currentRoute?.description ?? ""} onNavigate={navigate}>
          <CurrentComponent />
        </AppSidebar>
      </SidebarProvider>
    </ThemeProvider>
  );
}

export default App;
