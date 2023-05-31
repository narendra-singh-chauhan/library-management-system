//
import { RootState } from '../rootReducer';
// types
import { User, AccessToken, RefreshToken } from '@/types';


// selectors
export const getUser = (state: RootState): User | null => state.auth.user;

export const getAccessToken = (state: RootState): AccessToken => state.auth.accessToken;

export const getRefreshToken = (state: RootState): RefreshToken => state.auth.refreshToken;