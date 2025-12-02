import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TypesData } from "../../Types/Types";

export const api = createApi({
    reducerPath: "commentsApi",
    baseQuery: fetchBaseQuery({baseUrl: "https://jsonplaceholder.typicode.com/"}),
    endpoints: (build)=>({
        getComments: build.query<TypesData[], {page?:number, limit?:number} | void>({
            query: ({page=1, limit= 10}={})=>`comments?_page=${page}&_limit=${limit}`,

        })
    })
})

export const { useGetCommentsQuery  } = api;