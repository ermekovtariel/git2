import React from 'react';
import z from './ProfileInfo.module.css';
const ProfileInfo = () => {
    return <div>
        <div className={z.img}>
            <img src='https://s3.amazonaws.com/images.seroundtable.com/google-css-images-1515761601.jpg'></img>
        </div>
        <div className={z.Zz}>
            <img className={z.ava} src="https://sun9-64.userapi.com/impf/c845122/v845122399/15c0ed/PLj6dQarQ6E.jpg?size=400x0&quality=90&sign=c12200a9d964685acd2a2e3de9481d40&c_uniq_tag=fsppVFVU5ywzZmUw2Jl-OzaR2fDt0KB2pKVm7VJbRWE&ava=1"></img>  
            <div className={z.discription}>
                <div>
                    <b>Name:     Tariel</b>
                </div>

                <div>
                    <b>Year:    19 yo.</b>
                </div>

                <div>
                    <b>Job:    Programmist</b> 
                </div>

                <div>
                    <b>Status:     Hey I'm using W/A</b>
                </div>
                
            </div>
        </div>
    </div>
}
export default ProfileInfo;