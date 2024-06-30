import { useState } from "react";

import "./App.css";
import { Route, Routes } from "react-router-dom";
import { TasksPage } from "./pages/TasksPage";
import { TasksForm } from "./pages/TaskForm";
import { NotFound } from "./pages/NotFound";
import { NavBar } from "./components/NavBar";
import { TaskContextProvider } from "./context/TaskProvider";

function App12() {
  const [count, setCount] = useState(0);

  return (
   <div className="bg-slate-50 h-full">
    <NavBar />
    <div className="px-2 mx-auto py-4">
    <TaskContextProvider>
      
      <Routes>
        <Route path="/" element={<TasksPage />} />
        <Route path="/new" element={<TasksForm />} />
        <Route path="/edit/:id" element={<TasksForm />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </TaskContextProvider>
    </div>
   </div>
  );
}

export default App12;