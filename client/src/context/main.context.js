import React, {useState, createContext, useEffect} from 'react';
import {Get} from './../APIConnection/mainAPI.connection';

const MainContext = createContext();
const { Provider } = MainContext;

function MainProvider({children}){

    // global states
    const [info, setInfo] = useState();
    const [experience, setExperience] = useState();
    const [projects, setProjects] = useState();
    const [notes, setNotes] = useState();
    const [users, setUsers] = useState();

    // as app load fetch data from the api
    useEffect( () => {
        Get('/info', data => setInfo(data[0]));
        Get('/experience', setExperience);
        Get('/projects', setProjects);
        Get('/notes', setNotes);
        Get('/users', setUsers);
    },[])

    return(
        <Provider value={
            {
                info: [info,setInfo],
                experience: [experience, setExperience],
                projects: [projects, setProjects],
                notes: [notes, setNotes],
                users: [users, setUsers]
            }
        }>
            {children}
        </Provider>
    );
}

export { MainContext, MainProvider};