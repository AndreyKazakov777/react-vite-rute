import classes from "./Button.module.css"

export default function Button({children, onClicked2, isActive}) {
    // function handleClick() {
    //     console.log('button clicked')
    // }

    // const handleMouseEnter = () => {
        // console.log('entered')
    // }
    

    return (
    <button 
    className = {isActive ? `${classes.button} ${classes.active}` : classes.button}

    // onClick={handleClick}
    onClick={onClicked2}
    // onMouseEnter={handleMouseEnter}
    // onDoubleClick={() => console.log("double click")}
    >
    {children}
    </button>
    )
}
