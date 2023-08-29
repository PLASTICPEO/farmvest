import { Routes, Route } from "react-router-dom";
import DefaultLayout from "./layout";
import Home from "./pages/home";
import CustomersPage from "./pages/customers";
import WhyFarmVest from "./pages/whyFarmVest";
import About from "./pages/about";
import Features from "./pages/features";

function App() {
  return (
    <Routes>
      <Route path="*" element={<div>Page Not Found</div>} />
      <Route
        path="/"
        element={
          <DefaultLayout>
            <Home />
          </DefaultLayout>
        }
      />
      <Route path="/customers" element={<CustomersPage />} />
      <Route path="/why-farmvest" element={<WhyFarmVest />} />
      <Route path="/about" element={<About />} />
      <Route path="/features" element={<Features />} />
    </Routes>
  );
}

export default App;
