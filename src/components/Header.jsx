import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router";
import useLocalStorage from "../hooks/useLocalstorage";
import i18next from "../i18n";
import { useEffect, useState } from "react";

export default function Header() {
  const [openNav, setOpenNav] = useState(false);
  const [onas, setOnas] = useState(false);
  const [str, setStr] = useState(false);
  const [nauk, setNauk] = useState(false);
  const [labor, setLabor] = useState(false);
  const [rukovod, setRukovod] = useState(false);
  const [otdel, setOtdel] = useState(false);

  const { pathname } = useLocation();
  const { t } = useTranslation();

  const [language, setLanguage] = useLocalStorage("language", "ru");
  const handleLanguageChange = (lng) => {
    i18next.changeLanguage(lng);
    setLanguage(lng);
  };
  useEffect(() => {
    setLabor(false);
    setNauk(false);
    setOnas(false);
    setOpenNav(false);
    setOtdel(false);
    setRukovod(false);
    setStr(false);
  }, [pathname]);
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
          <a
            href="https://www.facebook.com/groups/4324993637511694/?ref=share&mibextid=NSMWBT"
            className="a_facebook"
          >
            <img src="/img/facebook.png" alt="fa-facebook" />
          </a>

          <a href="#">{t("header.elom")}</a>
          <a href="#">{t("header.tamos")}</a>
          <a href="#">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#">
            <i className="fab fa-youtube"></i>
          </a>
        </div>
        <div className="facebook_section">
          <a
            href="https://www.facebook.com/groups/4324993637511694/?ref=share&mibextid=NSMWBT"
            className="a_facebook"
          >
            <img src="/img/facebook.png" alt="fa-facebook" />
          </a>
        </div>
      </div>
      <div className="logo-section">
        <div className="logo_div logo_tnu">
          <img src="/img/tnu_logo.png" alt="Логотип" />
        </div>
        <div className="site_name">
          <h1 className="name_iit">{t("header.name_iit")}</h1>
          <p className="name_iit">{t("header.tnu")}</p>
        </div>
        <div>
          <div className="logo_div logo_iit">
            <img src="/img/logo.jpg" alt="Логотип" />
          </div>
        </div>
        <div className="burger" onClick={() => setOpenNav(!openNav)}>
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
                <Link to="/about/tarih">{t("header.nav_tarikh")}</Link>
              </li>
              <li>
                <Link to="/about/directors">{t("header.nav_direcs")}</Link>
              </li>
            </ul>
          </li>
          <li className="ul_li">
            <Link
              to={"/"}
              className={pathname.includes("/rohbar") ? "active" : ""}
            >
              {t("header.nav_sokhtor")}
            </Link>
            {/* <!-- <img src="/img/down.png" alt="down" /> --> */}
            <ul className="ul_li_ul">
              <li className="ul_li1">
                <a href="">{t("header.nav_rohbar")}</a>
                <ul className="ul_li_ul1">
                  <li>
                    <Link to={"/rohbar/director"}>{t("header.nav_dir")}</Link>
                  </li>
                  <li>
                    <Link to={"/rohbar/muovin"}>{t("header.nav_mu_dir")}</Link>
                  </li>
                </ul>
              </li>
              <li className="ul_li1 ">
                <a href="">{t("header.nav_suba")}</a>
                <ul
                  className="ul_li_ul1 ul_li_ul_shuro"
                  style={{ width: "420px" }}
                >
                  <li>
                    <Link to="/">{t("subaho.suba1")}</Link>
                  </li>
                  <li>
                    <Link to="/shubaho/muhosibot">{t("subaho.suba2")}</Link>
                  </li>

                  <li>
                    <Link to="/">{t("subaho.suba3")}</Link>
                  </li>
                  <li>
                    <Link to="/">{t("subaho.suba4")}</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="ul_li">
            <Link
              to={"/"}
              className={pathname.includes("/ilm") ? "active" : ""}
            >
              {t("header.nav_ilm")}
            </Link>
            {/* <!-- <img src="/img/down.png" alt="down" /> --> */}
            <ul className="ul_li_ul">
              <li>
                <Link to={"/ilm/loihaho"}>{t("ilm.ilm1")}</Link>
              </li>
              <li>
                <Link to={"/ilm/confrensiyaho"}>{t("ilm.ilm2")}</Link>
              </li>
              <li>
                <Link to={"/"}>{t("ilm.ilm3")}</Link>
              </li>
              <li>
                <Link to={"/"}>{t("ilm.ilm4")}</Link>
              </li>
              <li>
                <Link to={"/"}>{t("ilm.ilm41")}</Link>
              </li>
              <li>
                <Link to={"/ilm/shuro"}>{t("ilm.ilm5")}</Link>
              </li>
            </ul>
          </li>

          <li className="ul_li">
            <Link
              to={"/"}
              className={pathname.includes("/ozmoishgoh") ? "active" : ""}
            >
              {t("header.nav_omuz")}
            </Link>
            {/* <!-- <img src="/img/down.png" alt="down" /> --> */}
            <ul className="ul_li_ul ul_li_ul_shuro ul_li_ul_ozmoish">
              <li>
                <Link to="/ozmoishgoh/glitserin">{t("ozmoish.oz1")}</Link>
              </li>
              <li>
                <Link to="/">{t("ozmoish.oz2")}</Link>
              </li>

              <li>
                <Link to="/ozmoishgoh/fizika">{t("ozmoish.oz3")}</Link>
              </li>
              <li>
                <Link to="/">{t("ozmoish.oz4")}</Link>
              </li>
              <li>
                <Link to="/ozmoishgoh/nanotech">{t("ozmoish.oz5")}</Link>
              </li>
            </ul>
          </li>

          <li>
            <a href="#">{t("header.nav_ahbor")}</a>
          </li>
        </ul>
      </nav>

      {/* для мобильная версия  */}
      <nav className={`nav_list_m ${openNav ? "d_block" : "d_none"}`}>
        <ul className="ul_list">
          <li>
            <Link to="/" className={pathname == "/" ? "active" : ""}>
              {t("header.nav_asos")}
            </Link>
          </li>
          <li className="ul_li">
            <div className="div_a_down">
              <Link
                to={"/about"}
                className={pathname.includes("/about") ? "active" : ""}
              >
                {t("header.nav_about")}
              </Link>
              <div className="nav_down" onClick={() => setOnas(!onas)}>
                <img
                  src="/img/down.png"
                  alt="down"
                  className={onas ? "res1" : "res2"}
                />
              </div>
            </div>
            <ul className={`ul_li_ul ${onas ? "active_ul" : "d_none"}`}>
              <li>
                <Link to="/about/tarih">{t("header.nav_tarikh")}</Link>
              </li>
              <li>
                <Link to="/about/directors">{t("header.nav_direcs")}</Link>
              </li>
            </ul>
          </li>
          <li className="ul_li">
            <div className="div_a_down">
              <Link
                to={"/"}
                className={pathname.includes("/rohbar") ? "active" : ""}
              >
                {t("header.nav_sokhtor")}
              </Link>
              <div className="nav_down" onClick={() => setStr(!str)}>
                <img
                  src="/img/down.png"
                  alt="down"
                  className={str ? "res1" : "res2"}
                />
              </div>
            </div>
            <ul className={`ul_li_ul ${str ? "active_ul" : "d_none"}`}>
              <li className="ul_li1">
                <div className="div_a_down">
                  <a href="">{t("header.nav_rohbar")}</a>
                  <div
                    className="nav_down"
                    onClick={() => setRukovod(!rukovod)}
                  >
                    <img
                      src="/img/down.png"
                      alt="down"
                      className={rukovod ? "res1" : "res2"}
                    />
                  </div>
                </div>
                <ul className={`ul_li_ul1 ${rukovod ? "active_ul" : "d_none"}`}>
                  <li>
                    <Link to={"/rohbar/director"}>{t("header.nav_dir")}</Link>
                  </li>
                  <li>
                    <Link to={"/rohbar/muovin"}>{t("header.nav_mu_dir")}</Link>
                  </li>
                </ul>
              </li>
              <li className="ul_li1 ">
                <div className="div_a_down">
                  <a href="">{t("header.nav_suba")}</a>
                  <div className="nav_down" onClick={() => setOtdel(!otdel)}>
                    <img
                      src="/img/down.png"
                      alt="down"
                      className={otdel ? "res1" : "res2"}
                    />
                  </div>
                </div>
                <ul
                  className={`ul_li_ul1 ul_li_ul_shuro ${
                    otdel ? "active_ul" : "d_none"
                  }`}
                  style={{ width: "420px" }}
                >
                  <li>
                    <Link to="/">{t("subaho.suba1")}</Link>
                  </li>
                  <li>
                    <Link to="/shubaho/muhosibot">{t("subaho.suba2")}</Link>
                  </li>

                  <li>
                    <Link to="/">{t("subaho.suba3")}</Link>
                  </li>
                  <li>
                    <Link to="/">{t("subaho.suba4")}</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="ul_li">
            <div className="div_a_down">
              <Link
                to={"/"}
                className={pathname.includes("/ilm") ? "active" : ""}
              >
                {t("header.nav_ilm")}
              </Link>
              <div className="nav_down" onClick={() => setNauk(!nauk)}>
                <img
                  src="/img/down.png"
                  alt="down"
                  className={nauk ? "res1" : "res2"}
                />
              </div>
            </div>
            {/* <!-- <img src="/img/down.png" alt="down" /> --> */}
            <ul className={`ul_li_ul ${nauk ? "active_ul" : "d_none"}`}>
              <li>
                <Link to={"/ilm/loihaho"}>{t("ilm.ilm1")}</Link>
              </li>
              <li>
                <Link to={"/ilm/confrensiyaho"}>{t("ilm.ilm2")}</Link>
              </li>
              <li>
                <Link to={"/"}>{t("ilm.ilm3")}</Link>
              </li>
              <li>
                <Link to={"/"}>{t("ilm.ilm4")}</Link>
              </li>
              <li>
                <Link to={"/"}>{t("ilm.ilm41")}</Link>
              </li>
              <li>
                <Link to={"/ilm/shuro"}>{t("ilm.ilm5")}</Link>
              </li>
            </ul>
          </li>

          <li className="ul_li">
            <div className="div_a_down">
              <Link
                to={"/"}
                className={pathname.includes("/ozmoishgoh") ? "active" : ""}
              >
                {t("header.nav_omuz")}
              </Link>
              <div className="nav_down" onClick={() => setLabor(!labor)}>
                <img
                  src="/img/down.png"
                  alt="down"
                  className={labor ? "res1" : "res2"}
                />
              </div>
            </div>
            {/* <!-- <img src="/img/down.png" alt="down" /> --> */}
            <ul
              className={`ul_li_ul ul_li_ul_shuro ul_li_ul_ozmoish ${
                labor ? "active_ul" : "d_none"
              }`}
            >
              <li>
                <Link to="/ozmoishgoh/glitserin">{t("ozmoish.oz1")}</Link>
              </li>
              <li>
                <Link to="/">{t("ozmoish.oz2")}</Link>
              </li>

              <li>
                <Link to="/ozmoishgoh/fizika">{t("ozmoish.oz3")}</Link>
              </li>
              <li>
                <Link to="/">{t("ozmoish.oz4")}</Link>
              </li>
              <li>
                <Link to="/ozmoishgoh/nanotech">{t("ozmoish.oz5")}</Link>
              </li>
            </ul>
          </li>

          <li>
            <a href="#">{t("header.nav_ahbor")}</a>
          </li>
          <li className="contact_nav">
            <a href="#">{t("header.elom")}</a>
          </li>
          <li className="contact_nav">
            <a href="#">{t("header.tamos")}</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
