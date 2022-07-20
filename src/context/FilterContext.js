import React, { createContext, useState } from "react";

export const myFilterContext = createContext();

const FilterContext = (props) => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
      <myFilterContext.Provider value={[searchTerm, setSearchTerm]}>
        {props.children}
      </myFilterContext.Provider>
    </div>
  );
};

export default FilterContext;
