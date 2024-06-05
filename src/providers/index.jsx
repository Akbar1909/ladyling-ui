import FlowbiteProvider from "./flowbite";
import QueryClientProvider from "./query-client";

const AllProviders = ({ children }) => (
  <QueryClientProvider>
    <FlowbiteProvider>{children}</FlowbiteProvider>
  </QueryClientProvider>
);

export default AllProviders;
