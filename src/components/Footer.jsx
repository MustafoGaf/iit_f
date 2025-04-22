import { useTranslation } from "react-i18next";
import { Link } from "react-router";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer>
      <div class="container footer_block">
        <div class="footer_logo">
          <div class="logo_div">
            <img src="/img/logo.jpg" alt="" />
          </div>
        </div>
        <div class="footer_text">
          <h1>{t("footer.o_nas")}</h1>
          <p>{t("footer.desc")}</p>
          <Link to={"/admin"}>
            <p style="color:#212121">Душанбе 2025</p>
          </Link>
        </div>
      </div>
    </footer>
  );
}
