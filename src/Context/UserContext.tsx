import React, { useState, createContext } from "react";

const UserContext = createContext([{}, () => { return  {}}]);

let initialState = {name:'sarthak'};

const UserProvider = (props: any) => {
  const [state, setState] = useState(initialState);

  return (
    <UserContext.Provider value={[state, setState]}>
      {props.children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };