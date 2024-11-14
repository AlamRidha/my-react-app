import React from "react";
import Button from "./components/Elements/Button";

function App() {
  return (
    <div className="flex justify-center bg-blue-600 min-h-screen items-center">
      <div className="flex gap-x-4">
        <Button variant="bg-slate-900">Login</Button>
        <Button variant="bg-red-700">Logout</Button>
        <Button>Register</Button>
        <Button></Button>
        <Button variant="bg-green-700">Cancel</Button>
      </div>
    </div>
  );
}

export default App;
