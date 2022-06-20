import { createContext, useState } from "react";

const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [result, setResult] = useState("");

  const values = { result, setResult };
  return (
    <FilterContext.Provider value={values}>{children}</FilterContext.Provider>
  );
};
export default FilterContext;
