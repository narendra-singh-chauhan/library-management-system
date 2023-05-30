// packages
import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// store
import rootReducer from './rootReducer';
// api
// import api from './api';


// presist config
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth'],
};

// presisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// store
const store = configureStore({
    reducer: persistedReducer,
    // middleware: getDefaultMiddleware =>
    //     getDefaultMiddleware().concat(api.middleware),
    devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);

export default store;