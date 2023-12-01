import { Link, useNavigate } from "react-router-dom";

export default function Button({linkValue, buttonValue}){
    
    const navigate = useNavigate();

    const handleClick = () =>{

        navigate(linkValue)
    }
    return(
        <>

            <button>{buttonValue}</button>
        </>
        
    
        
        
    )
}