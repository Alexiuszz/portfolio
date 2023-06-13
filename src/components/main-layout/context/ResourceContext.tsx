import React, { createContext, ReactNode, useState } from "react";

interface ResourceType {
  loaded: boolean;
  setLoaded: (loaded: boolean) => void;
}
export const ResourceContext = createContext<ResourceType>({
  loaded: false,
  setLoaded: () => {},
});

const LoadedResourceManager = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [loaded, setLoaded] = useState<boolean>(false);
  return (
    <ResourceContext.Provider value={{ loaded, setLoaded }}>
      {children}
    </ResourceContext.Provider>
  );
};
export default LoadedResourceManager;
