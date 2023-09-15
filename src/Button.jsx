/* eslint-disable react/prop-types */
const Button = ({props}) => {
    const {
        bg, 
        icon,
        btnTxt, 
        txtColor,
        borderWidth,
        borderStyle,
        borderRadius, 
        borderColor
    } = props
    return (
        <button type="button"
            className={`${bg} py-1.5 px-4 ${borderWidth} ${borderStyle} ${borderRadius} ${borderColor} ${txtColor}`}
        >   
            <span>{icon}</span>
            {btnTxt}
        </button>
    )
}
export default Button;