
import { Route, Routes } from 'react-router-dom';
import './App.css';
import './css/Style.css'
import Home from './Components/Home';
import Layout from './Components/Layout';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
