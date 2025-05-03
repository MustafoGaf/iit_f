import { BrowserRouter, Route, Routes } from "react-router";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Director from "./pages/Director";
import AdminLayout from "./layout/AdminLayout";
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getSliders } from "./api/sliders";
import AdminSlider from "./pages/AdminSlider";
import Muovin from "./pages/Muovin";
import NanoTech from "./pages/NanoTech";
import Fizika from "./pages/Fizika";
import HimiyaGlitserin from "./pages/HimiyaGlitserin";
import Directors from "./pages/Directors";
import ShuroiOlimon from "./pages/ShuroiOlimon";
import Loihaho from "./pages/Loihaho";
import Istoriya from "./pages/Istoriya";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSliders());
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
        </Route>
        <Route path="/about/" element={<MainLayout />}>
          <Route index element={<About />} />
          <Route path="directors" element={<Directors />} />
          <Route path="tarih" element={<Istoriya />} />
        </Route>
        <Route path="/ilm/" element={<MainLayout />}>
          <Route index element={<About />} />
          <Route path="shuro" element={<ShuroiOlimon />} />
          <Route path="loihaho" element={<Loihaho />} />
        </Route>
        <Route path="/rohbar/" element={<MainLayout />}>
          <Route index element={<About />} />
          <Route path="director" element={<Director />} />
          <Route path="muovin" element={<Muovin />} />
        </Route>
        <Route path="/ozmoishgoh/" element={<MainLayout />}>
          <Route index element={<About />} />
          <Route path="nanotech" element={<NanoTech />} />
          <Route path="fizika" element={<Fizika />} />
          <Route path="glitserin" element={<HimiyaGlitserin />} />
        </Route>
        <Route path="/admin/" element={<AdminLayout />}>
          <Route index element={<Admin />} />
          <Route path="slider" element={<AdminSlider />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
