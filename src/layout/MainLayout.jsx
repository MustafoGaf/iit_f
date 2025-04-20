import { Outlet } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function MainLayout() {
  return (
    <div>
      <Header />
      <main class="container">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
