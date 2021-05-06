import React from 'react';
import profileimg from '../../img/me.jpg'
import './about.css'
import cl from '../../img/c language.svg'
import Footer from '../../component/footer'
import bag from '../../img/backpack.svg'
import nodered from '../../img/node-red.svg'

export default class Contact extends React.Component{
    render(){
        return(
            <>
                {/* <Particle/> */}
                <title>Contact | Vamsinandan B S</title> 
                <div className='about'>
                    <div className='details'>
                        <div className='image'>
                            <img className="photo" src={profileimg} alt="img"/>
                        </div>
                        <div className='description'>
                           
                            
                            </div>
                        </div>
                    </div>
                    
                    <div className='stack' style={{marginTop:"55px"}}>
                            <p>contact me via:-</p>
                    </div>
                    <Footer/>
            </>
        )
    }

}
