
import React from 'react';
import './projects.css'


import ij from '../../img/ij.png'
import mt from '../../img/mt.png'
import ms from '../../img/ms.png'
import mlu from '../../img/mlu.png'
import awsml from '../../img/awsml.png'
import awsdr from '../../img/awsdr.png'
import pyiitb from '../../img/pyiitb.png'
import cg from '../../img/cg.png'
import drupal from '../../img/drupal.png'
import gk from '../../img/gk.png'
import pu from '../../img/pu.png'

import Button1 from '../../component/Button1'
import Button2 from '../../component/Button2'
import Footer from '../../component/footer'
import proj from '../../img/rocket.svg'



export default class certificates extends React.Component{
    render(){
        return(<>
                <title>certificates | vamsinandan B S</title> 
                <div className='certificates'>
                    <div style={{display:"flex"}} className='head'>
                        
                        <h1 style={{margin:"auto"}} className='top-heading'>certificates</h1>
                    </div>
                    <div className='projects-list'>
                        <div className='project stp'>
                            <img src={ij} alt='project stp'/>
                            <div className='desc'>
                            <h2>Contactless Attendance Marking System With Thermal Screening Using Arduino</h2>
                                <p>An automated system for human face recognition in a real time background for a college to mark the attendance of their employees, and thermal screening to check the temperature of students and employees. So Smart Attendance using Real Time Face Recognition is a real world solution which comes with day to day activities of handling employees</p>
                            
                
                            </div>
                        </div>
                        <div className='project rgb'>
                            <img src={mt} alt='project rgb'/>
                            <div className='desc'>
                            <h2>Introduction to Programming with MATLAB</h2>
                                <p>Introduction to Programming with MATLAB an online  course authorized by Vanderbilt University and offered through   Coursera</p>
                           </div>
                        </div>
                        <div className='project covid'>
                            <img src={mlu} alt='project covid'/>
                            <div className='desc'>
                            <h2>Machine Learning for Business Professionals</h2>
                                <p>Machine Learning for Business Professionals, an online  course authorized by Google Cloud and offered through Coursera</p>
                            </div>
                        </div>
                        <div className='project recipe'>
                            <img src={ms} alt='project reciepe'/>
                            <div className='desc'>
                                <h2>Microsoft AI Classroom series</h2>
                                <p>Microsoft’s AI, machine learning and data science expertise to students through easy to consume modules including live demos, hands on workshops and assignments </p>
                                
                            </div>
                            
                        </div>
                        <div className='project covid'>
                            <img src={awsml} alt='project covid'/>
                            <div className='desc'>
                            <h2>Developing Machine Learning Applications</h2>
                                
                                
                                
                            </div>
                        </div>
                        <div className='project recipe'>
                            <img src={awsdr} alt='project reciepe'/>
                            <div className='desc'>
                                <h2>AWS DeepRacer: Driven by Reinforcement Learning</h2>
                                
                                
                            </div>
                            
                        </div>
                        <div className='project covid'>
                            <img src={pyiitb} alt='project covid'/>
                            <div className='desc'>
                            <h2> Python 3.4.3 </h2>
                                <p>Certificate for Completion of Python 3.4.3  training is offered by the Spoken Tutorial Project, IIT Bombay</p>
                                
                                
                            </div>
                        </div>
                        <div className='project recipe'>
                            <img src={cg} alt='project reciepe'/>
                            <div className='desc'>
                                <h2>Python 101 for Data Science</h2>
                                <p>A course on cognitiveclass.ai Powered by IBM Developer Skills Network. Issued by Cognitive Class </p>
                                
                            </div>
                            
                        </div>
                        <div className='project covid'>
                            <img src={drupal} alt='project covid'/>
                            <div className='desc'>
                            <h2>Drupal</h2>
                                <p>Certificate for Completion of Python Drupal  training is offered by the Spoken Tutorial Project, IIT Bombay </p>
                                
                                
                            </div>
                        </div>
                        <div className='project recipe'>
                            <img src={gk} alt='project reciepe'/>
                            <div className='desc'>
                                <h2>AWS Cloud Practitioner Essentials</h2>
                                <p> AWS Cloud Practitioner Essentials by Global Knowledge</p>
                                
                            </div>
                            
                        </div>
                        <div className='project covid'>
                            <img src={pu} alt='project covid'/>
                            <div className='desc'>
                            <h2>Google Analytics for Power Users</h2>
                                <p>Google Analytics for Power Users by Google </p>
                                
                                
                            </div>
                        </div>
                        <div className='project recipe'>
                            <img src={gk} alt='project reciepe'/>
                            <div className='desc'>
                                <h2>other more certificates link++</h2>
                                <p> AWS Cloud Practitioner Essentials by Global Knowledge</p>
                                <a href='https://drive.google.com/drive/folders/1iIwLQLi-75_DvUL4ujQzDzFeLeLI2DAL?usp=sharing'>Click Here</a>
                                
                            </div>
                            
                        </div>
                    </div>
                </div>
                <Footer/>
        </>)
    }
}
