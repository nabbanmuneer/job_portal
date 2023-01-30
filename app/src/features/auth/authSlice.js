import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: { user: null, token: null },
    reducers: {
        setCredentials: (state, action) => {
            console.log("payload", action.payload);

            const { foundUser, accessToken } = action.payload;
            console.log("userstate cread", foundUser, accessToken);
            state.user = foundUser
            state.token = accessToken
            console.log("userstate", foundUser, accessToken);
        },
        logOut: (state, action) => {
            state.user = null
            state.token = null
        }
    }
})

export const { setCredentials, logOut } = authSlice.actions

export default authSlice.reducer

export const selectCurrentUser = (state) => state.user
export const selectCurrentToken = (state) => state.token
