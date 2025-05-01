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
  console.log(token);

  const navigate = useNavigate();
  useEffect(() => {
    if (token.length == 0 || !token) return navigate("/login");
  }, [token]);

  return (
    <div>
      <section id="news">
        <h2>{t("home.news")}</h2>
        <div className="news-container">
          <div className="news-card">
            <a href="">
              <img src="/img/news1.jpg" alt="Новость 1" />
            </a>
            <div className="news-content">
              <div className="news-label">{t("header.ahbor")}</div>
              <div className="news-title">
                <a href="">{t("home.title_news")}</a>
              </div>
              <div className="news-date">22.02.2025</div>
              <div className="news-text">{t("home.text_news")}</div>
            </div>
          </div>
          <div className="news-card">
            <a href="">
              <img src="/img/news1.jpg" alt="Новость 1" />
            </a>
            <div className="news-content">
              <div className="news-label">{t("header.ahbor")}</div>
              <div className="news-title">
                <a href="">{t("home.title_news")}</a>
              </div>
              <div className="news-date">22.02.2025</div>
              <div className="news-text">{t("home.text_news")}</div>
            </div>
          </div>
          <div className="news-card">
            <a href="">
              <img src="/img/news1.jpg" alt="Новость 1" />
            </a>
            <div className="news-content">
              <div className="news-label">{t("header.ahbor")}</div>
              <div className="news-title">
                <a href="">{t("home.title_news")}</a>
              </div>
              <div className="news-date">22.02.2025</div>
              <div className="news-text">{t("home.text_news")}</div>
            </div>
          </div>
          <div className="news-card">
            <a href="">
              <img src="/img/news1.jpg" alt="Новость 1" />
            </a>
            <div className="news-content">
              <div className="news-label">{t("header.ahbor")}</div>
              <div className="news-title">
                <a href="">{t("home.title_news")}</a>
              </div>
              <div className="news-date">22.02.2025</div>
              <div className="news-text">{t("home.text_news")}</div>
            </div>
          </div>
          <div className="news-card">
            <a href="">
              <img src="/img/news1.jpg" alt="Новость 1" />
            </a>
            <div className="news-content">
              <div className="news-label">{t("header.ahbor")}</div>
              <div className="news-title">
                <a href="">{t("home.title_news")}</a>
              </div>
              <div className="news-date">22.02.2025</div>
              <div className="news-text">{t("home.text_news")}</div>
            </div>
          </div>
          <div className="news-card">
            <a href="">
              <img src="/img/news1.jpg" alt="Новость 1" />
            </a>
            <div className="news-content">
              <div className="news-label">{t("header.ahbor")}</div>
              <div className="news-title">
                <a href="">{t("home.title_news")}</a>
              </div>
              <div className="news-date">22.02.2025</div>
              <div className="news-text">{t("home.text_news")}</div>
            </div>
          </div>
          <div className="news-card">
            <a href="">
              <img src="/img/news1.jpg" alt="Новость 1" />
            </a>
            <div className="news-content">
              <div className="news-label">{t("header.ahbor")}</div>
              <div className="news-title">
                <a href="">{t("home.title_news")}</a>
              </div>
              <div className="news-date">22.02.2025</div>
              <div className="news-text">{t("home.text_news")}</div>
            </div>
          </div>
          <div className="news-card">
            <div className="add_news" onClick={() => setModalOpen(true)}>
              <div>+</div>
              <div>Добавить новости</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
