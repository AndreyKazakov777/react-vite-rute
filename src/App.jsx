import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import { ways, differences } from './data'
import WayToTeach from "./components/WayToTeach"
import Button from "./components/Button/Button.jsx"



function App() {
  const [contentType, setContentType] = useState(null)
  // let content = 'Нажми на кнопку'

// console.log('App Render')

  function handleClick2(type) {
    // console.log('button clicked2', type)
    setContentType(type)
    // console.log(content)
    // content = type
}

  return (
    <div>
      <Header />
      
      <main>
        <section>
          <h3>Наш подход к обучению</h3>

          <ul>
            {ways.map((way) => {
              return <WayToTeach key={way.title} {...way} />
            })}

            {/* <WayToTeach 
              title={ways[0].title} 
              description={ways[0].description}
            />
            <WayToTeach {...ways[1]} />
            <WayToTeach {...ways[2]} />
            <WayToTeach {...ways[0]} /> */}
          </ul>
        </section>
        <section>
          <h1>Hello React!</h1>
          <Button isActive={contentType == 'way'} onClicked2={() => handleClick2('way')}>Подход</Button>
          <Button isActive={contentType == 'easy'} onClicked2={() => handleClick2('easy')}>Доступность</Button>
          <Button isActive={contentType == 'program'} onClicked2={() => handleClick2('program')}>Концентрация</Button>

        {/* {contentType ? (
          <p>{differences[contentType]}</p>
          ) : (
          <p>Нажми на кнопку</p>
          )} */}

          {/* {!contentType ?  <p>Нажми на кнопку</p> : null}
          {contentType ? <p>{differences[contentType]}</p> : null} */}

        {!contentType && <p>Нажми на кнопку</p>}
        {contentType && <p>{differences[contentType]}</p>}
    
          
        </section>

       
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
