import { useNavigate } from "react-router";
import useLocalStorage from "../hooks/useLocalstorage";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Modal from "../components/Modal";
import AddNews from "../components/AddNews";
import "../styles/admin.css";
import AddSlider from "../components/Admin/AddSlider";
export default function Admin() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [token, setToken] = useLocalStorage("auth_token", "");
  const { t } = useTranslation();
  // console.log(token);

  const navigate = useNavigate();
  useEffect(() => {
    if (token.length == 0 || !token) return navigate("/login");
  }, [token]);

  return (
    <div>
      <section id="news">
        <h2>Добро пожаловать на страницу админстратора.</h2>
      </section>
    </div>
  );
}
