import { useState } from "react";
import { useLang, T } from "../context/LangContext";
import useNavScroll, { scrollToSection } from "../hooks/useNavScroll";

const NAV_ITEMS = [
  { id: "process", ko: "제작 과정", ja: "製作工程" },
  { id: "types", ko: "제작 종류", ja: "製品種類" },
  { id: "pricing", ko: "가격 안내", ja: "価格案内" },
  { id: "calc", ko: "견적 계산기", ja: "見積計算" },
  { id: "portfolio", ko: "포트폴리오", ja: "実績" },
  { id: "faq", ko: "FAQ", ja: "FAQ" },
  { id: "contact", ko: "문의", ja: "お問合せ" },
];

export default function Navbar() {
  const { lang, setLang } = useLang();
  const { scrolled, activeSection } = useNavScroll();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = (id) => {
    scrollToSection(id);
    setMenuOpen(false);
  };

  return (
    <>
      <nav className={`topbar${scrolled ? " scrolled" : ""}`}>
        {/* 로고 */}
        <button
          className="nav-logo"
          onClick={() => handleNav("home")}
          style={{ background: "none", border: "none", cursor: "pointer" }}
        >
          HANA<sup>BAG</sup>
        </button>

        {/* 데스크탑 링크 */}
        <div className="nav-links">
          {NAV_ITEMS.map(({ id, ko, ja }) => (
            <button
              key={id}
              className={`nav-link${activeSection === id ? " active" : ""}`}
              onClick={() => handleNav(id)}
            >
              {lang === "ko" ? ko : ja}
            </button>
          ))}
        </div>

        {/* 우측 영역 */}
        <div className="nav-right">
          {/* 언어 토글 */}
          <div className="lang-toggle">
            <button
              className={`lang-btn${lang === "ko" ? " active" : ""}`}
              onClick={() => setLang("ko")}
            >
              한국어
            </button>
            <button
              className={`lang-btn${lang === "ja" ? " active" : ""}`}
              onClick={() => setLang("ja")}
            >
              日本語
            </button>
          </div>

          {/* CTA */}
          <button className="nav-cta" onClick={() => handleNav("contact")}>
            <T ko="견적 문의" ja="見積依頼" />
          </button>

          {/* 햄버거 */}
          <button
            className={`ham${menuOpen ? " open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="메뉴"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* 모바일 메뉴 */}
      <div className={`mobile-menu${menuOpen ? " open" : ""}`}>
        {NAV_ITEMS.map(({ id, ko, ja }) => (
          <button key={id} className="nav-link" onClick={() => handleNav(id)}>
            {lang === "ko" ? ko : ja}
          </button>
        ))}
      </div>
    </>
  );
}
