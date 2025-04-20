import { useTranslation } from "react-i18next";

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
        </div>
      </div>
    </footer>
  );
}
