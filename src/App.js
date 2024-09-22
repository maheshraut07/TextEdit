// import Navbar from './components/Navbar.js';
// import TextForm from './components/TextForm.js';
// import About from './components/About.js';
// import React, { useState } from 'react';
// import Alert from './components/Alert.js'; 


 
// function App() {
//   const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
//   const [alert, setAlert] = useState(null);

//   const showAlert = (message, type)=>{
//       setAlert({
//         msg: message,
//         type: type
//       })
//       setTimeout(() => {
//           setAlert(null);
//       }, 1500);
//   }

//   const toggleMode = ()=>{
//     if(mode === 'light'){
//       setMode('dark');
//       document.body.style.backgroundColor = '#042743';
//       showAlert("Dark mode has been enabled", "success");
//     }
//     else{
//       setMode('light');
//       document.body.style.backgroundColor = 'white';
//       showAlert("Light mode has been enabled", "success");
//     }
//   }
//   return (
//     <>
//     <Navbar title="TextEdit" mode={mode} toggleMode={toggleMode} key={new Date()} />
//     <Alert alert={alert}/>
//     <div className="container my-3">
//        <About mode={mode} />
//        <TextForm showAlert={showAlert} heading="Try TextEdit - word counter, character counter, remove extra spaces" mode={mode}/>
//     </div>
//     </> 
//   );
// }

// export default App;

import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';

const App = () => {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not

  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact element={<Home />} />
        <Route path='/about' element={<About mode={mode} />} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
