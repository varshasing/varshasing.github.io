import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "@/components/Layout";
import Index from "./pages/Index";
import Problem from "./pages/Problem";
import Product from "./pages/Product";
import System from "./pages/System";
import Implementation from "./pages/Implementation";
import Mechanical from "./pages/implementation/Mechanical";
import Perception from "./pages/implementation/Perception";
import NavigationPage from "./pages/implementation/NavigationPage";
import Interface from "./pages/implementation/Interface";
import Electronics from "./pages/implementation/Electronics";
import Safety from "./pages/implementation/Safety";
import Operation from "./pages/Operation";
import Team from "./pages/Team";
import Resources from "./pages/Resources";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/problem" element={<Problem />} />
            <Route path="/product" element={<Product />} />
            <Route path="/system" element={<System />} />
            <Route path="/implementation" element={<Implementation />} />
            <Route path="/implementation/mechanical" element={<Mechanical />} />
            <Route path="/implementation/perception" element={<Perception />} />
            <Route path="/implementation/navigation" element={<NavigationPage />} />
            <Route path="/implementation/interface" element={<Interface />} />
            <Route path="/implementation/electronics" element={<Electronics />} />
            <Route path="/implementation/safety" element={<Safety />} />
            <Route path="/operation" element={<Operation />} />
            <Route path="/team" element={<Team />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
