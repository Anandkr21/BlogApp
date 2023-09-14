import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from "./pages/Home";
import About from './pages/About';
import Article from './pages/Article';
import ArticlesList from './pages/ArticlesList';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar/>
      <div className="max-w-screen-md mx-auto pt-20">
        <Routes>
          <Route path = '/' element= {<Home/>}/>
          <Route path='/about' element={<About/>} />
          <Route path = '/article' element={<Article/>}/>
          <Route path='/articlelist' element={<ArticlesList/>} />
        </Routes>
      </div >
    </Router>
    
  );
}

export default App;