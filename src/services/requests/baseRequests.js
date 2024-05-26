"use client";
import axios from "axios";
import { Cookies } from "react-cookie";
// import { cookies } from 'next/headers'

const axiosCommonHeaderConfig = {
  "Content-Type": "application/json",
};

const cookie = new Cookies();

const wrapWithInterceptor = (request) => {
  request.interceptors.request.use((config) => {
    return {
      ...config,
      signal: controller.signal,
    };
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

const request = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
  headers: axiosCommonHeaderConfig,
});

export { request };
