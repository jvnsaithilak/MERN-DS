import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import ThemeContext from '../context/ThemeContext'
import AuthContext from '../context/AuthContext';
import languageContext from '../context/LanguageContext';

const Home = () => {
  const navigate = useNavigate();
  const theme= useContext(ThemeContext);
  const user= useContext(AuthContext);
  const {language,changeLanguage}=useContext(languageContext);
  const handleClick =()=>{
      navigate("/About");
  }

  const translate={
    en:{
      greeting:"hello"
    },
    te:{
      greeting:"hello"
    },


  }
  const text=translate[language];
  return (
    <div>
      <p>Language:{language}</p>
      <p>Greeting:{text.greeting}</p>
      <button onClick={()=>changeLanguage('en')}>English</button>
      <button onClick={()=>changeLanguage('te')}>telugu</button>
      <button onClick={()=>changeLanguage('ta')}>tamil</button>
      <button onClick={handleClick}>About</button>
      <h1>{theme}</h1>
      <h2>user Details</h2>
      <p>ID:{user.id}</p>
      <p>name:{user.name}</p>
      <p>Email:{user.email}</p>
    </div>
  )
}

export default Home
