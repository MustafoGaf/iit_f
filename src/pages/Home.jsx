import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import Slider from "../components/Swiper";

export default function Home() {
  const { t } = useTranslation();
  const sliders = useSelector((state) => state.slider.data.data);
  return (
    <>
      <section class="slide">
        <Slider />
      </section>
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
        </div>
      </section>
    </>
  );
}
