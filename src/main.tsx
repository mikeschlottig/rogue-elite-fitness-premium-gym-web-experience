import '@/lib/errorReporter';
import { createRoot } from 'react-dom/client'
import { enableMapSet } from "immer";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { RouteErrorBoundary } from '@/components/RouteErrorBoundary';
import '@/index.css'
import { HomePage } from '@/pages/HomePage'
import { MembershipPage } from '@/pages/MembershipPage'
import { MarketingLayout } from '@/components/layout/MarketingLayout'

enableMapSet();

let root: any = (window as any).__root;

if (import.meta.hot) {
  import.meta.hot.dispose(() => {
    root?.unmount();
    delete (window as any).__root;
  });
}

const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <MarketingLayout>
        <HomePage />
      </MarketingLayout>
    ),
    errorElement: <RouteErrorBoundary />,
  },
  {
    path: "/membership",
    element: (
      <MarketingLayout>
        <MembershipPage />
      </MarketingLayout>
    ),
    errorElement: <RouteErrorBoundary />,
  },
]);
if (!root) {
  root = createRoot(document.getElementById('root')!);
  (window as any).__root = root;
}

root.render(
  <QueryClientProvider client={queryClient}>
    <ErrorBoundary>
      <RouterProvider router={router} />
    </ErrorBoundary>
  </QueryClientProvider>
);