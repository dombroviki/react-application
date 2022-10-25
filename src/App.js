import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Settings from './components/Settings/Settings';
import News from './components/News/News';
import Music from './components/Music/Music';


const App = () => {
  return (
    
      <div className='app-wrapper'>
        <Header />
        <Navbar /> 
          <div className='app-wrapper__content'>
            <BrowserRouter>
              <Routes>
                <Route path="/profile"   element={<Profile/>}/>
                <Route path="/dialogs/*" element={<Dialogs/>}/>
                <Route path="/news"      element={<News/>}/>
                <Route path="/music"     element={<Music/>}/>
                <Route path="/settings"  element={<Settings/>}/>
              </Routes>
            </BrowserRouter>
          </div>
      </div>
    
  )
}

export default App;

