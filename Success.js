import {useNavigate} from 'react-router-dom';

export const Success=()=>{
    const navigate=useNavigate();

    function ReturnToHome(){
        navigate("/");
    }
    return (
        <>
        <h3>Successfully submitted</h3>
        <button onClick={ReturnToHome}>Home page</button>
        </>
    )
}