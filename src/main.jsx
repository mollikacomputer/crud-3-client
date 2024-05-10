import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes.jsx";
import { MoneyContext } from "./Context/MoneyContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <MoneyContext.Provider>
    <div className="max-w-7xl mx-auto">
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
      ,
    </div>
  </MoneyContext.Provider>
);
