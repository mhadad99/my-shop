import { createRoot } from "react-dom/client";
import { Provider } from "react-redux"; // Import Provider from react-redux
import { store } from "./redux/store.js"; // Ensure the correct path to store.js
import { MainLayout } from "./layout/MainLayout.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/index.css";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <MainLayout></MainLayout>
  </Provider>
);
