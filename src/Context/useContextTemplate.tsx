import { createContext, useContext, useState } from "react";

interface PlaceholderContextValue {
  state: string;
}
// create context
const PlaceholderContext = createContext<PlaceholderContextValue>({
  state: "string",
});

//create provider for sharing it's data
export const PlaceholderProvider = (props: any) => {
  const [state] = useState("string");
  const value: PlaceholderContextValue = { state };

  return <PlaceholderContext.Provider value={value} {...props} />;
};

//create useContext for connsumer
export const usePlaceholder = (): PlaceholderContextValue => {
  const context = useContext(PlaceholderContext);
  if (context === undefined) {
    throw new Error(
      `usePlaceholder must be used within a PlaceholderContextProvider.`
    );
  }
  return context;
};
