import styles from "./SpeakersPage.module.css";
import { useTranslation, useLanguageQuery } from "next-export-i18n";
import SpeakerCard from "./speakersCard";

export default function SpeakersPage() {
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
        className={styles.speakersPageContainer}
        style={pagelang() == "en" ? { direction: "ltr" } : { direction: "rtl" }}
      >
        <h1 style={{paddingBottom:"50px"}}>{t("pages.speakers.t1")}</h1>
        <SpeakerCard speaker="speaker6" />
        <SpeakerCard speaker="speaker7" />
        <SpeakerCard speaker="speaker8" />
        <SpeakerCard speaker="speaker9" />
        <SpeakerCard speaker="speaker1" />
        <SpeakerCard speaker="speaker2" />
        <SpeakerCard speaker="speaker3" />
        <SpeakerCard speaker="speaker4" />
        <SpeakerCard speaker="speaker5" />
      </div>
    </section>
  );
}
