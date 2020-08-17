import React from 'react';
import z from './../Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    let path = '/dialog/' + props.id;
    return (
        <div className={z.dialog + ' ' + z.active}>

            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}




export default DialogItem;


