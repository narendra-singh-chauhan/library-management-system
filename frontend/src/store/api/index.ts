// packages
import { createApi, fetchBaseQuery, BaseQueryFn } from '@reduxjs/toolkit/query/react';
import { QueryReturnValue } from '@reduxjs/toolkit/dist/query/baseQueryTypes';
// types 
import { AccessToken, RefreshToken } from '@/types';
//
import { setAuth, logOut } from '../slices/auth';
import { RootState } from '../rootReducer';


type RefreshTokenResponse = {
    data: {
        accessToken: AccessToken,
        refreshToken: RefreshToken,
    },
}

const baseQuery: BaseQueryFn = fetchBaseQuery({
    baseUrl: import.meta.env.VITE_APP_API_BASE_URI as string,
    // credentials: 'include',
    prepareHeaders: (headers, { getState }) => {
        const token = (getState() as RootState).auth?.accessToken;

        if (token) {
            headers.set('Authorization', `Bearer ${token}`);
        }

        return headers;
    }
});

const baseQueryWithReauth: BaseQueryFn = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions);

    console.log('result : baseQueryWithReauth: ', result);

    if (result.error || result.error === 'ExpiredAccessToken' || result.error === 'InvalidAccessToken') {
        // send refresh token to get new access token
        const response = await baseQuery('refresh-token', api, extraOptions) as RefreshTokenResponse;

        console.log('response : baseQueryWithReauth: ', result);

        if (response?.data) {
            const user = (api.getState() as RootState).auth.user;

            // store the new token
            api.dispatch(setAuth({ ...response.data, user }));

            // retry the original query with new access token
            result = await baseQuery(args, api, extraOptions);
            console.log('refetched result : baseQueryWithReauth: ', result);
        } else {
            api.dispatch(logOut());
        }
    }

    return result;
};

const baseApi = createApi({
    baseQuery: baseQueryWithReauth,
    endpoints: (build) => ({})
});

export default baseApi;
