import {useState, useRef} from 'react';
import './App.css';
import './MyApp.css';
import Reacticon from './Reacticon.png';
import JS from './JS.png';
import html from './html.png';
import css from './css.png';
import sql from './sql.png';
import csharp from './csharp.png';
import gmail from './gmail.png';
import work from './work.png';
import selfie from './selfie.jpg';



function MyButton(){
    function handleClick(){ // nested event component that handles when the button is clicked
      alert('You clicked me!');
      setCount(count + 1);
    }
    const [count, setCount] = useState(0);
  return (
  <button onClick ={handleClick} >I'm a button. Clicked {count} times.</button>);
  //add an event that tracks how many times you clicked the button
}
function NameTag(){
  return(
    <>
    <div className = "containerName">
      <p>Welcome to my portfolio website!</p>
    </div>
    </>
  )
}
function AboutMe(){
  return(
    <>
     <div className = "BorderLine">
    <div className ="Bio">
    <div className ="ImageBio"><img src = {selfie} alt ="Pic of Niro" width = "130" height ="130"/></div>
    <div className ="TextBio"><h3>Hi I'm Niro!</h3>
    <p>I'm a warrior who refines his skills daily. I like to code, play video games, exercise, have meaningful converstations and help others acheivet their goals!</p>
    </div>
    </div>
    </div>
    <br/>
    </>
  )
  }
function LineOne(){
  return(
  <>
  <div className = "firstV">
  </div>
  <br/>
  </>
  )
}
function OneCircle(){
  return(
    <>
    <div className = "circle">
    </div>
    </>
  )
}
function MyProjects(){
  return(
    <>
    <div className = "Projects">
    <h2>Projects:</h2>
    <ul>
      <div className = "Planets">
      <li>Planet Creation App</li>
      </div>
      {/*<div className = "BMI">
      <li>BMI Fitness App</li>
      </div>*/}
    </ul>
    </div>
    </>
  )
}

function MyExperience(){
  return(
    <>
    <div className = "Experience">
      <h3>Experience:</h3>
      <ul>
     <li><b><img src={work} alt ="work icon" width = "20" height =" 20" />IT developer at Tata Consulting Services</b></li>
     <p>During my time at this role I worked on several different projects. I worked at two different companies, those companies are <u>CIBC</u> and <u>SunLife Finanicial</u> </p>
     <p>While I was working at CIBC my role was a quality assurance analyst, I had to make sure the landing page for the card a client was using was working properly with no issues or bugs.</p>
     <p>I also had a role of being a front-end developer at SunLife financial, here I would work with other developers and make any changes to the website I made to BitBucket.</p>
     <li><b><img src ={work} alt ="work icon" width = "20" height = "20"/>Personal Trainer at GoodLife</b></li>
     <p>Recently I took up a role as a personal trainer because I've always been working from such a young age and I wanted to meet people directly and help them acheive their fitness goals.</p>
     <p>I had the opportunity to prospect clients and work with them through out their contract, it was great and really helped build my social skills.</p>
     </ul>
    </div>
    </>
  )
}
function MyTechStack(){
  return(
<div className = "Tech">
  <h1> Tech stack:</h1>
  <ul>
    <li> <img src={Reacticon}  width = "50" height = "50" alt = "React"/></li>
    <li> <img src= {JS} width = "50" height = "50" alt = "JavaScript" /></li>
    <li> <img src = {html} width = "50" height  = "50" alt ="HTML" /></li>
    <li> <img src={css} width = "50" height = "50" alt = "CSS" /></li>
    <li> <img src = {sql} width = "50" height = "50" alt = "SQL" /></li>
    <li> <img src = {csharp} width ="50" height="50" alt = "Csharp" /></li>
  </ul>
</div>
  )
}
function MyContact(){
  return (
    <div className = "Contact">
      <h1> Contact info and code repistory: </h1>
        <p>You can contact me at my email :<img src= {gmail} width ="20" height = "20" alt="gmail"/> nirokal92@gmail.com</p>
        <a href="">Code repisotory</a>
    </div>
  )
}

export default function MyApp(){
  const aboutMeRef = useRef(null);
  function handleHomeClick(){
    aboutMeRef.current.scrollIntoView();
  }
  const projectsRef = useRef(null);
  function handleProjectClick(){
    projectsRef.current.scrollIntoView();
  }
  const experienceRef = useRef(null);
  function handleExperienceClick(){
    experienceRef.current.scrollIntoView();
  }
  const techRef = useRef(null);
  function handleTechRef(){
    techRef.current.scrollIntoView();
  }
  const contactRef = useRef(null);
  function handleContactClick(){
    contactRef.current.scrollIntoView();
  }
  
  return (
      <>   
      <div className = "MyApp">

{/* NavBar that isn't properly functioning yet...
  <nav className ="navbar">
    <ul>
    <li onClick={handleHomeClick} ref ={aboutMeRef}>Home</li>
    <li onClick={handleProjectClick} ref ={projectsRef}>Projects</li>
    <li onClick ={handleExperienceClick} ref={experienceRef}>Experience</li>
    <li onClick ={handleTechRef} ref={techRef}>Tech-Stack</li>
    <li onClick = {handleContactClick} ref = {contactRef}> Contact</li>
    </ul>
  </nav>
*/}
          <br/>
      <NameTag/>
      <br/>
      <AboutMe/>
      <LineOne/>
      <OneCircle/>
      <br/>
      <MyProjects/>
      <br/>
      <LineOne/>
      <OneCircle/>
      <br/>
    <MyExperience/>
    <br/>
    <LineOne/>
    <OneCircle/>
    <br/>
    <MyTechStack/>
    <MyContact />
    </div>
      </>
  );
}

