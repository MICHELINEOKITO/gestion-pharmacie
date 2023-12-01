import { Link } from "react-router-dom";
import Button from "../components/button";
function    Login(){
    return(
        <>
             <h1>Se connecter</h1>
             <button><Link to="/home">Connexion</Link></button>
             <Button linkValue="/home" buttonValue="S'inscrire" />
        </>
       

    )
}
export default Login;