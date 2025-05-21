import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MySlider from '../component/MySlider'

function App() {
  //useState 即時更新，可以讓你的元件「記住資料」，而且當資料變動時，自動幫你重新渲染畫面（更新 UI）。
  const [count, setCount] = useState(0)

  const [r, setR] = useState(128)
  const [g, setG] = useState(128)
  const [b, setB] = useState(128)
  const backgroundColor = `rgb(${r}, ${g}, ${b})` //即時更新最新的 r, g, b 數值

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>本網站使用Vite + React開發</h1>
      <h2>五專資工三甲 5B1G0008 陳柔雅</h2>
      <h2>我的第一個元件:Slider</h2>
      <div id="area" style={{ backgroundColor, padding: '20px' }}>
        <p>R：<MySlider value={r} onChange={setR} /></p>
        <p>G：<MySlider value={g} onChange={setG} /></p>
        <p>B：<MySlider value={b} onChange={setB} /></p>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
