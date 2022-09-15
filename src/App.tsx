import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {PATH} from './common/constants';
import {Layout} from './components/layout/Layout';
import {Profile} from "./pages/profile/Profile";
import {News} from "./pages/news/News";
import {Main} from "./pages/main/Main";
import {AuthPage} from "./pages/auth/AuthPage";

function App() {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index element={<Main/>}/>
                    <Route path={PATH.MAIN} element={<Main/>}/>
                    <Route path={PATH.AUTH} element={<AuthPage/>}/>
                    <Route path={PATH.NEWS} element={<News/>}/>
                    <Route path={PATH.PROFILE + '/*'} element={<Profile/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
