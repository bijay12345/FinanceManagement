import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import "./styles/theme.css";
import { Provider } from "react-redux";
import { store } from "./app/store.ts";
import "@fontsource/open-sans";
import "@fontsource/open-sans/700.css";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <App />
  </Provider>,
);
