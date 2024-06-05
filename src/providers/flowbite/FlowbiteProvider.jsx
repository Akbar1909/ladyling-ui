import { Flowbite } from "flowbite-react";

const customTheme = {
  button: {
    color: {
      primary: "bg-yellow-300 hover:bg-yellow-600",
    },
  },
};

const FlowbiteProvider = ({ children }) => {
  return <Flowbite theme={{ theme: customTheme }}>{children}</Flowbite>;
};

export default FlowbiteProvider;
