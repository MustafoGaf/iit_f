import { useNavigate } from "react-router";
import useLocalStorage from "../hooks/useLocalstorage";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Modal from "../components/Modal";
import AddNews from "../components/AddNews";

export default function Admin() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [token, setToken] = useLocalStorage("auth_token", "");
  const { t } = useTranslation();
  console.log(token);

  const navigate = useNavigate();
  useEffect(() => {
    if (!token) return navigate("/login");
  }, [token]);

  return (
    <div>
      <section class="slide">
        <div class="slider_1">
          <img src="/img/slider1.jpg" alt="Slider" />
          <div class="descriptions">
            <h3>{t("home.slider1")}</h3>
          </div>
        </div>
      </section>
      <button onClick={() => setModalOpen(true)}>Открыть модалку</button>
      <section id="news">
        <h2>{t("home.news")}</h2>
        <div class="news-container">
          <div class="news-card">
            <a href="">
              <img src="/img/news1.jpg" alt="Новость 1" />
            </a>
            <div class="news-content">
              <div class="news-label">{t("header.ahbor")}</div>
              <div class="news-title">
                <a href="">{t("home.title_news")}</a>
              </div>
              <div class="news-date">22.02.2025</div>
              <div class="news-text">{t("home.text_news")}</div>
            </div>
          </div>
          <div class="news-card">
            <a href="">
              <img src="/img/news1.jpg" alt="Новость 1" />
            </a>
            <div class="news-content">
              <div class="news-label">{t("header.ahbor")}</div>
              <div class="news-title">
                <a href="">{t("home.title_news")}</a>
              </div>
              <div class="news-date">22.02.2025</div>
              <div class="news-text">{t("home.text_news")}</div>
            </div>
          </div>
          <div class="news-card">
            <a href="">
              <img src="/img/news1.jpg" alt="Новость 1" />
            </a>
            <div class="news-content">
              <div class="news-label">{t("header.ahbor")}</div>
              <div class="news-title">
                <a href="">{t("home.title_news")}</a>
              </div>
              <div class="news-date">22.02.2025</div>
              <div class="news-text">{t("home.text_news")}</div>
            </div>
          </div>
          <div class="news-card">
            <a href="">
              <img src="/img/news1.jpg" alt="Новость 1" />
            </a>
            <div class="news-content">
              <div class="news-label">{t("header.ahbor")}</div>
              <div class="news-title">
                <a href="">{t("home.title_news")}</a>
              </div>
              <div class="news-date">22.02.2025</div>
              <div class="news-text">{t("home.text_news")}</div>
            </div>
          </div>
          <div class="news-card">
            <a href="">
              <img src="/img/news1.jpg" alt="Новость 1" />
            </a>
            <div class="news-content">
              <div class="news-label">{t("header.ahbor")}</div>
              <div class="news-title">
                <a href="">{t("home.title_news")}</a>
              </div>
              <div class="news-date">22.02.2025</div>
              <div class="news-text">{t("home.text_news")}</div>
            </div>
          </div>
          <div class="news-card">
            <a href="">
              <img src="/img/news1.jpg" alt="Новость 1" />
            </a>
            <div class="news-content">
              <div class="news-label">{t("header.ahbor")}</div>
              <div class="news-title">
                <a href="">{t("home.title_news")}</a>
              </div>
              <div class="news-date">22.02.2025</div>
              <div class="news-text">{t("home.text_news")}</div>
            </div>
          </div>
          <div class="news-card">
            <a href="">
              <img src="/img/news1.jpg" alt="Новость 1" />
            </a>
            <div class="news-content">
              <div class="news-label">{t("header.ahbor")}</div>
              <div class="news-title">
                <a href="">{t("home.title_news")}</a>
              </div>
              <div class="news-date">22.02.2025</div>
              <div class="news-text">{t("home.text_news")}</div>
            </div>
          </div>
          <div class="news-card">
            <div className="add_news" onClick={() => setModalOpen(true)}>
              <div>+</div>
              <div>Добавить новости</div>
            </div>
          </div>
        </div>
      </section>
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <AddNews />
      </Modal>
    </div>
  );
}
