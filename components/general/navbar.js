import { useState } from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";
import {
  useTranslation,
  useLanguageQuery,
  LanguageSwitcher,
} from "next-export-i18n";

export default function Navbar(props) {
  const { t } = useTranslation();
  const [pageLanguage, setPageLanguage] = useState("fa");
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
    <div>
      <div
        className={styles.navbarContainer}
        style={
          pagelang() == "en" ? { direction: "ltr" } : { direction: "rtl" }
        }
      >
        <div className={styles.navbarPart1}>
          <div className={styles.menu}>
            <div className={styles.menuLine}></div>
            <div className={styles.menuLine}></div>
            <div className={styles.menuLine}></div>
          </div>
          <div className={styles.logo}>sdfلوگو</div>

          <ul className={styles.navbarList}>
            <NavItem navName={t("navbar.items.home.head")} navlink=""></NavItem>
            <NavItem navName={t("navbar.items.about.head")} navlink="about">
              <DropDownMenu
                pagesList={[
                  { name: t("navbar.items.about.item1"), link: "about" },
                  {
                    name: t("navbar.items.about.item2"),
                    link: "codeOfConduct",
                  },
                  { name: t("navbar.items.about.item3"), link: "organizers" },
                ]}
              />
            </NavItem>
            <NavItem
              navName={t("navbar.items.registration.head")}
              navlink="buyTicket"
            >
              <DropDownMenu
                pagesList={[
                  {
                    name: t("navbar.items.registration.item1"),
                    link: "buyTicket",
                  },
                  { name: t("navbar.items.registration.item2"), link: "aid" },
                  {
                    name: t("navbar.items.registration.item3"),
                    link: "jobOpportunities",
                  },
                ]}
              />
            </NavItem>
            <NavItem
              navName={t("navbar.items.sponsor.head")}
              navlink="sponsors"
            >
              <DropDownMenu
                pagesList={[
                  { name: t("navbar.items.sponsor.item1"), link: "sponsors" },
                  {
                    name: t("navbar.items.sponsor.item2"),
                    link: "becomeSponsor",
                  },
                ]}
              />
            </NavItem>
            <NavItem
              navName={t("navbar.items.schedule.head")}
              navlink="schedule"
            >
              <DropDownMenu
                pagesList={[
                  { name: t("navbar.items.schedule.item1"), link: "schedule" },
                  { name: t("navbar.items.schedule.item2"), link: "speakers" },
                ]}
              />
            </NavItem>
            <NavItem
              navName={t("navbar.items.setup.head")}
              navlink="setup"
            ></NavItem>
            <NavItem
              navName={t("navbar.items.become speaker.head")}
              navlink="becomeSpeaker"
            ></NavItem>
          </ul>
        </div>
        <div className={styles.navbarPart2}>
          <div className={styles.languageButton}>
            <LanguageSwitcher lang="en">
              <div
                onClick={() => {
                  setPageLanguage("en");
                }}
                className={
                  styles.languageButtonItem +
                  " " +
                  (pageLanguage == "en"
                    ? styles.languageButtonItemSelected
                    : "")
                }
              >
                EN
              </div>
            </LanguageSwitcher>
            <LanguageSwitcher lang="fa">
              <div
                onClick={() => {
                  setPageLanguage("fa");
                }}
                className={
                  styles.languageButtonItem +
                  " " +
                  (pageLanguage == "fa"
                    ? styles.languageButtonItemSelected
                    : "")
                }
              >
                فا
              </div>
            </LanguageSwitcher>
          </div>
          <div className={styles.buyTicketButton}>
            {t("navbar.buttons.buy-donate")}
          </div>
        </div>
      </div>
    </div>
  );
}

function NavItem(props) {
  const [open, setOpen] = useState(false);
  const [query] = useLanguageQuery();
  return (
    <div
      className={styles.navbarListItem}
      onMouseEnter={() => {
        setOpen(!open);
      }}
      onMouseLeave={() => {
        setOpen(!open);
      }}
    >
      <Link href={{ pathname: "/" + (props.navlink || ""), query: query }}>
        <a>{props.navName}</a>
      </Link>
      {/* <div className={styles.navbarItemsUnderline}></div> */}
      {open && props.children}
    </div>
  );
}

function DropDownMenu(props) {
  function DropDownItem(props) {
    const [query] = useLanguageQuery();
    return (
      <Link href={{ pathname: "/" + props.link, query: query }}>
        <div className={styles.dropDownMenuItems}>
          <a>{props.children}</a>
        </div>
      </Link>
    );
  }
  return (
    <div className={styles.dropDownMenu}>
      {props.pagesList.map((pageName) => (
        <DropDownItem key={pageName.name} link={pageName.link}>
          {pageName.name}
        </DropDownItem>
      ))}
    </div>
  );
}
