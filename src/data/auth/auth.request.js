import { request } from "@/services/requests/baseRequests";

export const enter = (body) => request.post("/auth/enter", body);
