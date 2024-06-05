"use client";
import cookie from "@/utils/cookie";
import axios from "axios";
// import { cookies } from 'next/headers'

const axiosCommonHeaderConfig = {
  "Content-Type": "application/json",
};

const wrapWithInterceptor = (request) => {
  request.interceptors.request.use((config) => {
    const accessToken = cookie.get("token");

    config.headers["Authorization"] = `Bearer ${accessToken}`;
    return config;
  });

  // Add a response interceptor
  request.interceptors.response.use(
    function (response) {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      return response;
    },
    async function (error) {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error

      return Promise.reject(error);
    }
  );

  return request;
};

const request = wrapWithInterceptor(
  axios.create({
    baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
    headers: axiosCommonHeaderConfig,
  })
);

export { request };
