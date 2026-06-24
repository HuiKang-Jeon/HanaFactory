import { useState } from "react";
import { T } from "../context/LangContext";
import useScrollReveal from "../hooks/useScrollReveal";
import { useLang } from "../context/LangContext";

const CONTACT_INFO = [
  {
    ico: "📞",
    lbl: { ko: "전화", ja: "電話" },
    val: "080-7237-0597",
    sub: { ko: "평일 09:00 ~ 18:00", ja: "平日 09:00〜18:00" },
  },
  {
    ico: "✉️",
    lbl: { ko: "이메일", ja: "メール" },
    val: "hanakaban.co@gmail.com",
    sub: { ko: "24시간 접수", ja: "24時間受付" },
  },
  {
    ico: "💬",
    lbl: { ko: "카카오톡", ja: "カカオトーク" },
    val: "wjsgnlrkd18s2",
    sub: { ko: "빠른 상담 가능", ja: "迅速な相談対応" },
  },
  {
    ico: "📍",
    lbl: { ko: "공장 위치", ja: "工場所在地" },
    val: {
      ko: "〒120-0002 일본 도쿄도 아다치구 나카가와 4초메 24-7 카메아리 MS빌딩 2층",
      ja: "〒120-0002 東京都足立区中川4丁目24-7 亀有MSビル2階",
    },
    sub: {
      ko: "방문 상담 가능 (사전 예약 필수)",
      ja: "来社可（事前予約必須）",
    },
  },
];

const TYPE_OPTIONS = [
  { value: "", ko: "선택", ja: "選択" },
  { value: "eco", ko: "에코백", ja: "エコバッグ" },
  { value: "bp", ko: "백팩", ja: "バックパック" },
  { value: "cross", ko: "크로스백", ja: "クロスバッグ" },
  { value: "oem", ko: "OEM", ja: "OEM" },
  { value: "etc", ko: "기타", ja: "その他" },
];

export default function Contact() {
  const { lang } = useLang();
  const [form, setForm] = useState({
    name: "",
    tel: "",
    email: "",
    type: "",
    qty: "",
    msg: "",
  });
  const [fileName, setFileName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const r0 = useScrollReveal();
  const r1 = useScrollReveal();
  const r2 = useScrollReveal();
  const r3 = useScrollReveal();
  const r4 = useScrollReveal();

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const handleFile = (e) => {
    if (e.target.files.length > 0) {
      setFileName(
        e.target.files[0].name +
          (e.target.files.length > 1
            ? ` 외 ${e.target.files.length - 1}개`
            : ""),
      );
    }
  };

  const handleSubmit = () => {
    if (!form.name || !form.tel) {
      alert(
        lang === "ja"
          ? "お名前と電話番号は必須です。"
          : "이름과 연락처는 필수입니다.",
      );
      return;
    }
    // localStorage 에 저장 (관리자 페이지 연동)
    const inquiry = {
      id: Date.now(),
      ...form,
      date: new Date().toLocaleString("ko-KR"),
      status: "new",
    };
    const prev = JSON.parse(localStorage.getItem("kojo_inq") || "[]");
    localStorage.setItem("kojo_inq", JSON.stringify([inquiry, ...prev]));
    setSubmitted(true);
  };

  return (
    <section id="contact">
      <div className="container">
        <p className="sec-label r" ref={r0}>
          <T ko="견적 문의" ja="お見積もり" />
        </p>
        <h2 className="sec-title r d1" ref={r1}>
          <T ko="지금 바로 문의" ja="今すぐお問合せ" />
        </h2>
        <div className="bar r d2" ref={r2} />

        <div className="contact-wrap">
          {/* 왼쪽: 연락처 정보 */}
          <div className="contact-cards r d2" ref={r3}>
            {CONTACT_INFO.map((c, i) => (
              <div key={i} className="c-card">
                <div className="c-ico">{c.ico}</div>
                <div>
                  <div className="c-lbl">
                    <T ko={c.lbl.ko} ja={c.lbl.ja} />
                  </div>
                  <div className="c-val">
                    {typeof c.val === "object" ? (
                      <T ko={c.val.ko} ja={c.val.ja} />
                    ) : (
                      c.val
                    )}
                  </div>
                  <div className="c-sub">
                    <T ko={c.sub.ko} ja={c.sub.ja} />
                  </div>
                </div>
              </div>
            ))}
            <div className="map-box">
              <div className="map-box-ico">🗺️</div>
              <div className="map-box-txt">
                <T ko="공장 위치" ja="工場所在地" />
              </div>
              <div className="map-box-addr">
                <T
                  ko={
                    <>
                      〒120-0002 일본 도쿄도 아다치구 나카가와 4초메 24-7
                      카메아리 MS빌딩 2층
                      <br />
                      HANA 제조공장
                    </>
                  }
                  ja={
                    <>
                      〒120-0002 東京都足立区中川4丁目24-7 亀有MSビル2階
                      <br />
                      HANA バッグ工場
                    </>
                  }
                />
              </div>
            </div>
          </div>

          {/* 오른쪽: 폼 */}
          <div className="r d3" ref={r4}>
            <div className="form-box">
              <div className="form-title">
                <T ko="견적 문의" ja="お見積もり依頼" />
              </div>
              <p className="form-sub">
                <T
                  ko="문의 후 24시간 이내 담당자가 연락드립니다."
                  ja="24時間以内に担당者よりご連絡いたします。"
                />
              </p>

              {!submitted ? (
                <>
                  <div className="form-row">
                    <div className="form-g">
                      <label className="form-lbl">
                        <T ko="이름/업체명" ja="お名前/会社名" /> <em>*</em>
                      </label>
                      <input
                        className="form-inp"
                        type="text"
                        placeholder="홍길동 / (주)ABC"
                        value={form.name}
                        onChange={set("name")}
                      />
                    </div>
                    <div className="form-g">
                      <label className="form-lbl">
                        <T ko="연락처" ja="電話番号" /> <em>*</em>
                      </label>
                      <input
                        className="form-inp"
                        type="tel"
                        placeholder="010-0000-0000"
                        value={form.tel}
                        onChange={set("tel")}
                      />
                    </div>
                  </div>

                  <div className="form-g">
                    <label className="form-lbl">Email</label>
                    <input
                      className="form-inp"
                      type="email"
                      placeholder="example@email.com"
                      value={form.email}
                      onChange={set("email")}
                    />
                  </div>

                  <div className="form-row">
                    <div className="form-g">
                      <label className="form-lbl">
                        <T ko="제작 종류" ja="製作種類" />
                      </label>
                      <select
                        className="form-sel"
                        value={form.type}
                        onChange={set("type")}
                      >
                        {TYPE_OPTIONS.map((o) => (
                          <option key={o.value} value={o.value}>
                            {lang === "ko" ? o.ko : o.ja}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="form-g">
                      <label className="form-lbl">
                        <T ko="예상 수량" ja="予定数量" />
                      </label>
                      <input
                        className="form-inp"
                        type="number"
                        placeholder="100"
                        value={form.qty}
                        onChange={set("qty")}
                      />
                    </div>
                  </div>

                  <div className="form-g">
                    <label className="form-lbl">
                      <T ko="상세 내용" ja="詳細内容" />
                    </label>
                    <textarea
                      className="form-ta"
                      placeholder="참고 디자인, 소재, 납기 등을 입력해 주세요."
                      value={form.msg}
                      onChange={set("msg")}
                    />
                  </div>

                  <div className="form-g">
                    <label className="form-lbl">
                      <T ko="파일 첨부" ja="ファイル添付" />
                      <span
                        style={{
                          color: "var(--mid)",
                          textTransform: "none",
                          fontSize: 10,
                          letterSpacing: 0,
                        }}
                      >
                        (<T ko="디자인/이미지" ja="デザイン/画像" />)
                      </span>
                    </label>
                    <div className="file-drop">
                      <input
                        type="file"
                        multiple
                        accept="image/*,.pdf,.ai,.psd"
                        onChange={handleFile}
                      />
                      <div className="file-drop-txt">
                        <strong>
                          📎{" "}
                          {fileName || (
                            <T ko="파일 첨부하기" ja="ファイルを添付" />
                          )}
                        </strong>
                        {!fileName && (
                          <T
                            ko="클릭하거나 드래그하세요 (최대 10MB)"
                            ja="クリックまたはドラッグ&ドロップ (最大10MB)"
                          />
                        )}
                      </div>
                    </div>
                  </div>

                  <button className="form-btn" onClick={handleSubmit}>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <line x1="22" y1="2" x2="11" y2="13" />
                      <polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
                    <T ko="견적 문의 전송" ja="お見積もりを送信" />
                  </button>
                  <p className="form-note">
                    <T
                      ko="입력 정보는 견적 상담 이외의 목적으로 사용되지 않습니다."
                      ja="入力情報はお見積もり相談以外に使用されません。"
                    />
                  </p>
                </>
              ) : (
                <div className="success-box">
                  <strong>
                    ✅{" "}
                    <T
                      ko="문의가 접수되었습니다!"
                      ja="お問い合わせを受け付けました！"
                    />
                  </strong>
                  <T
                    ko={
                      <>
                        24시간 이내 담당자가 연락드리겠습니다.
                        <br />
                        급하신 경우 카카오톡 @kojobag 으로 연락 주세요.
                      </>
                    }
                    ja={
                      <>
                        24時間以内に担当者よりご連絡いたします。
                        <br />
                        お急ぎの場合はカカオトーク @kojobag へご連絡ください。
                      </>
                    }
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
