import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Note: Change v1 to v2 on rapid api

const cryptoApiHeaders = {
  "x-rapidapi-host": "coinranking1.p.rapidapi.com",
  "x-access-token": "c699cd5f8emsh09d5f93d88367c4p158ab4jsnb7f37dddf1a7",
};
const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

const baseUrl = "https://api.coinranking.com/v2";

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`),
    }),

    getCryptoDetails: builder.query({
      query: (coinId) => createRequest(`/coin/${coinId}`),
    }),

    // Note: Change the coin price history endpoint from this - `coin/${coinId}/history/${timeperiod} to this - `coin/${coinId}/history?timeperiod=${timeperiod}`
    getCryptoHistory: builder.query({
      query: ({ coinId, timeperiod }) =>
        createRequest(`coin/${coinId}/history?timeperiod=${timeperiod}`),
    }),

    // Note: To access this endpoint you need premium plan
    getExchanges: builder.query({
      query: () => createRequest("/exchanges"),
    }),
  }),
});

export const {
  useGetCryptosQuery,
  useGetCryptoDetailsQuery,
  useGetExchangesQuery,
  useGetCryptoHistoryQuery,
} = cryptoApi;

// import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";
// const cryptoApiHeaders = {
//   "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
//   "X-RapidAPI-Key": "c699cd5f8emsh09d5f93d88367c4p158ab4jsnb7f37dddf1a7",
// };

// const baseurl = "https://coinranking1.p.rapidapi.com";

// const createPathrequest = (url) => ({ url, headers: cryptoApiHeaders });

// export const cryptoApi = createApi({
//   reducerPath: "cryptoApi",
//   baseQuery: fetchBaseQuery({ baseurl }),
//   endpoints: (builder) => ({
//     getCryptos: builder.query({
//       query: () => createPathrequest("/coins"),
//     }),
//   }),
// });

// export const { useGetCryptosQuery } = cryptoApi;

// const options = {
//     method: 'GET',
//     url: 'https://coinranking1.p.rapidapi.com/coins',
//     params: {
//       referenceCurrencyUuid: 'yhjMzLPhuIDl',
//       timePeriod: '24h',
//       'tiers[0]': '1',
//       orderBy: 'marketCap',
//       orderDirection: 'desc',
//       limit: '50',
//       offset: '0'
//     },
//     headers: {
//       'X-RapidAPI-Key': 'c699cd5f8emsh09d5f93d88367c4p158ab4jsnb7f37dddf1a7',
//       'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
//     }
//   };
