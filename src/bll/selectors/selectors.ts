import { AppRootStateType } from "../store";

export const selectIsRegistered = (state: AppRootStateType) => state.registration.isRegistered;