import React from 'react'
import Navbar from './Navbar'
import Alert from './Alert';
import TextForm from './TextForm';

const Home = () => {

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
          setAlert(null);
      }, 1500);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }
  return (
    <>
    <Navbar title="TextEdit" mode={mode} toggleMode={toggleMode} key={new Date()} />
    <Alert alert={alert}/>
    <div className="container my-3">
       <TextForm showAlert={showAlert} heading="Try TextEdit - word counter, character counter, remove extra spaces" mode={mode}/>
    </div>
    </> 
  )
}

export default Home