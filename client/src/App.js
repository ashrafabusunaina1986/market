import logo from './logo.svg';
import './App.css';
import PostInputs from './api/PostInputs';
import { Link, Route, Routes, useSearchParams } from 'react-router-dom';
import GetUsers from './api/home/GetUsers';
import UploadFile from './api/UploadFile';
import Login from './api/Login';
import Home from './api/Home';
import { useEffect, useState } from 'react';
import Logout from './api/Logout';
import { FcHome } from 'react-icons/fc'
import { IoMdPersonAdd } from 'react-icons/io'
import { FcAddImage } from 'react-icons/fc'
import { IoLogIn, IoLogOut } from 'react-icons/io5'
import { FaBars } from 'react-icons/fa'
import UseEffect from './test/UseEffect';
import MouseContaner from './test/MouseContaner';
import Intevel from './test/Intevel';
import Test from './test/Test';
import EShow_item from './api/home/EShow_item';
import Btn_buy from './api/home/Btn_buy';
import Buy from './api/home/Buy';
import Finish from './api/Finish';

function App() {
  const [param, setParam] = useSearchParams()
  const [email, setEmail] = useState('')
  useEffect(() => {
    const e = localStorage.getItem('user')
    setEmail(e ? JSON.parse(e) : '')

  }, [])
  const pageload = (name) => {
    window.location.replace(name)
  }
  return (
    <div className="App">

      <nav>
        <ul>
          <li>
            <Link to='/'
              onClick={() => pageload('/')}
            ><FcHome className='li' />Home</Link>
          </li>
          <li>
            {email ? '' : <Link to='/newuser' onClick={() => pageload('/newuser')}><IoMdPersonAdd className='li' />Sign up</Link>}
          </li>
          <li>
            <Link to={email ? '/uploadfile?email=' + email.email : '/uploadfile'}
              onClick={() => pageload(email ? '/uploadfile?email=' + email.email : '/uploadfile')}
            >
              <FcAddImage className='li' />Add item</Link>
          </li>
          <li>
            {
              email ? <Link to='/logout' onClick={() => pageload('/logout')}><IoLogOut className='li' />Logout</Link> :
                <Link to='/login' onClick={() => pageload('/login')} ><IoLogIn className='li' />Login</Link>
            }
          </li>
        </ul>
      </nav>
      {
        email ?
          <div className='username'>
            <span>user name:(Name:{email.name} and Email:{email.email})</span>
          </div> : ''
      }

      <main className="clients-slide">
        <GetUsers />
      </main>

      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path='/logout' element={<Logout />} />
        <Route path='/getusers' element={<GetUsers />} />
        <Route path='/newuser' element={<PostInputs />} />
        <Route path='/uploadfile' element={<UploadFile />} />
        <Route path='/login' element={<Login />} />
        <Route path={'/item/:email/:id'} element={<EShow_item />} />
        <Route path='/item/:email/buyitem' element={<Buy/>}/>
        <Route path='/item/:email/buyitem/finsih/:id' element={<Finish/>}/>
      </Routes>
    </div>
  );
}

export default App;
