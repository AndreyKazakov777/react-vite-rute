import logo from '/vite.svg'

export default function Header() {
    const localTime = new Date()

    return (
      <header>
        <img src={logo} alt="Logo" />
        
  
        <span>Время сейчас: {localTime.toLocaleTimeString()} </span>
      </header>
    )
  }