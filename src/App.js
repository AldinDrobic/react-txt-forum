import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from 'react-router-dom'
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import AppContainer from './hoc/AppContainer';
import Timeline from './components/Timeline/Timeline';
import Register from './components/Register/Register';
function App() {
  return (
    <AppContainer>
      <BrowserRouter>
        <div className="App">
          <h1>React Txt Forum</h1>
          <h4>
            <span className='material-icons'>loyalty
            </span>
          </h4>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path='/timeline' element={<Timeline />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </AppContainer>
  );
}

export default App;
