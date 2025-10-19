import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

//store
// import { Provider } from "react-redux";
// import { store } from "./store";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    <BrowserRouter>
      <Header />
      <main className="body max-w-[1200px] w-full mx-auto scroll-smooth min-h-[calc(100vh-120px)] flex flex-col gap-12 justify-between items-center my-12">
        <App />
      </main>
      <Footer />
    </BrowserRouter>
    {/* </Provider> */}
  </React.StrictMode>
);
