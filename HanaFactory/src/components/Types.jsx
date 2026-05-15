import { T } from '../context/LangContext'
import useScrollReveal from '../hooks/useScrollReveal'

const TYPES = [
  {
    nm: { ko: '에코백', ja: 'エコバッグ' },
    sub: { ko: '캔버스 · 면 · 부직포 · 재생소재', ja: 'キャンバス・コットン・不織布・リサイクル' },
    badge: { ko: '최소 50개~', ja: '最小50枚〜' },
    svg: (
      <svg viewBox="0 0 80 80" fill="none">
        <path d="M20 32h40l-5 30H25L20 32z" fill="#2a2200" stroke="#c8922a" strokeWidth="1.5" />
        <path d="M30 32c0-8 4-14 10-14s10 6 10 14" stroke="#c8922a" strokeWidth="2" fill="none" strokeLinecap="round" />
        <rect x="22" y="44" width="36" height="2" rx="1" fill="#c8922a" opacity=".4" />
      </svg>
    ),
  },
  {
    nm: { ko: '백팩', ja: 'バックパック' },
    sub: { ko: '나일론 · 폴리에스터 · 가죽 · 메쉬', ja: 'ナイロン・ポリエステル・レザー・メッシュ' },
    badge: { ko: '최소 100개~', ja: '最小100個〜' },
    svg: (
      <svg viewBox="0 0 80 80" fill="none">
        <rect x="22" y="30" width="36" height="38" rx="5" fill="#1a2200" stroke="#c8922a" strokeWidth="1.5" />
        <path d="M32 30v-4a8 8 0 0116 0v4" stroke="#c8922a" strokeWidth="2" fill="none" strokeLinecap="round" />
        <line x1="22" y1="46" x2="58" y2="46" stroke="#c8922a" strokeWidth="1.5" opacity=".4" />
        <rect x="35" y="38" width="10" height="7" rx="2" fill="#c8922a" opacity=".35" />
      </svg>
    ),
  },
  {
    nm: { ko: '크로스백', ja: 'クロスバッグ' },
    sub: { ko: 'PU가죽 · 캔버스 · 나일론 · 코듀라', ja: 'PUレザー・キャンバス・ナイロン・コーデュラ' },
    badge: { ko: '최소 100개~', ja: '最小100個〜' },
    svg: (
      <svg viewBox="0 0 80 80" fill="none">
        <rect x="24" y="28" width="32" height="30" rx="4" fill="#221500" stroke="#c8922a" strokeWidth="1.5" />
        <path d="M24 38h32" stroke="#c8922a" strokeWidth="1.5" opacity=".4" />
        <line x1="40" y1="16" x2="24" y2="28" stroke="#c8922a" strokeWidth="2" strokeLinecap="round" />
        <circle cx="40" cy="14" r="4" fill="#c8922a" opacity=".4" />
      </svg>
    ),
  },
  {
    nm: { ko: '커스텀 OEM', ja: 'カスタムOEM' },
    sub: { ko: '도면·샘플 기반 전용 제작. 브랜드 태그 포함.', ja: '図面・サンプルベースの専用製作。ブランドタグ込み。' },
    badge: { ko: '수량 협의', ja: '数量要相談' },
    svg: (
      <svg viewBox="0 0 80 80" fill="none">
        <rect x="18" y="30" width="44" height="32" rx="5" fill="#002010" stroke="#c8922a" strokeWidth="1.5" />
        <rect x="30" y="22" width="20" height="10" rx="3" fill="#002010" stroke="#c8922a" strokeWidth="1.5" />
        <line x1="18" y1="44" x2="62" y2="44" stroke="#c8922a" strokeWidth="1.5" opacity=".4" />
        <text x="40" y="57" textAnchor="middle" fontSize="9" fill="#c8922a" opacity=".7" fontFamily="monospace">OEM</text>
      </svg>
    ),
  },
]

export default function Types() {
  const r0 = useScrollReveal(); const r1 = useScrollReveal()
  const r2 = useScrollReveal(); const r3 = useScrollReveal()
  const r4 = useScrollReveal()

  return (
    <section id="types">
      <div className="container">
        <p className="sec-label r" ref={r0}><T ko="제작 가능 종류" ja="製作可能種類" /></p>
        <h2 className="sec-title r d1" ref={r1}><T ko="어떤 가방이든" ja="どんなバッグでも" /></h2>
        <div className="bar r d2" ref={r2} />
        <p className="sec-desc r d3" ref={r3}>
          <T ko="에코백부터 백팩, 커스텀 OEM까지 모두 직접 제작합니다." ja="エコバッグからバックパック、カスタムOEMまですべて直接製作。" />
        </p>

        <div className="types-grid r d4" ref={r4}>
          {TYPES.map((t) => (
            <div className="type-card" key={t.nm.ko}>
              <div className="type-svg-wrap">{t.svg}</div>
              <div className="type-nm"><T ko={t.nm.ko} ja={t.nm.ja} /></div>
              <div className="type-sub"><T ko={t.sub.ko} ja={t.sub.ja} /></div>
              <div className="type-badge"><T ko={t.badge.ko} ja={t.badge.ja} /></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
