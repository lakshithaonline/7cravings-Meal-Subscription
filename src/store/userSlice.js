// store/userSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { auth } from '../services/firebaseConfig';

const initialState = {
    isAuthenticated: false,
    user: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action) => {
            state.isAuthenticated = true;
            state.user = action.payload;
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.user = null;
        },
    },
});

export const { login, logout } = userSlice.actions;

export const authenticateUser = () => async (dispatch) => {
    auth.onAuthStateChanged((user) => {
        if (user) {
            dispatch(login({ uid: user.uid, email: user.email }));
        } else {
            dispatch(logout());
        }
    });
};

export default userSlice.reducer;
