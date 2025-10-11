import { Ex0 } from '@/exercises/ex0';
import { Ex1 } from '@/exercises/ex1';
import { Ex3 } from '@/exercises/ex3';
import { Ex4 } from '@/exercises/ex4';
import { Ex2 } from '@/exercises/ex2';
import { useState, useEffect } from 'react';

export type Route = {
  path: string;
  component: React.ComponentType;
  title: string;
  icon?: React.ReactNode;
};

const routeGroups = [
  {
    title: "Història de la Web",
    routes: [
      { path: "/exercise0", component: Ex0, title: "Dia 0" },
    ]
  },
  {
    title: "Fonaments de React",
    routes: [
      { path: "/exercise1", component: Ex1, title: "Dia 1" },
      { path: "/exercise2", component: Ex2, title: "Dia 2" },
    ]
  },
  {
    title: "Contolar l'estat de les aplicacions",
    routes: [
      { path: "/exercise3", component: Ex3, title: "Dia 3" },
      { path: "/exercise4", component: Ex4, title: "Dia 4" },
    ]
  },
];

// Flatten routes for router
const routes: Route[] = routeGroups.flatMap(group => group.routes);

export function useRouter() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path: string) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
  };

  const currentRoute = routes.find(route => route.path === currentPath) ?? routes[0];
  const currentGroup = routeGroups.find(group => group.routes.some(route => route.path === currentPath)) ?? routeGroups[0];

  return {
    currentPath,
    currentRoute,
    currentGroup,
    navigate,
    routeGroups,
    routes,
  };
}
