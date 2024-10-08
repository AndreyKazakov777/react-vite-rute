import { differences } from "../data"
import Button from "./Button/Button"
import { useState } from "react"

export default function DiferencesSection() {
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
    )
}