import { T } from '../context/LangContext'

export default function FloatButtons() {
  return (
    <div className="floats">
      <a
        href="https://open.kakao.com/o/yourlink"
        className="float-btn float-kakao"
        target="_blank"
        rel="noreferrer"
      >
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 3C6.477 3 2 6.477 2 10.8c0 2.76 1.67 5.2 4.2 6.68L5.1 21l4.53-2.52c.77.13 1.56.2 2.37.2 5.523 0 10-3.477 10-7.8S17.523 3 12 3z" />
        </svg>
        <T ko="카카오 상담" ja="カカオ相談" />
      </a>

      <a href="tel:+821012345678" className="float-btn float-tel">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.4 10.8 19.79 19.79 0 01.36 2.18 2 2 0 012.34 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.18 6.18l1.28-1.28a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
        </svg>
        <T ko="전화 문의" ja="お電話" />
      </a>
    </div>
  )
}
