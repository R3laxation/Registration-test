import React from 'react';
import {Button, TextField, Typography} from "@mui/material";
import {Controller, SubmitHandler, useForm, useFormState} from 'react-hook-form';
import {useAppDispatch} from "../../../bll/store";
import {IAuthForm} from "../login/Login";
import {setRegistration} from "../../../bll/slices/registrationSlice";
import styles from '../login/Login.module.css';
import {loginValidation, passwordValidation} from "../validation";

export const Registration: React.FC = () => {

    const {handleSubmit, control} = useForm<IAuthForm>();
    const {errors} = useFormState({control});
    const dispatch = useAppDispatch();

    const onSubmit: SubmitHandler<IAuthForm> = (data) => {
        dispatch(setRegistration(data));
    }

    return (
        <div className={styles.registrationPage}>
            <Typography variant="h4">
                Sign Up
            </Typography>
            <Typography variant="subtitle1" gutterBottom={true} className={styles.subtitle}>
                Please fill in this form to create an account!
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
                    Sign Up
                </Button>
            </form>
        </div>
    );
};

