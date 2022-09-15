import React, {useEffect} from 'react';
import {Button, TextField, Typography} from "@mui/material";
import {Controller, SubmitHandler, useForm, useFormState} from 'react-hook-form';

import {useNavigate} from "react-router-dom";
import {getTokenFromLocalStorage} from "../../../utils/localStorage/localStorage";
import { useAppDispatch } from '../../../bll/store';
import {setIsLoginTC} from "../../../bll/slices/appSlice";
import {PATH} from "../../../common/constants";
import {loginValidation, passwordValidation} from "../validation";
import styles from './Login.module.css';

export const Login: React.FC = () => {

    const {handleSubmit, control} = useForm<IAuthForm>();
    const {errors} = useFormState({control});
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const onSubmit: SubmitHandler<IAuthForm> = (data) => {
        dispatch(setIsLoginTC(data))
        console.log(data)
    }

    useEffect(() => {
        const token = getTokenFromLocalStorage('token');
        if (token) {
            navigate(PATH.MAIN)
        }
    }, [])

    return (
        <div className={styles.authPage}>
            <Typography variant="h4">
                Sign in
            </Typography>
            <Typography variant="subtitle1" gutterBottom={true} className={styles.subtitle}>
                Please enter your login and password
            </Typography>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>

                <Controller control={control} name={'login'} rules={loginValidation}
                            render={({field}) => (
                                <TextField label={'Login'} size={'small'}
                                           margin={'normal'} fullWidth={true}
                                           onChange={(e) => field.onChange(e)}
                                           value={field.value}
                                           error={!!errors.login?.message}
                                           helperText={errors.login?.message}

                                />
                            )}/>
                <Controller control={control} name={'password'} rules={passwordValidation}
                            render={({field}) => (
                                <TextField label={'Password'} size={'small'}
                                           margin={'normal'} fullWidth={true}
                                           onChange={(e) => field.onChange(e)}
                                           value={field.value}
                                           error={!!errors.password?.message}
                                           helperText={errors.password?.message}

                                />
                            )}/>
                <Button type={'submit'} variant={'contained'} disableElevation={true}
                        sx={{marginTop: 2}} fullWidth={true}>
                    Sign in
                </Button>
            </form>
        </div>
    );
};

export interface IAuthForm {
    login: string
    password: string
}