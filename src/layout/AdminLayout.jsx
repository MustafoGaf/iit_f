import { Outlet } from "react-router";

export default function AdminLayout() {
  return (
    <div className="admin_container">
      <nav class="admin-navbar">
        <div class="logo">
          Admin<span>ИИТ</span>
        </div>
        <ul class="nav-links">
          <li>
            <a href="#">
              <i class="fas fa-tachometer-alt"></i> Панель
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fas fa-users"></i> Пользователи
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fas fa-cogs"></i> Настройки
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fas fa-chart-bar"></i> Отчёты
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fas fa-sign-out-alt"></i> Выйти
            </a>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}
