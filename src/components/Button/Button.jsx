import "./Button.css"

export default function Button({children, onClicked2}) {
    // function handleClick() {
    //     console.log('button clicked')
    // }

    const handleMouseEnter = () => {
        console.log('entered')
    }
    
    return (
    <button 
    className = 'button' 
    // onClick={handleClick}
    onClick={onClicked2}
    onMouseEnter={handleMouseEnter}
    onDoubleClick={() => console.log("double click")}
    >
    {children}
    </button>
    )
}
