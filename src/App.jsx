import { BrowserRouter, Route, Routes } from "react-router";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Director from "./pages/Director";
import AdminLayout from "./layout/AdminLayout";
import Admin from "./pages/Admin";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
        </Route>
        <Route path="/about/" element={<MainLayout />}>
          <Route index element={<About />} />
          <Route path="director" element={<Director />} />
        </Route>
        <Route path="/admin/" element={<AdminLayout />}>
          <Route index element={<Admin />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
