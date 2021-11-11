import styles from "./BecomeSponsorPage.module.css";
import { useTranslation, useLanguageQuery } from "next-export-i18n";

export default function BecomeSponsorPage() {
  const { t } = useTranslation();
  const [query] = useLanguageQuery();
  const pagelang = () => {
    if (typeof query !== "undefined") {
      if (query.lang == "en") {
        return "en";
      } else {
        return "fa";
      }
    } else {
      return "fa";
    }
  };
  return (
    <section>
      <div
        className={styles.becomeSponsorPageContainer}
        style={pagelang() == "en" ? { direction: "ltr" } : { direction: "rtl" }}
      >
        <h1>{t("pages.becomeSponsor.t1")}</h1>
        <div className={"bodyText"}>{t("pages.becomeSponsor.p1")}</div>
        <ul className={"bodyText"}>
          <li>{t("pages.becomeSponsor.p2")}</li>
        </ul>
      </div>
    </section>
  );
}
