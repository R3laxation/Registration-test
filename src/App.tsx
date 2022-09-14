import React from 'react';
import {Route, Routes} from 'react-router-dom';
import { PATH } from './common/constants';
import { Login } from './pages/auth/login/Login';
import {Home } from './components/home/Home';
import { Registration } from './pages/auth/registration/Registration';
import {Profile} from "./pages/profile/Profile";
import {News} from "./pages/news/News";
import {Main} from "./pages/main/Main";
import {AuthPage} from "./pages/auth/AuthPage";


function App() {
  return (
    <div>
        <Home/>
        <Routes>
            <Route path={'/'} element={<Main/>}/>
            <Route path={PATH.AUTH} element={<AuthPage/>}/>
            <Route path={PATH.NEWS} element={<News/>}/>
            <Route path={PATH.PROFILE + '/*'} element={<Profile/>}/>
        </Routes>
    </div>
  );
}

export default App;
