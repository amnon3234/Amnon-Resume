import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import uniqid from 'uniqid';
import {Patch} from './../../../APIConnection/mainAPI.connection';

function EditItemForm({inputList, setItem, pressedItem, setPressedItem}){
    const location = useLocation(); 
    const [current, setCurrent] = useState({});

    // clone state
    useEffect( () => {
        const pressedClone = {...pressedItem};
        setCurrent(pressedClone);
    },[pressedItem]);

    // handle form submit ( patch to the api )
    const handleSubmit = (event) => {
        event.preventDefault();

        const changedItem = {};
        inputList.map( item =>  changedItem[item] = event.target[item].value );
        
        Patch(location.pathname, pressedItem._id, changedItem, setItem)

        setPressedItem({});
    };

    return (
        <form className='add-item-form' onSubmit={handleSubmit}>
            {inputList.map( item => 
                item === 'content' || item==='gitHubLink' ?
                    <textarea 
                        key={uniqid()} 
                        name={item} defaultValue={current[item]} 
                        required
                    /> :
                    <input  
                        key={uniqid()} 
                        type='text' name={item} 
                        defaultValue={current[item]} 
                        required
                    />
            )}
            <Button className='form-button' size='md' type='submit' block> Edit Item </Button>
        </form>
    );
}

export default EditItemForm;