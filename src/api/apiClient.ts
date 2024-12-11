import axios, { AxiosInstance } from "axios";

const API_BASE_URL = "http://localhost:8080";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: `${API_BASE_URL}/codechallenge`,
  headers: {
    "Content-Type": "application/json",
  },
});

export const createTrack = (isrc: string) =>
  axiosInstance.post(`/createTrack?isrc=${isrc}`);

export const getTrackMetadata = (isrc: string) =>
  axiosInstance.get(`/getTrackMetadata?isrc=${isrc}`);

export const getCover = (isrc: string) =>
  axiosInstance.get(`/getCover?isrc=${isrc}`, { responseType: "blob" });
