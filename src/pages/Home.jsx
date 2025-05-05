import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import Slider from "../components/Swiper";
import { href, Link } from "react-router";

export default function Home() {
  const { t } = useTranslation();
  const mufidAnchor = [
    {
      id: 1,
      href: "http://president.tj/",
      image: "https://tnu.tj/wp-content/uploads/2023/06/baner-4.png",
      width: "207",
      height: "60",
    },
    {
      id: 2,
      href: "https://majmilli.tj/",
      image: "https://tnu.tj/wp-content/uploads/2023/06/baner-2-300x78.png",
      width: "207",
      height: "60",
    },
    {
      id: 3,
      href: "https://parlament.tj/",
      image: "https://tnu.tj/wp-content/uploads/2023/06/baner-2-1-300x78.png",
      width: "207",
      height: "60",
    },
    {
      id: 4,
      href: "http://dushanbe.tj/",
      image: "https://tnu.tj/wp-content/uploads/2023/06/baner-5.jpg",
      width: "207",
      height: "60",
    },
    {
      id: 5,
      href: "https://mfa.tj/",
      image: "https://tnu.tj/wp-content/uploads/2023/06/3.png",
      width: "207",
      height: "60",
    },
    {
      id: 6,
      href: "http://khovar.tj/",
      image: "https://tnu.tj/wp-content/uploads/2023/06/baner-7.png",
      width: "207",
      height: "60",
    },
    {
      id: 7,
      href: "https://maorif.tj/",
      image: "https://tnu.tj/wp-content/uploads/2023/06/vazorat-300x78.png",
      width: "207",
      height: "60",
    },
    {
      id: 8,
      href: "https://mmk.tj/",
      image: "https://tnu.tj/wp-content/uploads/2023/06/5.png",
      width: "207",
      height: "60",
    },
    {
      id: 9,
      href: "https://adliya.tj/",
      image: "https://tnu.tj/wp-content/uploads/2023/06/banner_4.png",
      width: "207",
      height: "60",
    },
    {
      id: 10,
      href: "https://www.prokuratura.tj/",
      image: "https://tnu.tj/wp-content/uploads/2023/06/bezymjannyj.png",
      width: "207",
      height: "60",
    },
    {
      id: 11,
      href: "https://ansmi.tj/",
      image: "https://tnu.tj/wp-content/uploads/2023/06/4.png",
      width: "207",
      height: "60",
    },
    {
      id: 11,
      href: "http://moliya.tj/",
      image: "https://tnu.tj/wp-content/uploads/2023/06/banner_5.png",
      width: "207",
      height: "60",
    },
  ];
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
        <div className="black_text">
          <h2>{t("home.news")}</h2>
        </div>
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
      <section>
        <div className="black_text">
          <h2>{t("home.mufid")}</h2>
        </div>
        <div className="mufid">
          <ul className="mufid_list">
            {mufidAnchor.map((m) => (
              <li key={m.id}>
                <a href={m.href}>
                  <img src={m.image} alt="banner1" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
