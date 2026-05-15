import { T } from '../context/LangContext'

const LOGOS = ['BRAND A', 'SHOP B', 'CORP C', 'LABEL D', 'STUDIO E', 'MARKET F', 'DESIGN G']

export default function Trust() {
  return (
    <section id="trust">
      <div className="container">
        <p className="trust-label">
          <T ko="다수 브랜드 납품 경험" ja="多数ブランドへの納品実績" />
        </p>
        <div className="trust-logos">
          {LOGOS.map((logo) => (
            <div key={logo} className="trust-logo">{logo}</div>
          ))}
        </div>
      </div>
    </section>
  )
}
