// packages
import { combineReducers } from '@reduxjs/toolkit';
// slices
import auth from './slices/auth';
// api
import api from './api';


const rootReducer = combineReducers({
    auth,
    [api.reducerPath]: api.reducer,
    // other reducers goes here...
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;