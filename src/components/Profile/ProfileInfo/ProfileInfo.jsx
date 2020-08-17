import React from 'react';
import z from './ProfileInfo.module.css';
const ProfileInfo = () => {
    return <div>
        <div className={z.img}>
            <img src='https://s3.amazonaws.com/images.seroundtable.com/google-css-images-1515761601.jpg'></img>
        </div>
        <div className={z.Zz}>
            <img className={z.ava} src="https://static.sessun.com//icache/size/1860c2325/themes/sessun/images/catalog/product/Wxl-_Ava_june_mood-047.jpg"></img>  
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