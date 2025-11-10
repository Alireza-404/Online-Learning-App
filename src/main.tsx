import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

import Store from "./Redux/Store.ts";
import App from "./App.tsx";

import "./index.css";

createRoot(document.getElementById("root")!).render(
  <Provider store={Store}>
    <App />
  </Provider>
);
