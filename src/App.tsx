import { Routes, Route } from "react-router-dom";
import DefaultLayout from "./layout";
import Home from "./pages/home";
import CustomersPage from "./pages/customers";

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
    </Routes>
  );
}

export default App;
