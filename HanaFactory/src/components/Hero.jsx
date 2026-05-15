import { T } from '../context/LangContext'
import useCountUp from '../hooks/useCountUp'
import { scrollToSection } from '../hooks/useNavScroll'

function StatCell({ target, unit, labelKo, labelJa }) {
  const { count, ref } = useCountUp(target)
  return (
    <div className="stat-cell" ref={ref}>
      <div>
        <span className="stat-num">{count}</span>
        <span className="stat-unit">{unit}</span>
      </div>
      <div className="stat-lbl"><T ko={labelKo} ja={labelJa} /></div>
    </div>
  )
}

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-grid" />
      <div className="hero-glow" />

      <div className="hero-inner">
        {/* 뱃지 */}
        <div className="hero-badge">
          <span className="badge-dot" />
          <T ko="공장 직영 · 중간 마진 없음" ja="工場直営 · 中間マージンゼロ" />
        </div>

        {/* 타이틀 */}
        <h1 className="hero-h1">
          <em><T ko="가방 제작" ja="バッグ製作" /></em>
          <T ko="공장에서 직접 진행" ja="工場が直接対応" />
        </h1>

        {/* 서브 카피 */}
        <p className="hero-sub">
          <T
            ko={<>중간 유통 없이 <strong>합리적인 가격</strong>으로.<br />소량 50개부터 OEM · 대량 생산까지 <strong>원스톱으로.</strong></>}
            ja={<>中間流通なしで <strong>リーズナブルな価格</strong>を実現。<br />小ロット50枚からOEM・大量生産まで <strong>ワンストップで。</strong></>}
          />
        </p>

        {/* 칩 태그 */}
        <div className="hero-chips">
          {[
            { ko: '소량 50개~', ja: '小ロット50枚〜' },
            { ko: 'OEM / ODM', ja: 'OEM / ODM' },
            { ko: '샘플 제작', ja: 'サンプル制作' },
            { ko: '커스텀 디자인', ja: 'カスタムデザイン' },
            { ko: '브랜드 라벨 포함', ja: 'ブランドラベル込み' },
          ].map((c) => (
            <span key={c.ko} className="chip"><T ko={c.ko} ja={c.ja} /></span>
          ))}
        </div>

        {/* 버튼 */}
        <div className="hero-actions">
          <button className="btn-primary" onClick={() => scrollToSection('contact')}>
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
            </svg>
            <T ko="견적 문의하기" ja="お見積もり依頼" />
          </button>
          <button className="btn-secondary" onClick={() => scrollToSection('calc')}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="4" y="2" width="16" height="20" rx="2" />
              <line x1="8" y1="10" x2="16" y2="10" /><line x1="8" y1="14" x2="16" y2="14" /><line x1="8" y1="18" x2="12" y2="18" />
            </svg>
            <T ko="견적 계산기 보기" ja="見積計算機" />
          </button>
        </div>

        {/* 긴급성 */}
        <div className="hero-urgency">
          <span className="u-dot" />
          <T
            ko="현재 제작 문의 증가로 상담이 지연될 수 있습니다. 빠른 문의를 권장합니다."
            ja="現在、製作依頼が増加しております。お早めのお問い合わせをお勧めします。"
          />
        </div>

        {/* 스탯 */}
        <div className="hero-stats">
          <StatCell target={500} unit="+" labelKo="납품 브랜드" labelJa="納品ブランド" />
          <StatCell target={15}  unit={<T ko="년" ja="年" />} labelKo="제작 경험" labelJa="製作経験" />
          <StatCell target={50}  unit={<T ko="개~" ja="枚〜" />} labelKo="최소 수량" labelJa="最小ロット" />
          <StatCell target={87}  unit="%" labelKo="재주문율" labelJa="リピート率" />
        </div>
      </div>
    </section>
  )
}
