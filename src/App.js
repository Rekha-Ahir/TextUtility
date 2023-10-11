import TextForm from './Components/TextForm';

import Navbar from './Components/Navbar';
import Alert from './Components/Alert';
import { useState } from 'react';

function App() {
  const[mode,setMode]=useState('light')
  const[alert,showAlert]=useState('')
  const toggleMode=()=>{
  if(mode === 'light'){
    setMode('dark');
    document.body.style.backgroundColor = '#042743';
    document.body.style.color='white';
    showAlert("Dark mode has been enabled", "success");
    document.title = 'TextUtils - Dark Mode';
   
  }
  else{
    setMode('light');
    document.body.style.backgroundColor = 'white';
    document.body.style.color='black';
    showAlert("Light mode has been enabled", "success");
    document.title = 'TextUtils - Light Mode';
  }}
  
  return (<>
    <div className="App">
      <Navbar  mode ={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      < TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert}/>
    </div>
    </>
  );
}

export default App;
