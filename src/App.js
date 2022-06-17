import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Content from './components/Content/Content';
import { BrowserRouter, Route, Routes,  } from 'react-router-dom';
import Music from './components/Music';
import Films from './components/Films/Films';
import Users from './components/users/Users';
import Bibr from './components/posts/Posts';
import Shop from './components/shop/Shop';
import BeerInfo from './components/shop/beerInfo/BeerInfo';
import Camera from './components/camera/Camera';

const App =()=>{
  return(
    <BrowserRouter>
      <div className="App-Wrapper">
        <Header className="header"/>
        <Sidebar className="navbar"/>
        <Routes>
            <Route exact path='/main' element={<Content/>}  />
            <Route path='/music' element={<Music/>}  />
            <Route path='/films' element={<Films/>}  />
            <Route path='/users' element={<Users />}  />
            <Route path='/posts' element={<Bibr />}   />
            <Route exact path='/shop' element={<Shop/>}   />
            <Route exact path='/beer/:id' element={<BeerInfo />}   />
            <Route path='/camera' element={<Camera />}   />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;
