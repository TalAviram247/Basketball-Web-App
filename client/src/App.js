import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import CreatePlayer from './components/CreatePlayer';
import ShowPlayerList from './components/ShowPlayerList';
import ShowPlayerDetails from './components/ShowPlayerDetails';
import UpdatePlayerInfo from './components/UpdatePlayerInfo';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path='/' element={<ShowPlayerList />} />
          <Route path='/create-player' element={<CreatePlayer />} />
          <Route path='/edit-player/:id' element={<UpdatePlayerInfo />} />
          <Route path='/show-player/:id' element={<ShowPlayerDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;