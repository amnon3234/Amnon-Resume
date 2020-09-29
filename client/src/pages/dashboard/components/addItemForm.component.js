import React from 'react';
import { Button } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import uniqid from 'uniqid';
import {Post} from './../../../APIConnection/mainAPI.connection';

function AddItemForm({inputList, setItem}){
    const location = useLocation();
    
    const handleSubmit = (event) => {
        event.preventDefault();

        const newItem = {};
        inputList.map( item => newItem[item] = event.target[item].value );
        
        Post(location.pathname, newItem, setItem);
    };

    return (
        <form className='add-item-form' onSubmit={handleSubmit}>
            {inputList.map( item => 
                item === 'content' || item==='gitHubLink' ?
                    <textarea key={uniqid()} name={item} placeholder={'enter ' + item} required/> :
                    <input key={uniqid()} type='text' name={item} placeholder={'enter ' + item} required/>
            )}
            <Button className='form-button' size='md' type='submit' block> Add Item </Button>
        </form>
    );
}

export default AddItemForm;