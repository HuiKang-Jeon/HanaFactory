import { T } from '../context/LangContext'
import useScrollReveal from '../hooks/useScrollReveal'

const STEPS = [
  { n: '01', ico: '📋', ko: '문의 접수',  ja: 'お問い合わせ',  dko: '온라인 폼 또는 카카오톡으로 24시간 접수.',             dja: 'オンラインフォームまたはカカオトークで24時間受付。' },
  { n: '02', ico: '💬', ko: '상담 & 견적', ja: '相談・見積',    dko: '1:1 상담 후 맞춤 견적 제공. 소재·수량·납기 협의.',    dja: '1:1相談後、カスタム見積を提示。素材・数量・納期を協議。' },
  { n: '03', ico: '✂️', ko: '샘플 제작',  ja: 'サンプル制作', dko: '실제 샘플 제작 후 고객 승인 완료 시 본 생산.',         dja: 'サンプル確認・承認後に本生産へ。' },
  { n: '04', ico: '🏭', ko: '본 생산',    ja: '本生産',        dko: '공장 직접 생산. 전 수량 품질 검수 철저.',              dja: '工場直接生産。全数量の品質検査を徹底実施。' },
  { n: '05', ico: '🚚', ko: '납품',       ja: '納品',          dko: '전국 배송 또는 공장 직접 수령 가능.',                   dja: '全国配送または工場直接受け取り可能。' },
]

export default function Process() {
  const r0 = useScrollReveal(); const r1 = useScrollReveal()
  const r2 = useScrollReveal(); const r3 = useScrollReveal()
  const r4 = useScrollReveal()

  return (
    <section id="process">
      <div className="container">
        <p className="sec-label r" ref={r0}><T ko="제작 프로세스" ja="製作プロセス" /></p>
        <h2 className="sec-title r d1" ref={r1}><T ko="5단계 제작 순서" ja="5ステップの流れ" /></h2>
        <div className="bar r d2" ref={r2} />
        <p className="sec-desc r d3" ref={r3}>
          <T ko="문의 접수부터 납품까지 모든 과정을 투명하게 안내드립니다." ja="お問い合わせから納品まで、全工程を透明にご案内します。" />
        </p>

        <div className="proc-wrap r d4" ref={r4}>
          {STEPS.map((s, i) => (
            <div className="proc-step" key={s.n}>
              <div className="proc-n">{s.n}</div>
              <div className="proc-ico">{s.ico}</div>
              <div className="proc-ttl"><T ko={s.ko} ja={s.ja} /></div>
              <div className="proc-dsc"><T ko={s.dko} ja={s.dja} /></div>
              {i < STEPS.length - 1 && <div className="proc-arr" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
