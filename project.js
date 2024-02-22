import {NavLink,Outlet} from 'react-router-dom';
//Outlet to specify where the nested Component should be place,without that impossible to get the details of the component.
export const Project=()=>{
    return(
        <>
        <h2>Project page</h2>
        <NavLink to="/project/NewProject">NewProject</NavLink>
        <NavLink to="/project/Existing">Existing</NavLink>
        <Outlet/>
        </>
        
    )
}