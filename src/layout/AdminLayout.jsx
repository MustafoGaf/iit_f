import { useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router";
import useLocalStorage from "../hooks/useLocalstorage";
const API = import.meta.env.VITE_API_URL;
export default function AdminLayout() {
  const navigate = useNavigate();
  const [token, setToken] = useLocalStorage("auth_token", "");

  const refreshToken = async () => {
    try {
      const response = await fetch(API + "/refresh", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          token: token,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        setToken(data.token);
        // console.log(">>>>>>", data);
      }
    } catch (error) {
      setToken("");
      navigate("/login");
    }
  };
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
    refreshToken();
  }, []);
  return (
    <div className="admin_container">
      <nav className="admin-navbar">
        <Link to={"/"}>
          <div className="logo">
            Admin<span>ИИТ</span>
          </div>
        </Link>
        <ul className="nav-links">
          <li>
            <Link to={"/admin/slider"}>
              <i className="fas fa-tachometer-alt"></i> Слайдер
            </Link>
          </li>
          <li>
            <a href="#">
              <i className="fas fa-chart-bar"></i> Новости
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fas fa-users"></i> Пользователи
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fas fa-cogs"></i> Настройки
            </a>
          </li>

          <li>
            <a href="#">
              <i className="fas fa-sign-out-alt"></i> Выйти
            </a>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}
