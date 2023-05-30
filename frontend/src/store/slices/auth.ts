// packages
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// types
import { User } from '@/types';


type AuthState = {
  user: User | null;
  accessToken: string | null;
  refreshToken: string | null;
}

const initialState: AuthState = {
  user: null,
  accessToken: null,
  refreshToken: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (_state, action: PayloadAction<AuthState>) => {
      return action.payload;
    },
    logOut: () => {
      return initialState;
    },
  },
});

export const { setAuth, logOut } = authSlice.actions;
export default authSlice.reducer;