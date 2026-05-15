import { useState } from 'react'
import { T } from '../context/LangContext'
import useScrollReveal from '../hooks/useScrollReveal'

const FAQS = [
  {
    q: { ko: '최소 주문 수량이 얼마인가요?', ja: '最小注文数量はいくつですか？' },
    a: { ko: '에코백 기준 최소 50개, 백팩 등 복잡한 제품은 100개부터 권장합니다. 소량이 필요하신 경우에도 먼저 문의해 주시면 상담해드립니다.', ja: 'エコバッグは最小50枚、バックパック等の複雑な製品は100個からをお勧めします。少量でもまずはご相談ください。' },
  },
  {
    q: { ko: '제작 기간은 얼마나 걸리나요?', ja: '製作期間はどれくらいですか？' },
    a: { ko: '샘플 제작 1~2주, 본 생산 2~6주입니다. 수량과 복잡도에 따라 다르며, 급한 경우 Rush 제작도 협의 가능합니다.', ja: 'サンプル制作1〜2週間、本生産2〜6週間です。数量と複雑さにより異なり、急ぎの場合はラッシュ制作もご相談可能です。' },
  },
  {
    q: { ko: '샘플 제작 비용은 얼마인가요?', ja: 'サンプル制作費はいくらですか？' },
    a: { ko: '제품 복잡도에 따라 다르며, 본 생산 진행 시 샘플 비용 일부 환급됩니다. 상담 시 자세히 안내드립니다.', ja: '製品の複雑さにより異なり、本生産を進める場合はサンプル費用の一部を還元いたします。詳細はご相談時にご案内します。' },
  },
  {
    q: { ko: '디자인 파일 없이도 가능한가요?', ja: 'デザインファイルがなくても大丈夫ですか？' },
    a: { ko: '참고 이미지나 스케치만으로도 상담 가능합니다. 디자인팀이 함께 작업해 드립니다. (디자인 작업비 별도)', ja: '参考画像やスケッチのみでもご相談可能です。デザインチームがサポートいたします。（デザイン作業費は別途）' },
  },
  {
    q: { ko: '브랜드 태그·라벨도 제작 가능한가요?', ja: 'ブランドタグ・ラベルも制作できますか？' },
    a: { ko: '네, 행택·라벨·지퍼풀 등 부자재 전체 맞춤 제작 가능합니다. 브랜드 완성품으로 납품드립니다.', ja: 'はい、ハングタグ・ラベル・ジッパープルなどの副資材すべてをカスタム製作可能です。ブランド完成品でお届けします。' },
  },
  {
    q: { ko: '일본에서도 주문 가능한가요?', ja: '日本からも注文できますか？' },
    a: { ko: '네, 해외 납품도 가능합니다. 일본어 상담도 지원합니다. 이메일 또는 문의 폼으로 연락해 주세요.', ja: 'はい、海外への納品も可能です。日本語でのご相談も対応しております。メールまたはお問い合わせフォームよりご連絡ください。' },
  },
]

function FaqItem({ faq }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`faq-item${open ? ' open' : ''}`}>
      <button className="faq-q" onClick={() => setOpen(!open)}>
        <span className="faq-qm">Q</span>
        <span className="faq-qt"><T ko={faq.q.ko} ja={faq.q.ja} /></span>
        <span className="faq-plus">+</span>
      </button>
      <div className="faq-a">
        <div className="faq-ai"><T ko={faq.a.ko} ja={faq.a.ja} /></div>
      </div>
    </div>
  )
}

export default function FAQ() {
  const r0 = useScrollReveal(); const r1 = useScrollReveal()
  const r2 = useScrollReveal(); const r3 = useScrollReveal()

  return (
    <section id="faq">
      <div className="container">
        <p className="sec-label r" ref={r0}><T ko="자주 묻는 질문" ja="よくある質問" /></p>
        <h2 className="sec-title r d1" ref={r1}><T ko="궁금한 것들" ja="よくある疑問" /></h2>
        <div className="bar r d2" ref={r2} />
        <div className="faq-list r d3" ref={r3}>
          {FAQS.map((f, i) => <FaqItem key={i} faq={f} />)}
        </div>
      </div>
    </section>
  )
}
