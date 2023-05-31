// packages
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// types
import { Auth } from '@/types';


const initialState: Auth = {
  user: null,
  accessToken: null,
  refreshToken: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (_state, action: PayloadAction<Auth>) => {
      return action.payload;
    },
    logOut: () => {
      return initialState;
    },
  },
});

export const { setAuth, logOut } = authSlice.actions;
export default authSlice.reducer;