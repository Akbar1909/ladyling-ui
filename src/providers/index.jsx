import FlowbiteProvider from "./flowbite";
import QueryClientProvider from "./query-client";
import { TelegramProvider } from "./telegram";

const AllProviders = ({ children }) => (
  <TelegramProvider>
    <QueryClientProvider>
      <FlowbiteProvider>{children}</FlowbiteProvider>
    </QueryClientProvider>
  </TelegramProvider>
);

export default AllProviders;
