import { T } from '../context/LangContext'
import useScrollReveal from '../hooks/useScrollReveal'

const ITEMS = [
  {
    cls: 'big', bg: 'linear-gradient(135deg,#1a1400,#2e2200)',
    tag: 'ECO BAG', tagColor: 'var(--amber)',
    nm: { ko: '패션 브랜드 에코백', ja: 'ファッションブランド エコバッグ' },
    meta: { ko: '수량: 3,000개 · 10oz 캔버스 · 납기: 3주', ja: '数量：3,000枚 · 10ozキャンバス · 納期：3週間' },
    svg: <svg width="200" height="200" viewBox="0 0 80 80" fill="none"><path d="M20 32h40l-5 30H25L20 32z" fill="#c8922a" opacity=".12" stroke="#c8922a" strokeWidth="1.5"/><path d="M30 32c0-8 4-14 10-14s10 6 10 14" stroke="#c8922a" strokeWidth="2" fill="none" strokeLinecap="round"/><text x="40" y="54" textAnchor="middle" fontSize="8" fill="#c8922a" opacity=".7" fontFamily="monospace">BRAND A</text></svg>,
  },
  {
    bg: 'linear-gradient(135deg,#001a10,#002a1a)',
    tag: 'BACKPACK', tagColor: '#3d8c5a',
    nm: { ko: '아웃도어 백팩', ja: 'アウトドアバックパック' },
    meta: { ko: '500개 · 나일론 · 4주', ja: '500個 · ナイロン · 4週間' },
    svg: <svg width="80" height="80" viewBox="0 0 80 80" fill="none"><rect x="22" y="30" width="36" height="38" rx="5" fill="#3d8c5a" opacity=".12" stroke="#5acc8a" strokeWidth="1.5"/><path d="M32 30v-4a8 8 0 0116 0v4" stroke="#5acc8a" strokeWidth="2" fill="none" strokeLinecap="round"/></svg>,
  },
  {
    bg: 'linear-gradient(135deg,#1a0010,#2a0018)',
    tag: 'CROSS BAG', tagColor: '#8c3d6a',
    nm: { ko: '여성 크로스백', ja: 'レディースクロスバッグ' },
    meta: { ko: '200개 · PU가죽 · 5주', ja: '200個 · PUレザー · 5週間' },
    svg: <svg width="80" height="80" viewBox="0 0 80 80" fill="none"><rect x="24" y="28" width="32" height="30" rx="4" fill="#8c3d6a" opacity=".12" stroke="#c87aaa" strokeWidth="1.5"/><line x1="40" y1="16" x2="24" y2="28" stroke="#c87aaa" strokeWidth="2" strokeLinecap="round"/><circle cx="40" cy="14" r="4" fill="#c87aaa" opacity=".35"/></svg>,
  },
  {
    bg: 'linear-gradient(135deg,#001020,#001830)',
    tag: 'OEM', tagColor: '#2a5c8c',
    nm: { ko: '기업 단체 가방', ja: '企業ノベルティバッグ' },
    meta: { ko: '1,000개 · 폴리에스터 · 3주', ja: '1,000個 · ポリエステル · 3週間' },
    svg: <svg width="80" height="80" viewBox="0 0 80 80" fill="none"><rect x="18" y="30" width="44" height="32" rx="5" fill="#2a5c8c" opacity=".12" stroke="#5a9ccc" strokeWidth="1.5"/><rect x="30" y="22" width="20" height="10" rx="3" fill="#2a5c8c" opacity=".18" stroke="#5a9ccc" strokeWidth="1.5"/></svg>,
  },
  {
    cls: 'wide', bg: 'linear-gradient(135deg,#1a1000,#2a1800)',
    tag: 'OEM SERIES', tagColor: 'var(--amber)',
    nm: { ko: '스포츠 브랜드 OEM 시리즈', ja: 'スポーツブランドOEMシリーズ' },
    meta: { ko: '2,000개 · 메쉬/나일론 · 6주', ja: '2,000個 · メッシュ/ナイロン · 6週間' },
    svg: <svg width="140" height="80" viewBox="0 0 140 80" fill="none"><rect x="8" y="24" width="52" height="34" rx="4" fill="#c8922a" opacity=".08" stroke="#c8922a" strokeWidth="1.5"/><rect x="80" y="24" width="52" height="34" rx="4" fill="#c8922a" opacity=".08" stroke="#c8922a" strokeWidth="1.5"/><text x="34" y="45" textAnchor="middle" fontSize="8" fill="#c8922a" fontFamily="monospace">STYLE A</text><text x="106" y="45" textAnchor="middle" fontSize="8" fill="#c8922a" fontFamily="monospace">STYLE B</text></svg>,
  },
  {
    bg: 'linear-gradient(135deg,#0a0a00,#181800)',
    tag: 'TOTE', tagColor: '#8c8c2a',
    nm: { ko: '토트백 대량 납품', ja: 'トートバッグ大量納品' },
    meta: { ko: '5,000개 · 부직포 · 2주', ja: '5,000枚 · 不織布 · 2週間' },
    svg: <svg width="80" height="80" viewBox="0 0 80 80" fill="none"><rect x="14" y="28" width="52" height="32" rx="4" fill="#8c8c2a" opacity=".12" stroke="#cccc5a" strokeWidth="1.5"/><path d="M25 28v-6a15 15 0 0130 0v6" stroke="#cccc5a" strokeWidth="1.5" fill="none" strokeLinecap="round"/></svg>,
  },
  {
    bg: 'linear-gradient(135deg,#100020,#180030)',
    tag: 'POUCH', tagColor: '#6a2a8c',
    nm: { ko: '파우치 / 클러치', ja: 'ポーチ / クラッチ' },
    meta: { ko: '300개 · PU가죽 · 3주', ja: '300個 · PUレザー · 3週間' },
    svg: <svg width="80" height="80" viewBox="0 0 80 80" fill="none"><ellipse cx="40" cy="46" rx="20" ry="14" fill="#6a2a8c" opacity=".12" stroke="#aa5acc" strokeWidth="1.5"/><rect x="32" y="28" width="16" height="16" rx="2" fill="#6a2a8c" opacity=".12" stroke="#aa5acc" strokeWidth="1.5"/></svg>,
  },
  {
    bg: 'linear-gradient(135deg,#001a0a,#002a12)',
    tag: 'ECO', tagColor: '#2a8c5a',
    nm: { ko: '친환경 캠페인백', ja: 'エコキャンペーンバッグ' },
    meta: { ko: '800개 · 재생면 · 4주', ja: '800枚 · リサイクルコットン · 4週間' },
    svg: <svg width="80" height="80" viewBox="0 0 80 80" fill="none"><rect x="20" y="26" width="40" height="36" rx="5" fill="#2a8c5a" opacity=".12" stroke="#5acc8a" strokeWidth="1.5"/><circle cx="40" cy="44" r="6" fill="#2a8c5a" opacity=".25" stroke="#5acc8a" strokeWidth="1.5"/></svg>,
  },
]

export default function Portfolio() {
  const r0 = useScrollReveal(); const r1 = useScrollReveal()
  const r2 = useScrollReveal(); const r3 = useScrollReveal()
  const r4 = useScrollReveal()

  return (
    <section id="portfolio">
      <div className="container">
        <p className="sec-label r" ref={r0}><T ko="납품 포트폴리오" ja="納品実績" /></p>
        <h2 className="sec-title r d1" ref={r1}><T ko="말보다 실적" ja="実績が証明" /></h2>
        <div className="bar r d2" ref={r2} />
        <p className="sec-desc r d3" ref={r3}>
          <T ko="실제 납품 사례입니다. 사진 위에 마우스를 올리면 상세 정보를 볼 수 있습니다." ja="実際の納品実績です。写真にカーソルを合わせると詳細が表示されます。" />
        </p>
      </div>

      <div style={{ maxWidth: 1160, margin: '56px auto 0', padding: '0 44px' }} className="r" ref={r4}>
        <div className="port-grid">
          {ITEMS.map((item, i) => (
            <div
              key={i}
              className={`port-item${item.cls ? ' ' + item.cls : ''}`}
              style={{ background: item.bg }}
            >
              <div className="port-canvas">{item.svg}</div>
              <div className="port-over">
                <span className="port-tag" style={{ background: item.tagColor, color: item.tagColor === 'var(--amber)' ? 'var(--black)' : '#000' }}>
                  {item.tag}
                </span>
                <div className="port-name"><T ko={item.nm.ko} ja={item.nm.ja} /></div>
                <div className="port-meta"><T ko={item.meta.ko} ja={item.meta.ja} /></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
