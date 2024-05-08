import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import {Home, Profile} from './Pages/index';
import { Header, Footer } from './sections/index';
import { Container} from './components/index';


function App() {
  return (
    <>
    <Router basename='/'>
      <Header/>
      <Container>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/profile' element={<Profile/>} />
          </Routes>
      </Container>
      <Footer/>
    </Router>
    </>

  );
}

export default App;
