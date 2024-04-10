
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import AniRoutes from './components/AniRoute';
import Navbar from './components/navbar/Navbar';


function App() {
  return (
    <div>
      <Router>  
        <Navbar/>
        <AniRoutes/>
      </Router>
      {/* <Test/> */}
      
    </div>
  );
}

export default App;
