import { Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { CreateEmployee } from "./pages/CreateEmployee";
import { UpdateEmployee } from "./pages/UpdateEmployee";
import "./App.css";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        newestOnTop
        closeOnClick
        draggable
        pauseOnHover
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateEmployee />} />
        <Route path="/update/:id" element={<UpdateEmployee />} />
      </Routes>
    </>
  );
};

export default App;
