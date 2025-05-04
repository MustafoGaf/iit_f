import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import Slider from "../components/Swiper";
import { Link } from "react-router";

export default function Home() {
  const { t } = useTranslation();
  const sliders = useSelector((state) => state.slider.data.data);
  const news = useSelector((state) => state.news.data.data).filter(
    (n) => n.is_active == true
  );

  return (
    <>
      <section className="slide">
        <Slider />
      </section>
      <section id="news">
        <h2>{t("home.news")}</h2>
        <div className="news-container">
          {news.map((n) => (
            <Link
              to={"news/" + n.id}
              key={n.id}
              style={{ textDecoration: "none" }}
            >
              <div className="news-card" key={n.id}>
                <img src={n.image} alt="Новость 1" />

                <div className="news-content">
                  <div className="news-label">{t("header.ahbor")}</div>
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
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
