//STYLES
import './App.css';

import "animate.css/animate.min.css";

//COMPONENTS
import Header from './components/header/header';
import MainTitle from './components/main/mainTitle';
import SmallGrow from './components/main/smallGrow';
import MainGrow from './components/main/mainGrow';

//PICTURES
import logo from '../src/img/growcast-fondo-transparente.png'
import mainPerspectiva from './img/main-perspectiva.png';
import hubPerspectiva from './img/hub-perspectiva.png';
import salidasPerspectiva from './img/salidas-perspectiva.png';
import Devices from './components/main/devices';
import Growcast from './components/main/growcast';
import Gallery from './components/main/gallery';

function App() {
  return (
    <div className="App">
      <header>
        <Header logo={logo} ></Header>

      </header>
      <main>
        <MainTitle></MainTitle>
        <div className="growContainer">
          <div className='smGrow'>
          <SmallGrow img1={hubPerspectiva} img2={salidasPerspectiva} inverse={false}></SmallGrow>
          </div>
          <MainGrow img={mainPerspectiva}></MainGrow>
          <div className='smGrow'>
          <SmallGrow img1={salidasPerspectiva} img2={hubPerspectiva} inverse={true}></SmallGrow>
          </div>
        </div>

        <div className='devices'>
          <Devices></Devices>
        </div>

        <Growcast></Growcast>

        <Gallery></Gallery>
        
      </main>
    </div>
  );
}

export default App;
