import { Routes, Route } from "react-router-dom";
import DefaultLayout from "./layout";
import Home from "./pages/home";

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
    </Routes>
  );
}

export default App;
