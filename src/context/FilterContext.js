import React, { createContext, useState } from "react";

export const myFilterContext = createContext();

const FilterContext = ({children}) => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
      <myFilterContext.Provider value={[searchTerm, setSearchTerm]}>
        {children}
      </myFilterContext.Provider>
    </div>
  );
};

export default FilterContext;
