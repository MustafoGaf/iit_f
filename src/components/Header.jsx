import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router";
import useLocalStorage from "../hooks/useLocalstorage";
import i18next from "../i18n";

export default function Header() {
  const { pathname } = useLocation();
  const { t } = useTranslation();
  const [language, setLanguage] = useLocalStorage("language", "ru");
  const handleLanguageChange = (lng) => {
    i18next.changeLanguage(lng);
    setLanguage(lng);
  };

  return (
    <header>
      <div className="top-bar">
        <div className="languages">
          <img
            src="/img/tajik.png"
            alt="TJ"
            title="Точики"
            onClick={() => handleLanguageChange("tj")}
          />
          <img
            src="/img/rus.png"
            alt="RU"
            title="Русский"
            onClick={() => handleLanguageChange("ru")}
          />
          <img
            src="/img/eng.png"
            alt="EN"
            title="English"
            onClick={() => handleLanguageChange("en")}
          />
        </div>
        <div className="contacts">
          <a href="#" className="a_facebook">
            <img src="/img/facebook.png" alt="fa-facebook" />
          </a>

          <a href="#">{t("header.ahbor")}</a>
          <a href="#">{t("header.tamos")}</a>
          <a href="#">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#">
            <i className="fab fa-youtube"></i>
          </a>
        </div>
      </div>
      <div className="logo-section">
        <div className="logo_div logo_tnu">
          <img src="/img/tnu_logo.png" alt="Логотип" />
        </div>
        <div className="site_name">
          <h1 className="name_iit">{t("header.name_iit")}</h1>
          <p>{t("header.tnu")}</p>
        </div>
        <div>
          <div className="logo_div logo_iit">
            <img src="/img/logo.jpg" alt="Логотип" />
          </div>
        </div>
        <div className="burger">
          <img src="/img/menu.png" alt="" />
        </div>
      </div>
      <nav className="nav_list">
        <ul className="ul_list">
          <li>
            <Link to="/" className={pathname == "/" ? "active" : ""}>
              {t("header.nav_asos")}
            </Link>
          </li>
          <li className="ul_li">
            <Link
              to={"/about"}
              className={pathname.includes("/about") ? "active" : ""}
            >
              {t("header.nav_about")}
            </Link>
            {/* <!-- <img src="/img/down.png" alt="down" /> --> */}
            <ul className="ul_li_ul">
              <li>
                <a href="">{t("header.nav_tarikh")}</a>
              </li>
              <li>
                <a href="">{t("header.nav_direcs")}</a>
              </li>
              <li className="ul_li1">
                <a href="">{t("header.nav_sokhtor")}</a>
                <ul className="ul_li_ul1">
                  <li>
                    <Link to={"/about/director"}>{t("header.nav_dir")}</Link>
                  </li>
                  <li>
                    <a href="">{t("header.nav_mu_dir")}</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="">{t("header.nav_suro")}</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">{t("header.nav_rohbar")}</a>
          </li>
          <li>
            <a href="#">{t("header.nav_ilm")}</a>
          </li>
          <li>
            <a href="#">{t("header.nav_suba")}</a>
          </li>
          <li>
            <a href="#">{t("header.nav_omuz")}</a>
          </li>
          <li>
            <a href="#">{t("header.nav_ahbor")}</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
