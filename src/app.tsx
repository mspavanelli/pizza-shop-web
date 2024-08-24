import "@/styles/global.css";

import { Helmet, HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";

import { Toaster } from "@/components/ui/sonner";
import { routes } from "@/routes";

export function App() {
  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | pizza.shop" />
      <RouterProvider router={routes} />
      <Toaster richColors duration={5000} position="top-right" />
    </HelmetProvider>
  );
}
