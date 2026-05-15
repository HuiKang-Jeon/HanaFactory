import { T } from '../context/LangContext'
import { scrollToSection } from '../hooks/useNavScroll'

const NAV_ITEMS = [
  { id: 'process',   ko: '제작 과정',   ja: '製作工程' },
  { id: 'types',     ko: '제작 종류',   ja: '製品種類' },
  { id: 'pricing',   ko: '가격 안내',   ja: '価格案内' },
  { id: 'calc',      ko: '견적 계산기', ja: '見積計算' },
  { id: 'portfolio', ko: '포트폴리오',  ja: '実績' },
  { id: 'faq',       ko: 'FAQ',        ja: 'FAQ' },
  { id: 'contact',   ko: '문의하기',    ja: 'お問合せ' },
]

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="foot-top">
          {/* 로고 & 태그라인 */}
          <div>
            <div className="foot-logo">KŌJŌ BAG</div>
            <div className="foot-tagline">
              <T ko={<>가방 제조 공장 직영 · 중간 마진 없음<br />소량 ~ 대량 OEM 제작</>} ja={<>バッグ製造工場直営 · 中間マージンなし<br />小ロット〜大量OEM製作</>} />
            </div>
          </div>

          {/* 페이지 링크 */}
          <div className="foot-nav">
            {NAV_ITEMS.map(({ id, ko, ja }) => (
              <button key={id} onClick={() => scrollToSection(id)}>
                <T ko={ko} ja={ja} />
              </button>
            ))}
          </div>

          {/* 관리자 링크 */}
          <button className="foot-admin" onClick={() => window.location.href = '/admin'}>
            🔐 Admin
          </button>
        </div>

        <div className="foot-bottom">
          <div className="foot-info">
            <T
              ko={<>상호: KŌJŌ BAG · 대표: 홍길동 · 사업자등록번호: 000-00-00000<br />주소: 경기도 의정부시 · 전화: 010-1234-5678 · 이메일: info@kojobag.kr</>}
              ja={<>商号：KŌJŌ BAG · 代表：ホン・ギルドン · 事業者番号：000-00-00000<br />住所：京畿道 議政府市 · 電話：010-1234-5678 · Mail：info@kojobag.kr</>}
            />
          </div>
          <div className="foot-copy">© 2024 KŌJŌ BAG. All rights reserved.</div>
        </div>
      </div>
    </footer>
  )
}
