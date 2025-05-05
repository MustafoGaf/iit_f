import { useTranslation } from "react-i18next";
import { Link } from "react-router";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer>
      <div className="container footer_block">
        <div className="footer_logo">
          <div className="logo_div">
            <img src="/img/logo.jpg" alt="" />
          </div>
        </div>
        <div className="footer_text">
          <div className="footer_o_nas">
            <h1>{t("footer.o_nas")}</h1>
          </div>
          <p>{t("footer.desc")}</p>
          <Link to={"/admin"} style={{ "text-decoration": "none" }}>
            <p style={{ color: "#212121" }}>Душанбе 2025</p>
          </Link>
        </div>
      </div>
    </footer>
  );
}
