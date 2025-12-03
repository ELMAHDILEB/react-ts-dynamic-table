import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TypesData,  paginateTypes } from "../../Types/Types";

export const api = createApi({
    reducerPath: "commentsApi",
    baseQuery: fetchBaseQuery({baseUrl: "https://jsonplaceholder.typicode.com/"}),
    endpoints: (build)=>({
        getComments: build.query<{data: TypesData[], totalCount: number, totalPages: number}, paginateTypes>({
            query: ({ page = 1, limit = 10, search }) => {
              let query = `comments?_page=${page}&_limit=${limit}`;
              if (search) query += `&q=${encodeURIComponent(search)}`;
              return query;
            },
            transformResponse: (response: TypesData[], meta, arg)=>{
                 const totalCount = Number(meta?.response?.headers.get("X-Total-Count") || 0);
                 const limit = Number(arg.limit || 10);
                 const totalPages = Math.ceil(totalCount / limit);
                 return {
                  data: response,
                  totalCount,
                  totalPages
                 }
            }
          }),
          
          

        })
    })


export const { useGetCommentsQuery  } = api;