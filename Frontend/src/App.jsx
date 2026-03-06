import React from 'react'
import Parent from './components/Parent'
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Service from './pages/Service';
import Navbar from './components/Navbar';
import {Routes,Route} from 'react-router-dom'
import State from './hooks/State';
import Hooks from './hooks/Hooks';
import Form from './hooks/Form';
import Effect from './hooks/Effect';
import EffectWithApi from './hooks/EffectWithApi';
import Login from './Auth/Login';
import Ref from './hooks/Ref';
import Reducer from './hooks/Reducer';
import Memo from './hooks/Memo';
import Callback from './hooks/Callback';
import Signup from './Auth/Signup';
import Todo from './components/Todo';

const App = () => {
  const element=<div>Hello world</div>;
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/service' element={<Service/>}></Route>
        <Route path='/todo' element={<Todo/>}></Route>
        <Route path='/Login' element={<Login/>}></Route>
        <Route path='/Signup' element={<Signup/>}></Route>
        <Route path='/hooks' element={<Hooks/>}>
          <Route path='useState' element={<State/>}></Route>
          <Route path='form' element={<Form/>}> </Route>
          <Route path='useEffect' element={<Effect/>}> </Route>
          <Route path='useEffectWithApi' element={<EffectWithApi/>}> </Route>
          <Route path='useRef' element={<Ref/>}> </Route>
          <Route path='useReducer' element={<Reducer/>}> </Route>
          <Route path='useMemo' element={<Memo/>}> </Route>
          <Route path='useCallback' element={<Callback/>}> </Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
