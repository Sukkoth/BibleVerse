import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MainLayout from "./Layouts/MainLayout";
import Intro from "./pages/Intro";

import "./App.css";
import Login from "./pages/Login";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path='/' element={<Home />} />
        <Route path='/intro' element={<Intro />} />
        <Route path='/register' element={<Login />} />
      </Route>
    </Routes>
  );
}

export default App;
