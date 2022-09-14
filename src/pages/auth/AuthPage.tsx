import React from 'react';
import {Login} from './login/Login';
import img from '../../assets/images/view.jpg';
import {useSelector} from "react-redux";
import {selectIsRegistered} from "../../bll/selectors/selectors";
import {Registration} from './registration/Registration';
import styles from './AuthPage.module.css';


export const AuthPage: React.FC = () => {

    const isRegistered = useSelector(selectIsRegistered);

    return (
        <div className={styles.authPage} style={{backgroundImage: `url(${img})`}}>
            {
                isRegistered
                    ? <Login/>
                    : <Registration/>
            }
        </div>
    );
};

