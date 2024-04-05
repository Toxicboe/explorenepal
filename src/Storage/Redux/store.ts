import {configureStore} from '@reduxjs/toolkit'
import { destinationItemReducer } from './destinationItemSlice'
import { authApi, destinationItemApi } from '../../Apis'
import {userAuthReducer} from './userAuthSlice'
import { contactItemReducer } from './contactItemSlice';
import contactApi from '../../Apis/contactApi';
const store=configureStore({
    reducer:{
        destinationItemStore:destinationItemReducer,
        userAuthStore:userAuthReducer,
        contactAuthStor:contactItemReducer,
        [destinationItemApi.reducerPath]:destinationItemApi.reducer,
        [authApi.reducerPath]:authApi.reducer,
        [contactApi.reducerPath]:contactApi.reducer,
    },
    middleware:(getDefaultMiddleware)=>
        getDefaultMiddleware()
        .concat(destinationItemApi.middleware)
        .concat(authApi.middleware)
        .concat(contactApi.middleware)
});

export type RootState=ReturnType<typeof store.getState>;

export default store;