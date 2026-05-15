import { createContext, useContext, useState, useEffect } from 'react'

const LangContext = createContext()

export function LangProvider({ children }) {
  const [lang, setLang] = useState('ko') // 'ko' | 'ja'

  // html lang 속성 동기화
  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.classList.toggle('ja', lang === 'ja')
  }, [lang])

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  )
}

// 컴포넌트에서 useLang() 으로 간단하게 사용
export function useLang() {
  return useContext(LangContext)
}

// 한/일 텍스트를 한 번에 렌더링하는 헬퍼 컴포넌트
export function T({ ko, ja }) {
  const { lang } = useLang()
  return <>{lang === 'ko' ? ko : ja}</>
}
