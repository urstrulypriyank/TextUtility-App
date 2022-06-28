
import './App.css';
import About from './Componentes/About';
import Navbar from './Componentes/Navbar';
import Textform from './Componentes/Textform';
function App() {
  return (
    
    <>
    <Navbar title="TextUtility" home="home" nav1="About" nav2="Contact-Us"/>
    <Textform heading="Enter Your text to analyze"/>
    <About/>
    </>

  );
}

export default App;

