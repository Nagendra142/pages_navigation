import React from 'react';
import {Home} from './Home';
import {About} from './About';
import {Contact} from './Contact';
import {Navbar} from './Navbar';
import {Success} from './Success';
import {Project} from './project';
import {NewProject} from './newProject';
import {Existing} from './Existing';
import {Routes,Route} from 'react-router-dom';

export const App=()=>{
    
    return(
        <>
        <Navbar/>
        <Routes>
        <Route path="/" element={<Home/>}>HomeButton</Route>
        <Route path="/About" element={<About/>}>AboutButton</Route>
        <Route path="/Contact" element={<Contact/>}>ContactButton</Route>
        <Route path='/project' element={<Project/>}>
            <Route index element={<NewProject/>}/>
            <Route path='NewProject' element={<NewProject/>}>New project</Route>
            <Route path="Existing" element={<Existing/>}>Existing project</Route>
        </Route>
        <Route path="*" element={<Success/>}>Success</Route>
        </Routes>
        </>
    )
}