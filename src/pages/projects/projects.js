
import React from 'react';
import './projects.css'


import DB from '../../img/DB.png'
import im from '../../img/im.jpg'
import ps from '../../img/ps.png'
import corona from '../../img/corona.jpg'
import vam from '../../img/vam.jpg'

import Button1 from '../../component/Button1'
import Button2 from '../../component/Button2'
import Footer from '../../component/footer'
import proj from '../../img/rocket.svg'



export default class Projects extends React.Component{
    render(){
        return(<>
                <title>Projects | vamsinandan B S</title> 
                <div className='projects'>
                    <div style={{display:"flex"}} className='head'>
                        <img style={{width:"100px",height:'100px'}} src={proj} />
                        <h1 style={{margin:"auto"}} className='top-heading'>Projects</h1>
                    </div>
                    <div className='projects-list'>
                        <div className='project stp'>
                            <img src={DB} alt='project stp'/>
                            <div className='desc'>
                                <h2>studentdb(mini classroom)</h2>
                                <p>Automated generation of Students Id’s for new Students.
                                Sharing notes, viewing shared notes and Downloading notes.
                                Adding a post with respect to categories and which consists 
                                of date, time, user photo, user name, number of views, post related images.
                                Separate Admin (Teachers) control Panel to inspect users (Students).
                                Adding basic details page and marks page.
                                Contact us page which provides one to one interaction with Teachers with security</p>
                                <a href='https://vamsinandanbs.github.io/sudentdb-mini_classroom/'target="_blank"><Button1/></a>
                                <a href='https://github.com/vamsinandanBs/sudentdb-mini_classroom'target="_blank"><Button2/></a>
                            </div>
                        </div>
                        <div className='project rgb'>
                            <img src={im} alt='project rgb'/>
                            <div className='desc'>
                            <h2>attendance-marking-system-via-image-processing</h2>
                                <p>An automated system for human face recognition in a real time background for a college to mark the attendance of their employees. So Smart Attendance using Real Time Face Recognition is a real world solution which comes with day to day activities of handling employees</p>
                                <a href='https://vamsinandanbs.github.io/attendance-marking-system-via-image-processing/'target="_blank"><Button1/></a>
                                <a href='https://github.com/vamsinandanBs/attendance-marking-system-via-image-processing'target="_blank"><Button2/></a>
                                
                            </div>
                        </div>
                        <div className='project covid'>
                            <img src={corona} alt='project covid'/>
                            <div className='desc'>
                            <h2>covid-helpline-tips</h2>
                                <p>covid-helpline-tips A WEB APP where it has all  emergency links government sites ,Aarogya Setu , Vaccine registration links  , do and donts , tips ,Preventive Measures to safe gaurd against coivd 19</p>
                                <a href='https://covid-tips-helpline.000webhostapp.com/'target="_blank"><Button1/></a>
                                <a href='https://github.com/vamsinandanBs/covid-helpline-tips'target="_blank"><Button2/></a>
                            </div>
                        </div>
                        <div className='project recipe'>
                            <img src={ps} alt='project reciepe'/>
                            <div className='desc'>
                                <h2>pencil-sketch-images-using-python</h2>
                                <p>pencil-sketch-images-using-python </p>
                                <a href='https://vamsinandanbs.github.io/pencil-sketch-images-using-python/'target="_blank"><Button1/></a>
                                <a href='https://github.com/vamsinandanBs/pencil-sketch-images-using-python'target="_blank"><Button2/></a>
                            </div>
                            
                        </div>
                        <div className='project covid'>
                            <img src={vam} alt='project covid'/>
                            <div className='desc'>
                            <h2>PROJECTS</h2>
                                <p>github link where my projects uploaded Languages used are html , JavaScript , python, css, bootstrap, php.. </p>
                                
                                <a href='https://github.com/vamsinandanBs'target="_blank"><Button2/></a>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
        </>)
    }
}
