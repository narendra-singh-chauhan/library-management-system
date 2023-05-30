// packages
import { createApi, fetchBaseQuery, BaseQueryFn } from '@reduxjs/toolkit/query/react';
// slices
import { setAuth, logOut } from '../slices/auth';


const baseQuery: BaseQueryFn<any, any, any> = fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_BASE_URI,
    credentials: 'include',
    prepareHeaders: (headers, { getState }) => {
        const token = getState().auth.user?.accessToken;

        if (token) {
            headers.set('Authentication', `Bearer ${token}`);
        }

        return headers;
    }
});

const baseQueryWithReauth: BaseQueryFn<any, any, any> = async (args, api, extraOptions) => {
    let result = baseQuery(args, api, extraOptions);

    if (result?.error?.originalStatus === 403) {
        // send refresh token to get new access token 
        const newRefreshToken = await baseQuery('refresh-token', api, extraOptions);

        if (newRefreshToken?.data) {
            const user = api.getState().auth.user;

            // store the new access token 
            api.dispatch(setAuth({ ...newRefreshToken.data, user }));
            
            // retry the original query with new access token
            result = await baseQuery(args, api, extraOptions);
        } else {
            api.dispatch(logOut());
        }
    }

    return result;
};

const baseApi = createApi({
    baseQuery: baseQueryWithReauth,
    endpoints: (builder) => ({})
});

export default baseApi;