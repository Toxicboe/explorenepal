import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const destinationItemApi=createApi({
    reducerPath:"destinationItemApi",
    baseQuery:fetchBaseQuery({
        baseUrl:"https://localhost:7090/api/"
    }),
    endpoints:(builder)=>({
        getDestinationItems:builder.query({
            query:()=>({
                url:"Destination"
            }),
        }),
        getDestinationItemsByCode:builder.query({
            query:(code)=>({
                url:`Destination/${code}`
            }),
        }),

    }),
});

export const {useGetDestinationItemsQuery,useGetDestinationItemsByCodeQuery}=destinationItemApi;
export default destinationItemApi;