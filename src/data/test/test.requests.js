import { request } from "@/services/requests/baseRequests";

export const getTestByIdWidthQuestions = (testId) =>
  request.get(`/test/questions/${testId}`);
