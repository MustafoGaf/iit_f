import { useDispatch, useSelector } from "react-redux";
import useLocalStorage from "../hooks/useLocalstorage";
import { useState } from "react";
import Modal from "../components/Modal";
import AddSlider from "../components/Admin/AddSlider";
import { getNews, getSliders } from "../api/sliders";
import { Link, useNavigate } from "react-router";
import Loading from "../components/Loading";
import AddNews from "../components/Admin/AddNews";
import EditNews from "../components/Admin/EditNews";
import { useTranslation } from "react-i18next";
const API = import.meta.env.VITE_API_URL;

export default function AdminNews() {
  const [loading, setLoading] = useState(false);
  const [id, setId] = useState(0);

  const [language, setLanguage] = useLocalStorage("language", "ru");
  const [openAdd, setOpenAdd] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const { t } = useTranslation();

  const news = useSelector((state) => state.news.data.data);
  const [token, setToken] = useLocalStorage("auth_token", "");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const deleteNews = async (id) => {
    setLoading(true);
    try {
      const response = await fetch(API + "/news/" + id, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();
      setLoading(false);

      if (response.ok) {
        dispatch(getNews());
      }
    } catch (error) {
      setLoading(false);

      if (false) {
        setToken("");
        navigate("/login");
      }
      console.log(error);
    }
  };

  const editNews = (id) => {
    setId(id);
    setOpenModal(true);
  };

  if (!news) {
    return (
      <>
        {openAdd && <AddNews onClose={() => setOpenAdd(false)} />}
        <div className="container_add">
          <button
            className="add-button"
            title="Добавить новость"
            onClick={() => setOpen(true)}
          >
            +
          </button>
          <h1>Добавить новое запис</h1>
        </div>
      </>
    );
  }
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div className="news-container">
          {news.map((n) => (
            <div className="news-card" key={n.id}>
              <img src={n.image} alt="Новость 1" />

              <div className="news-content">
                <div className="news-label" style={{ fontSize: "20px" }}>
                  {n.is_active ? "Активнен" : "Неактивен"}
                </div>
                <div className="news-title">
                  <p>
                    {n["title_" + localStorage.getItem("language") || "ru"]}
                  </p>
                </div>
                <div className="news-date">
                  {new Date(n.created_at).toLocaleDateString("ru-RU", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                  })}
                </div>
                <div className="news-text">
                  {n["desc_" + localStorage.getItem("language") || "ru"]}
                </div>
              </div>
              <div className="admin_news_btn action-buttons">
                <button className="btn btn-edit" onClick={() => editNews(n.id)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-6-6l6 6m0 0L10.5 21H6v-4.5L17 5z"
                    />
                  </svg>
                  Изменить
                </button>

                <button
                  className="btn btn-delete"
                  onClick={() => deleteNews(n.id)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5-3h4a1 1 0 011 1v1H9V5a1 1 0 011-1z"
                    />
                  </svg>
                  Удалить
                </button>
              </div>
            </div>
          ))}
        </div>
        {loading && <Loading />}
        <Modal isOpen={openModal} onClose={() => setOpenModal(false)}>
          <EditNews id={id} onClose={() => setOpenModal(false)} />
        </Modal>
        <div className="container_add">
          <button
            className="add-button"
            title="Добавить новость"
            onClick={() => setOpenAdd(!openAdd)}
          >
            {openAdd ? "X" : "+"}
          </button>
          <h1>{openAdd ? "Закыть окно добавление" : "Добавить новое запис"}</h1>
        </div>
        {openAdd && <AddNews onClose={() => setOpenAdd(false)} />}
      </div>
    </>
  );
}
