import { useState } from "react";
import { T, useLang } from "../context/LangContext";
import useScrollReveal from "../hooks/useScrollReveal";
import { scrollToSection } from "../hooks/useNavScroll";

// 기본 단가 테이블git --version
const BASE = { eco: 3500, cross: 6000, back: 10000, custom: 18000 };
const MAT = { basic: 0, mid: 1500, high: 4000 };
const PRINT = { none: 0, print: 800, emb: 1200 };

// const fmt = (n) => "₩" + n.toLocaleString();

function RadioGroup({ options, selected, onSelect }) {
  return (
    <div className="calc-radios">
      {options.map((o) => (
        <button
          key={o.value}
          className={`calc-radio${selected === o.value ? " sel" : ""}`}
          onClick={() => onSelect(o.value)}
        >
          <T ko={o.ko} ja={o.ja} />
        </button>
      ))}
    </div>
  );
}

export default function Calculator() {
  const { lang } = useLang();

  const fmt = (n) => {
    if (lang === "ja") return "¥" + Math.round(n * 0.11).toLocaleString();
    return "₩" + n.toLocaleString();
  };

  const [type, setType] = useState("eco");
  const [mat, setMat] = useState("basic");
  const [print, setPrint] = useState("none");
  const [qty, setQty] = useState(100);

  const raw = BASE[type] + MAT[mat];
  const disc =
    qty >= 5000
      ? Math.round(raw * 0.2)
      : qty >= 1000
        ? Math.round(raw * 0.12)
        : qty >= 500
          ? Math.round(raw * 0.07)
          : qty >= 200
            ? Math.round(raw * 0.03)
            : 0;
  const prt = PRINT[print];
  const unit = raw - disc + prt;
  const total = unit * qty;

  const r0 = useScrollReveal();
  const r1 = useScrollReveal();
  const r2 = useScrollReveal();
  const r3 = useScrollReveal();
  const r4 = useScrollReveal();

  return (
    <section id="calc">
      <div className="container">
        <p className="sec-label r" ref={r0}>
          <T ko="자동 견적 계산기" ja="自動見積計算機" />
        </p>
        <h2 className="sec-title r d1" ref={r1}>
          <T ko="대략 얼마일까요?" ja="大体おいくらですか？" />
        </h2>
        <div className="bar r d2" ref={r2} />
        <p className="sec-desc r d3" ref={r3}>
          <T
            ko="참고용 예상 단가입니다. 정확한 견적은 담당자 상담 후 확정됩니다."
            ja="参考用の予想単価です。正確なお見積もりは担当者との相談後に確定します。"
          />
        </p>

        <div className="calc-wrap r d4" ref={r4}>
          {/* 입력 패널 */}
          <div className="calc-inputs">
            <div className="calc-field">
              <div className="calc-label">
                <T ko="제품 종류" ja="製品種類" />
              </div>
              <RadioGroup
                selected={type}
                onSelect={setType}
                options={[
                  { value: "eco", ko: "에코백", ja: "エコバッグ" },
                  { value: "cross", ko: "크로스백", ja: "クロスバッグ" },
                  { value: "back", ko: "백팩", ja: "バックパック" },
                  { value: "custom", ko: "OEM", ja: "OEM" },
                ]}
              />
            </div>

            <div className="calc-field">
              <div className="calc-label">
                <T ko="소재" ja="素材" />
              </div>
              <RadioGroup
                selected={mat}
                onSelect={setMat}
                options={[
                  {
                    value: "basic",
                    ko: "기본 (면/부직포)",
                    ja: "基本 (綿/不織布)",
                  },
                  {
                    value: "mid",
                    ko: "중급 (나일론/폴리)",
                    ja: "中級 (ナイロン/ポリ)",
                  },
                  {
                    value: "high",
                    ko: "고급 (가죽/코듀라)",
                    ja: "高級 (レザー/コーデュラ)",
                  },
                ]}
              />
            </div>

            <div className="calc-field">
              <div className="calc-label">
                <T ko="인쇄 / 자수" ja="印刷 / 刺繍" />
              </div>
              <RadioGroup
                selected={print}
                onSelect={setPrint}
                options={[
                  { value: "none", ko: "없음", ja: "なし" },
                  {
                    value: "print",
                    ko: "인쇄 (실크/UV)",
                    ja: "印刷 (シルク/UV)",
                  },
                  { value: "emb", ko: "자수", ja: "刺繍" },
                ]}
              />
            </div>

            <div className="calc-field">
              <div className="calc-label">
                <T ko="제작 수량" ja="製作数量" />
                <span>
                  {qty.toLocaleString()}
                  <T ko="개" ja="個" />
                </span>
              </div>
              <input
                type="range"
                min="50"
                max="5000"
                step="50"
                value={qty}
                onChange={(e) => setQty(Number(e.target.value))}
              />
              <div className="qty-ticks">
                <span>50</span>
                <span>500</span>
                <span>1,000</span>
                <span>5,000</span>
              </div>
            </div>
          </div>

          {/* 결과 패널 */}
          <div className="calc-result">
            <div>
              <div className="calc-result-title">
                <T ko="예상 견적 결과" ja="予想見積もり結果" />
              </div>
              <div className="calc-rows">
                <div className="calc-row">
                  <span className="calc-row-label">
                    <T ko="기본 단가" ja="基本単価" />
                  </span>
                  <span className="calc-row-val">{fmt(raw)}</span>
                </div>
                <div className="calc-row">
                  <span className="calc-row-label">
                    <T ko="수량 할인" ja="数量割引" />
                  </span>
                  <span className="calc-row-val calc-discount">
                    {disc > 0 ? "-" + fmt(disc) : "-₩0"}
                  </span>
                </div>
                <div className="calc-row">
                  <span className="calc-row-label">
                    <T ko="인쇄/자수 추가" ja="印刷/刺繍追加" />
                  </span>
                  <span className="calc-row-val">
                    {prt > 0 ? "+" + fmt(prt) : "+₩0"}
                  </span>
                </div>
                <div className="calc-row">
                  <span className="calc-row-label">
                    <T ko="적용 단가" ja="適用単価" />
                  </span>
                  <span className="calc-row-val calc-unit-hi">{fmt(unit)}</span>
                </div>
              </div>

              <div className="calc-total">
                <div className="calc-total-label">
                  <T ko="총 예상 금액" ja="合計予想金額" />
                </div>
                <div className="calc-total-num">{fmt(total)}</div>
                <div className="calc-total-sub">
                  VAT <T ko="별도 · 참고용" ja="別途 · 参考用" />
                </div>
              </div>

              <p className="calc-note">
                <T
                  ko="⚠️ 실제 단가는 디자인 복잡도·부자재·납기 등에 따라 달라집니다. 정확한 견적은 문의폼을 이용해 주세요."
                  ja="⚠️ 実際の単価はデザインの複雑さ・副資材・納期等により異なります。正確なお見積もりはお問い合わせフォームよりどうぞ。"
                />
              </p>
            </div>

            <button
              className="btn-primary"
              style={{ justifyContent: "center" }}
              onClick={() => scrollToSection("contact")}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
              </svg>
              <T ko="정확한 견적 문의하기" ja="正確なお見積もり依頼" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
