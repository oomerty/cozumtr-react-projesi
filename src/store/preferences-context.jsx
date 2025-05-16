import { createContext, useState } from "react";

export const PreferencesContext = createContext({
  reducedMotion: false,
  switchReducedMotion: () => {},
});

export function PreferencesContextProvider({ children }) {
  const [reducedMotion, setReducedMotion] = useState(false);

  function switchReducedMotion() {
    setReducedMotion((reducedMotion) => !reducedMotion);
  }

  const contextValue = {
    reducedMotion,
    switchReducedMotion,
  };

  return (
    <PreferencesContext.Provider value={contextValue}>
      {children}
    </PreferencesContext.Provider>
  );
}
export default PreferencesContextProvider;
