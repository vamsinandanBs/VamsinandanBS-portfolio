import React from 'react';
import './intro.css'
import '../../css/particle.scss'
// import profileimg from '../img/me.jpg'
import Social from '../../component/socialicon';
import Particle from '../../component/particlebackground';
import ArrowR from '../../component/arrow'


export default class Intro extends React.Component{
    render(){
        return(
        <>
                <Particle/>
                <title>Home | Vamsinandan B S</title> 
                <div className='intro'>
                    {/* <img className='profileimg' src={profileimg} alt='profileimg'/> */}
                    <h1 className='name'>Hi ! I am <span className='highlight'>Vamsinandan B S</span></h1>
                    <h3 className='hobby'>I am a <span className='highlight'>Web developer...</span></h3>
                </div>
              <Social/>
              <a href='/about'><ArrowR/></a>
              {/* <h1 color="white">About Page</h1> */}
              {/* <Particle/> */}


        </>)
    }
}
