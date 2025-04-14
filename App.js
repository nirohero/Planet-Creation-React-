import './App.css';
import {useState} from 'react';
import ReactDOM from 'react-dom/client';

function LineOne(){
  return(
    <>
    <div className = "firstV">
    </div>
    </>
  )
}
function TopBar(){
  return(
    <>
    <div className="Top">
      <h3>Create your own planet!</h3>
    </div>
    </>
  )
}
function RCircle(){
  return(
    <>
    <div className="rotation">
    <div className="circle">
    </div>
    </div>
    </>
  )
}
function PlanetForm(){
  const [name, setName] = useState('');
  const [color, setColor] = useState('');
  const [selected, setSelected] = useState('');

  const handleSubmit = (event) =>{
    event.preventDefault();
    alert(name + color);
  }
  return(
    <>
    <div className = "PlanetBG">
    <TopBar/>
    <RCircle/>
    <form onSubmit={handleSubmit}>
      <label> Enter your planet's name:
        <input 
        value = {name}
        onChange = {e => setName(e.target.value)}
        placeHolder ="Enter planet name"
        type = "text"
        name = "name"
        required
        />
        <LineOne/>
        <br/>
      </label>
      <label>Enter the color of your planet:
        <input
        value ={color}
        onChange = {e => setColor(e.target.value)}
        placeHolder = "Enter color of your planet"
         type = "text"
        color = "color"
        required
        />
        <LineOne/>
        <br/>
        </label>
        <label>Is your planet close to the sun
        <select value = {selected} onChange = {e=> setSelected(e.target.value)}>
          <option value = "yes" required>Yes</option>
          <option value = "no" required>No</option>
        </select>
        <LineOne/>
        </label>
      <input type ="submit"/>
    </form>
    <div className = "CustomPlanet">
      <p>Planet name: {name} </p>
      <p>Planet color: {color}</p>
      <p>Planet close to the sun: {selected}</p>
    </div>
    <div className = "About">
    <p>In this website we get to create a planet and implement rings and moons to it a well! It's inspired off a project I did back in college.</p>
    <p>Some interesting facts about <b>space</b>: Every solar system has a source of prominence, in our case it's the Sun!</p>
    </div>
    <div className ="Venus">
      <p> <h2>Venus</h2> is the hottest planet in the solar system, you would think it would be Mercury since it's the closest to the sun but in truth Venus is hotter due to it's greenhouse gas effect.</p>
    </div>
    <br/>
    <div className = "Mars">
    <p> <h2>Mars</h2> is known as the red planet. It used to contain water and many scientists beleive that it used to have life as well. It's currently our next landmark for space exploration.</p>
    </div>
    </div>
    </>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<PlanetForm/>);
function App() {
  <>
  <PlanetForm/>
  </>
}
export default App;
