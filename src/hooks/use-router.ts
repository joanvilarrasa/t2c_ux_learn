import { useState, useEffect } from 'react';
import { Ex0 } from '@/exercises/ex0';
import { Ex1 } from '@/exercises/ex1';
import { Ex2 } from '@/exercises/ex2';
import { Ex3 } from '@/exercises/ex3';
import { Ex4 } from '@/exercises/ex4';
import { Ex5 } from '@/exercises/ex5';
import { Ex6 } from '@/exercises/ex6';
import { Ex7 } from '@/exercises/ex7';
import { Ex8 } from '@/exercises/ex8';

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
      { path: "/exercise0", component: Ex0, title: "Dia 0 - Història de la Web" },
    ]
  },
  {
    title: "Fonaments de React",
    routes: [
      { path: "/exercise1", component: Ex1, title: "Dia 1 - React Component" },
      { path: "/exercise2", component: Ex2, title: "Dia 2 - l'Arbre de React" },
    ]
  },
  {
    title: "React Render",
    routes: [
      { path: "/exercise3", component: Ex3, title: "Dia 3 - Events i estat" },
      { path: "/exercise4", component: Ex4, title: "Dia 4 - React Render" },
    ]
  },
  {
    title: "React State",
    routes: [
      { path: "/exercise5", component: Ex5, title: "Dia 5 - Controlar l'estat" },
      { path: "/exercise6", component: Ex6, title: "Dia 6 - Reducer i Context" },
    ]
  },
  {
    title: "La Frontera de React",
    routes: [
      { path: "/exercise7", component: Ex7, title: "Dia 7 - Evitar Renders" },
      { path: "/exercise8", component: Ex8, title: "Dia 8 - La Frontera de React" },
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
