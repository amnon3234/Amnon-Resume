import React from 'react';
import uniqid  from 'uniqid';
import TopBarItem from './topbarItem.component';
import { topBarItems } from './../consts'

function ContentHeader() {
    return (
        <div className='d-flex justify-content-end content-header'>
            { topBarItems.map( item => (
                <div  key={uniqid()} className='p-2'>
                    <TopBarItem 
                        icon={item.icon}
                        text={item.text}
                        route={item.route}
                    />
                </div>
            ))}
        </div>
    );
}

export default ContentHeader;