import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter as Router } from "react-router-dom";
import ContextProvider from "./context/AppContext.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ContextProvider>
    <Router>
      <App />
    </Router>
  </ContextProvider>
);
