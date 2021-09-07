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
                    <p>Native Place:-</p>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15541.070235493471!2d78.52292021217963!3d13.145515697393968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad84f81ed2175b%3A0x559b457cbfbf9a2f!2sPayastanahalli%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1630982399785!5m2!1sen!2sin" width="300" height="350"   loading="lazy"></iframe>
                    <div class="wrapper">
                    <section class="contact">
                        <h2>Contact Us </h2>
                       
                        <form
                        action="mailto:vamsinandan40@gmail.com"
                        method="POST"
                        name="contact"
                        enctype="multipart/form-data"
                        
                        >
                        <input type="text" placeholder="Name" name="name" />
                        <input type="email" placeholder="Email" name="email" />
                        <textarea
                            placeholder="Message"
                            cols="30"
                            rows="10"
                            name="message"
                        ></textarea>
                        
                        <button type="submit">Send</button>
                        </form>
                    </section>
                    </div>
                    <div className='stack' style={{marginTop:"55px"}}>
                            <p>contact me via:-</p>
                          
                    </div>
                   
                    
                    <Footer/>
            </>
        )
    }

}
