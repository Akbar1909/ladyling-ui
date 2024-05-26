import { request } from "@/services/requests/baseRequests";

export const createAttempt = (testId) =>
  request.post(`/attempt/start/${testId}`);

export const startTest = (testId) => request.post(`/attempt/start/${testId}`);

export const finishTest = (body) => request.post("/attempt/finish", body);

export const getAttemptByIdWithDetails = (id) =>
  request.get(`/attempt/details/id`);
