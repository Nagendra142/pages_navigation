import {useNavigate} from 'react-router-dom';

export const Home=()=>{
    const navigate=useNavigate();
    function ReturnToSuccess(){
        navigate("*")
    }
    return(
        <>
        <h2>Home page</h2>
        <button onClick={ReturnToSuccess}>ToSuccessPage</button>
        </>
    )
}