import { Cookies } from "react-cookie";
const cookie = new Cookies();

export const clearCookie = () => {
  cookie.remove("temp", { path: "/" });
};

export default cookie;
