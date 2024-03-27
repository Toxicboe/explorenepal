import {configureStore} from '@reduxjs/toolkit'
import { destinationItemReducer } from './destinationItemSlice'
import { authApi, destinationItemApi } from '../../Apis'
import {userAuthReducer} from './userAuthSlice'
const store=configureStore({
    reducer:{
        destinationItemStore:destinationItemReducer,
        userAuthStore:userAuthReducer,
        [destinationItemApi.reducerPath]:destinationItemApi.reducer,
        [authApi.reducerPath]:authApi.reducer,
    },
    middleware:(getDefaultMiddleware)=>
        getDefaultMiddleware()
        .concat(destinationItemApi.middleware)
        .concat(authApi.middleware)
});

export type RootState=ReturnType<typeof store.getState>;

export default store;