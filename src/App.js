import { useState } from 'react';
import './App.css';
import Navigation from './components/navigations/Navigation';
import Main from './components/main/Main';


function App() {
  const [tasknameSearchQuery, setTasknameSearchQuery] = useState("");
  return (
    <div className="App">
      <Navigation setTasknameSearchQuery={setTasknameSearchQuery} />
      <Main tasknameSearchQuery={tasknameSearchQuery} />
    </div>
  );
}

export default App;
