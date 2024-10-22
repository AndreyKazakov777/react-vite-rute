import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header.jsx'
import TeachingSection from './components/TeachingSection.jsx'
import DiferencesSection from './components/DiferencesSection.jsx'
import IntroSection from './components/IntroSection.jsx'
import TabSection from './components/TabsSection.jsx'
import FedbackSection from './components/FeedbackSection.jsx'
import EffectSection from './components/EffectSection.jsx'



function App() {
  const [tab, setTab] = useState('effect')
 

  return (
    <div>
      <Header />
      <main>
        <IntroSection />
        <TabSection active={tab} onChange={(current) => setTab(current)} />

        {tab == 'main' && (
          <>
            <TeachingSection />
            <DiferencesSection />
          </>
        )}
        {tab == 'feedback' && <FedbackSection />}
        
        {tab == 'effect' && <EffectSection />}

        
      </main>
    </div>
  )



  // const [count, setCount] = useState(0)

  // return (
  //   <>
  //     <div>
  //       <a href="https://vitejs.dev" target="_blank">
  //         <img src={viteLogo} className="logo" alt="Vite logo" />
  //       </a>
  //       <a href="https://react.dev" target="_blank">
  //         <img src={reactLogo} className="logo react" alt="React logo" />
  //       </a>
  //     </div>
  //     <h1>Vite + React</h1>
  //     <div className="card">
  //       <button onClick={() => setCount((count) => count + 1)}>
  //         count is {count}
  //       </button>
  //       <p>
  //         Edit <code>src/App.jsx</code> and save to test HMR
  //       </p>
  //     </div>
  //     <p className="read-the-docs">
  //       Click on the Vite and React logos to learn more
  //     </p>
  //   </>
  // )
}

export default App
