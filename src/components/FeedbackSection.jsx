import { useState } from "react"
import Button from "./Button/Button"

function StateVsRef() {
    const [value1, setValue1] = useState('')
    return (
        <div>
            <h3 style={{float: "left"}}>Input value: {value1}</h3>
            <input 
                type="text" 
                value={value1} 
                onChange={(event) => setValue1(event.target.value)} 
                className="control" 
            />
            
        </div>
    )
}

export default function FedbackSection() {
    const [name, setName] = useState('')
    const [hasError, setHasError] = useState(false)
    const [reason, setReason] = useState('help')

    function handleNameChange(event) {
        // console.log(event.target.value)
        setName(event.target.value)
        setHasError(event.target.value.trim().length == 0)
    }

    return (
        <section>
            <h3 style={{margin: '1rem'}}>Обратная связь</h3>

            <form action="">
                <label htmlFor="name" style={{float: "left"}}>Ваше имя</label>
                    <input 
                        type="text" 
                        id="name" 
                        className="control" 
                        value={name} 
                        style={{
                            border: hasError ? '2px solid red' : null, 
                        }}
                        onChange={handleNameChange} 
                    />

                <label htmlFor="reason" style={{float: "left"}}>Причина обращения</label>
                    <select 
                        name="" 
                        id="reason" 
                        className="control" 
                        value={reason} 
                        onChange={(event) => setReason(event.target.value)}
                    >
                            <option value="error">Ошибка</option>
                            <option value="help">Нужна помощь</option>
                            <option value="suggest">Предложение</option>
                    </select>

                <pre style={{float: "left", marginBottom: '1rem'}}>
                    Name: {name}
                    <br />
                    Reason: {reason}
                </pre>

                <Button>Отправить</Button>

                <StateVsRef />
            </form>
        </section>
    )
}