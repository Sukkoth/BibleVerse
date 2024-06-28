import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MainLayout from "./Layouts/MainLayout";
import Intro from "./pages/Intro";

import "./App.css";
import Login from "./pages/Login";
import BottomNavLayout from "./Layouts/BottomNavLayout";
import Stats from "./pages/Stats";
import Account from "./pages/Account";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route element={<BottomNavLayout />}>
          <Route index element={<Home />} />
          <Route path='stats' element={<Stats />} />
          <Route path='account' element={<Account />} />
        </Route>
      </Route>
      <Route path='/intro' element={<Intro />} />
      <Route path='/register' element={<Login />} />
    </Routes>
  );
}

export default App;
