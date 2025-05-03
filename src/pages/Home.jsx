import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import Slider from "../components/Swiper";

export default function Home() {
  const { t } = useTranslation();
  const sliders = useSelector((state) => state.slider.data.data);
  return (
    <>
      <section className="slide">
        <Slider />
      </section>
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
        </div>
      </section>
    </>
  );
}
