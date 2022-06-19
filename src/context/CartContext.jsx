import React, { createContext } from "react";
export const MiContexto = createContext({});

export default function CartContext({ children }) {
  return (
    <MiContexto.Provider>
      {children}
      <div>CartContext</div>
    </MiContexto.Provider>
  );
}
