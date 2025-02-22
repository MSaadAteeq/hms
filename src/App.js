import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { useState } from 'react';
import Post from './Component/Post'
import Home from './Component/Home';

function App() {

  const [isLoggedin, setIsLoggedIn] = useState(JSON.parse(localStorage.getItem('login') || false))
  const [formData, setFormData] = useState({
    Uname : '',
    Upass : ''
  })
  const [error, setError] = useState(null)

  const handleForm = (e)=>{
    e.preventDefault();
    if(formData.Uname === "admin" && formData.Upass === "123"){
      localStorage.setItem('login', JSON.stringify(true))
      setIsLoggedIn(localStorage.getItem('login'))      
      setError(null)
    }else{
      setError("Invalid Username and Password")
    }
  }

  const handleInput = (e)=>{
    const {name, value} = e.target;
    setFormData((prevData)=>({
      ...prevData, [name] : value
    }))
  }

  const handleLogout = ()=>{
    localStorage.setItem('login', JSON.stringify(false))
    setIsLoggedIn(localStorage.getItem)
    setFormData({Uname : '', Upass: ''}) // agar m home page ka hi alag component bna rha hun or waha login k bd logout k button aayega, tw usko m kese handle kro ga app.js k bahar, dusra ye k phr logout krty wqt formdata ko khali kese krao ga.
  }




  return (
    <>
      {
        isLoggedin ? (
          <>
             <h1>Welcome to JSON Posts !!!</h1>
            <input type='button' value="Logout" onClick={handleLogout} />
            <Post /> 

            {/* <Home /> */}
            
          </>
        ) : (
          <>
          <form className='container mt-4 p-4 border rounded shadow-sm bg-light' onSubmit={handleForm}>
            <h3 className='mb-3 text-center'>Login</h3>
            <div className="mb-3">
              <label className='form-label'>Username</label>
              <input 
              type='text'
              name='Uname'
              value={formData.Uname}
              placeholder='Enter your username'
              onChange={handleInput}
              className='form-control'
              />
            </div>
            <div className='mb-3'>
              <label className='form-label'>Password</label>
              <input className='form-control' 
              type='password'
              name='Upass'
              value={formData.Upass}
              placeholder='Enter Password'
              onChange={handleInput}
              />
            </div>

            {error && <p className='text-danger'>{error}</p>}
            <button type='submit' className='btn btn-primary w-100'>Login</button>
            </form>
            
          </>
        )
      }
    </>
  );
}

export default App;
