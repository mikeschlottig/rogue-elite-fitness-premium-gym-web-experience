import '@/lib/errorReporter';
import { enableMapSet } from "immer";
enableMapSet();
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { RouteErrorBoundary } from '@/components/RouteErrorBoundary';
import '@/index.css'
import { HomePage } from '@/pages/HomePage'
import { TopNav } from '@/components/layout/TopNav'
import { Footer } from '@/components/layout/Footer'
const queryClient = new QueryClient();
// Global layout wrapper for marketing site
const PageWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="flex flex-col min-h-screen">
    <TopNav />
    <main className="flex-grow">
      {children}
    </main>
    <Footer />
  </div>
);
const router = createBrowserRouter([
  {
    path: "/",
    element: <PageWrapper><HomePage /></PageWrapper>,
    errorElement: <RouteErrorBoundary />,
  },
]);
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ErrorBoundary>
        <RouterProvider router={router} />
      </ErrorBoundary>
    </QueryClientProvider>
  </StrictMode>,
)