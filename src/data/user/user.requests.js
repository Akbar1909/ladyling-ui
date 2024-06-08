import { request } from "@/services/requests/baseRequests";

export const getMe = () => request.get("/users/me");
