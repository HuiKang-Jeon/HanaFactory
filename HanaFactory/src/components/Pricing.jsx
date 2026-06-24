import { T } from "../context/LangContext";
import useScrollReveal from "../hooks/useScrollReveal";
import { scrollToSection } from "../hooks/useNavScroll";

const CARDS = [
  {
    //   ico: "🛍️",
    cat: { ko: "기본형", ja: "ベーシック" },
    nm: { ko: "에코백", ja: "エコバッグ" },
    from: { ko: "개당 단가 (50개 기준)", ja: "個あたり単価（50枚基準）" },
    range: "₩3,000~",
    info: { ko: "대량일수록 단가↓", ja: "大量ほど単価↓" },
    items: [
      { ko: "캔버스 / 면 / 부직포", ja: "キャンバス / コットン / 不織布" },
      { ko: "로고 인쇄 포함 가능", ja: "ロゴ印刷込み可能" },
      { ko: "납기 약 2~3주", ja: "納期約2〜3週間" },
    ],
  },
  {
    // ico: '🎒', featured: true,
    badge: { ko: "인기", ja: "人気" },
    cat: { ko: "중급형", ja: "ミドル" },
    nm: { ko: "백팩", ja: "バックパック" },
    from: { ko: "개당 단가 (100개 기준)", ja: "個あたり単価（100個基準）" },
    range: "₩10,000~",
    info: { ko: "구조·소재에 따라 변동", ja: "構造・素材により変動" },
    items: [
      {
        ko: "나일론 / 폴리에스터 / 메쉬",
        ja: "ナイロン / ポリエステル / メッシュ",
      },
      { ko: "내부 포켓 구성 가능", ja: "内部ポケット構成可能" },
      { ko: "납기 약 3~5주", ja: "納期約3〜5週間" },
    ],
  },
  {
    // ico: "✏️",
    cat: { ko: "맞춤형", ja: "カスタム" },
    nm: { ko: "OEM 전용", ja: "OEM専用" },
    from: { ko: "디자인·소재·수량 협의 후", ja: "デザイン・素材・数量協議後" },
    range_ko: "문의 후",
    range_ja: "要相談",
    info: { ko: "브랜드 전용 기획 제작", ja: "ブランド専用企画製作" },
    items: [
      { ko: "도면 / 샘플 기반 제작", ja: "図面 / サンプルベース制作" },
      { ko: "전용 부자재 · 태그 · 라벨", ja: "専用副資材・タグ・ラベル" },
      { ko: "납기 협의", ja: "納期要相談" },
    ],
  },
];

export default function Pricing() {
  const r0 = useScrollReveal();
  const r1 = useScrollReveal();
  const r2 = useScrollReveal();
  const r3 = useScrollReveal();
  const r4 = useScrollReveal();
  const r5 = useScrollReveal();

  return (
    <section id="pricing">
      <div className="container">
        <p className="sec-label r" ref={r0}>
          <T ko="가격 안내" ja="価格案内" />
        </p>
        <h2 className="sec-title r d1" ref={r1}>
          <T ko="투명한 가격" ja="透明な価格" />
        </h2>
        <div className="bar r d2" ref={r2} />
        <p className="sec-desc r d3" ref={r3}>
          <T
            ko="가격을 숨기지 않습니다. 범위를 먼저 확인하고 정확한 견적은 문의해 주세요."
            ja="価格を隠しません。まず範囲をご確認いただき、正確なお見積もりはお問い合わせください。"
          />
        </p>

        <div className="price-top r d4" ref={r4}>
          {CARDS.map((c) => (
            <div
              key={c.nm.ko}
              className={`price-card${c.featured ? " featured" : ""}`}
            >
              {c.badge && (
                <div className="price-badge-top">
                  <T ko={c.badge.ko} ja={c.badge.ja} />
                </div>
              )}
              <div className="price-ico">{c.ico}</div>
              <div className="price-cat">
                <T ko={c.cat.ko} ja={c.cat.ja} />
              </div>
              <div className="price-nm">
                <T ko={c.nm.ko} ja={c.nm.ja} />
              </div>
              <div className="price-from">
                <T ko={c.from.ko} ja={c.from.ja} />
              </div>
              <div className="price-range">
                {c.range || <T ko={c.range_ko} ja={c.range_ja} />}
              </div>
              <div className="price-info">
                <T ko={c.info.ko} ja={c.info.ja} />
              </div>
              <ul className="price-ul">
                {c.items.map((item) => (
                  <li key={item.ko}>
                    <T ko={item.ko} ja={item.ja} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="moq-strip r" ref={r5}>
          <div className="moq-ico">⚡</div>
          <div className="moq-txt">
            <strong>
              <T
                ko="최소 제작 수량: 50~100개부터 가능 (제품에 따라 상이)"
                ja="最小ロット：50〜100個から対応可能（製品により異なる）"
              />
            </strong>
            <T
              ko={
                <>
                  대량 주문 시 추가 단가 할인 적용. 정확한 가격은 견적 문의를
                  이용해 주세요. →{" "}
                  <button
                    onClick={() => scrollToSection("contact")}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      color: "var(--amber)",
                      fontFamily: "inherit",
                      fontSize: "inherit",
                      padding: 0,
                    }}
                  >
                    견적 문의하기
                  </button>
                </>
              }
              ja={
                <>
                  大量注文の場合は追加割引あり。正確なお見積もりはフォームよりご連絡ください。→{" "}
                  <button
                    onClick={() => scrollToSection("contact")}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      color: "var(--amber)",
                      fontFamily: "inherit",
                      fontSize: "inherit",
                      padding: 0,
                    }}
                  >
                    お見積もり依頼
                  </button>
                </>
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
}
