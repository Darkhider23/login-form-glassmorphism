import './App.css';
import moon from './assets/moon.png';
import mountain1 from './assets/mountains01.png';
import mountain2 from './assets/mountains02.png';
import road from './assets/road.png';

function App() {
  const Parallax = require('parallax-js')
  window.onload= function(){
    let scene = document.getElementById('scene');
    let parallax = new Parallax(scene);
  };
  return (
   <section>
    <div className="container">
      <div id='scene' >
        <div className="layer" data-depth-x="-0.5" data-depth-y="0.25" >
          <img src={moon} alt="" />
        </div>
        <div className="layer" data-depth-x="0.15">
          <img src={mountain1} alt="" />
        </div>
        <div className="layer" data-depth-x="0.25">
          <img src={mountain2} alt="" />
        </div>
        <div className="layer" data-depth-x="-0.25">
          <img src={road} alt="" />
        </div>
      </div>
    </div>
    <div className="login">
        <h2>Sign In</h2>
        <div className="inputBox">
          <input type="text" placeholder='Username'></input>
        </div>
        <div className="inputBox">
          <input type="password" placeholder='Password'></input>
        </div>
      <div className="inputBox">
        <input type='submit' value='Login' id='btn'></input>
      </div>
      <div className="group">
        <a href="/#">Forget Password</a>
        <a href="/#">Signup</a>
      </div>
      </div>
   </section>
  );
}

export default App;
