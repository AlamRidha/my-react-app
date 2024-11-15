import React from "react";

import LoginPage from "./Pages/login";
import RegisterPage from "./Pages/register";

function App() {
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="flex gap-x-4">
        <RegisterPage></RegisterPage>
      </div>
    </div>
  );
}

export default App;
