// import logo from './logo.svg';
// import './App.css';
import Home from './components/home/home';
import Dashboard from './components/dashboard/userdashboard';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import UserState from './contexts/userState';
import NoteState from './contexts/noteState';

// import userContext from './contexts/userContext';

function App() {
  return (
    <>
      <NoteState>
      <UserState>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dashboard/createnote" element={<Dashboard />} /> 
            <Route path="/dashboard/yournotes" element={<Dashboard />} />
            <Route path="/login" element={<Home />} />
            <Route path="/register" element={<Home />} />
          </Routes>
        </Router>
      </UserState>
      </NoteState>
    </>
  );
}

export default App;
