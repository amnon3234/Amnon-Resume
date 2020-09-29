import React from 'react';
import uniqid from 'uniqid';
import { Table } from 'react-bootstrap';
import { Delete } from './../../../APIConnection/mainAPI.connection';
import { useLocation } from 'react-router-dom';

function ModelTable({headlines, items, pressedItem, setPressedItem, setItems}){
    const location = useLocation();

    const handleClick = (item) => setPressedItem(item);
    const handelDelete = (item) => Delete(location.pathname, item._id, setItems);

    return (
        <Table> 
            <thead>
                <tr>
                    <th> # </th>
                    {headlines.map( prop => 
                        <th key={uniqid()}> {prop} </th>
                    )}
                    <th> actions </th>
                </tr>
            </thead>
            <tbody>
                {items.map( (item, index) => 
                    <tr  
                        key={uniqid()} 
                        className={pressedItem && item._id === pressedItem._id ? 'active-row' : ''}
                    >
                        <td onClick={() => handleClick(item)} > { index + 1 } </td>
                        {headlines.map( prop => 
                            <td onClick={() => handleClick(item)} key={uniqid()}> {item[prop] && item[prop].substring(0,50)} </td>
                        )}
                        <td>
                            <span onClick={() => handelDelete(item)} > 
                                <i className="fas fa-trash trash-icon"></i>  
                            </span>
                        </td>
                    </tr>
                )}
            </tbody>
        </Table>
    );
}

export default ModelTable;