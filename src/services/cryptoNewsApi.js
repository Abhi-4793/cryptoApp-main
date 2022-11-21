import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoNewsHeaders = {
  "X-BingApis-SDK": "true",
  "X-RapidAPI-Key": "c699cd5f8emsh09d5f93d88367c4p158ab4jsnb7f37dddf1a7",
  "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
};

const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });
const baseUrl = "https://bing-news-search1.p.rapidapi.com";
export const cryptoNewsApi = createApi({
  reducerPath: "cryptoNewsApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: ({ newsCategory, count }) =>
        createRequest(
          `/news/search?q=${newsCategory}&safeSearch=off&textFormat=Raw&freshness=Day&count=${count}`
        ),
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
