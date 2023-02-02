import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: { user: null, token: null },
    reducers: {
        setCredentials: (state, action) => {
            console.log("payload", action.payload);

            const { foundUser, accessToken } = action.payload;
            console.log("userstate cread", foundUser._id, accessToken);
            state.role = foundUser.position
            state.id = foundUser._id
            state.user = foundUser.userName
            state.token = accessToken
            console.log("userstate", foundUser, accessToken);
        },
        logOut: (state, action) => {
            state.role = null
            state.id = null
            state.user = null
            state.token = null
        }
    }
})

export const { setCredentials, logOut } = authSlice.actions

export default authSlice.reducer

export const selectCurrentId = (state) => state.id
export const selectCurrentUser = (state) => state.user
export const selectCurrentToken = (state) => state.token
export const selectCurrentRole = (state) => state.role
