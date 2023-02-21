import {Main} from './pages/main'
import {Login} from './pages/login'
import {Create} from './pages/create'
import {Error} from './pages/error'

import {Navbar} from './components/Navbar'

import './styles/App.css'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>

        <Routes>
          <Route path="/" element={<Main />}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/create" element={<Create/>}/>
          <Route path="*" element={<Error/>}/>
        </Routes>

      </Router>
    </div>
  );
}

export default App;
