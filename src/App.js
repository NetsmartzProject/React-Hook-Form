// import logo from './logo.svg';
// import './App.css';
// import { Route, Router, Routes } from 'react-router-dom';
// import { Form, Form1 } from './form/Form1';

// function App() {
//   return (
//     <div className="App">
//    <Router>
//     <Routes>
//       <Route path='/' element={<Form1/>}></Route>
//     </Routes>
//    </Router>
//     </div>
//   );
// }

// export default App;

import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter as Router, Routes,  } from 'react-router-dom';
import { Form, Form1 } from './form/Form1';

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Form1 />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
