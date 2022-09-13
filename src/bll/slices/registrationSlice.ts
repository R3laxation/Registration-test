import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IAuthForm} from "../../pages/auth/login/Login";
import {setIsLoading} from "./appSlice";
import {auth} from "../../services/api";


export const setRegistration = createAsyncThunk('registration/setIsRegistered',
    async (data: IAuthForm, {dispatch}) => {
        try {
            dispatch(setIsLoading({loading: true}));
            const res = await auth.register(data);
            dispatch(setIsRegistered({isRegistered: true}));
        } catch (e) {

        } finally {
            dispatch(setIsLoading({loading: false}));
        }
    })

const slice = createSlice({
    name: 'registration',
    initialState: {
        isRegistered: false,
    } as IStateType,
    reducers: {
        setIsRegistered(state, action: PayloadAction<{ isRegistered: boolean }>) {
            state.isRegistered = action.payload.isRegistered;
        }
    }
})

export const registrationSlice = slice.reducer;
export const {setIsRegistered} = slice.actions;

interface IStateType {
    isRegistered: boolean
}