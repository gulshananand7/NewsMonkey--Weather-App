import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
 import { BrowserRouter as Router,Route,
 } from 'react-router-dom';


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert]= useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() =>{
      setAlert(null);
    },1500);

  }

  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = 'rgb(4 39 67)';
      showAlert("Dark mode has been enabled", "Success");
      document.title = "TextUtils - Dark Mode";
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "Success");
      document.title = "TextUtils - Light Mode";
    }
  }
  return (
<>
<Router>
<Navbar title="TextUtils"  aboutText = "About Us" mode={mode} toggleMode={toggleMode} />
<Alert alert= {alert} />
<div className="container">
 <div> 
    <Route exact path="/about">
    <About />
    </Route>
    <Route exact path="/"> 
    <TextForm showAlert={showAlert} heading="Enter the Text to analyze below" mode={mode}/> 
    </Route>
</div> 
</div>
</Router>
</> 
);
}

export default App;