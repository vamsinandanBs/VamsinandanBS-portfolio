import React from 'react';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {faGithub,faLinkedin,faInstagram,faTelegramPlane} from '@fortawesome/free-brands-svg-icons'
import '../css/footer.css'
export default class Footer extends React.Component{
    render(){
        return(<>
            <div className='footer'>
                <div className='social-icon'>
                    <ul>
                        <li><a target="_blank" href="https://github.com/vamsinandanBs"><FontAwesomeIcon icon={faGithub}   size="2x" color="white"/></a></li>
                        <li><a target="_blank" href="https://www.linkedin.com/in/vamsinandan-b-s-1560a61a0"><FontAwesomeIcon icon={faLinkedin}  size="2x" color="white"/></a></li>
                        <li><a target="_blank" href="https://www.instagram.com/vamsinandanbs_1428"><FontAwesomeIcon icon={faInstagram}  size="2x" color="white"/></a></li>
                        <li><a target="_blank" href="https://t.me/vamsinandan40"><FontAwesomeIcon icon={faTelegramPlane}  size="2x" color="white"/></a></li>
                        <li><a target="_blank" href="mailto:vamsinandan40@gmail.com"><FontAwesomeIcon icon={faEnvelope}  size="2x" color="white"/></a></li>
                    </ul>
                </div>
                <div className='modules'>
                    <ul className='links'>
                        <li  className='m-li'><a href='/'>Home</a></li>
                        <li className='m-li'><a href='/about'>About</a></li>
                        <li className='m-li'><a href='/projects'>Projects</a></li>
                        <li className='m-li'><a href='/certificates'>certificates</a></li>
                        <li className='m-li'><a href='/contact'>Contact</a></li>
                      
                    </ul>

                </div>
                <div className='end-note'>
                    <div className='name'>
                        <h1 style={{color:"white"}}>󠀾╠ Vamsinandan B S ╣</h1>
                        <h3 style={{color:"white"}}>❤️❤️</h3>
                        
                        
                        <a href='vamsinandan40@gmail.com'>vamsinandan40@gmail.com</a>
                    </div>
                    <div className='copyright'>
                        <p>Copyright © 2020 Vamsinandan B S.</p>
                    </div>

                </div>

            </div>

        </>)
    }
}