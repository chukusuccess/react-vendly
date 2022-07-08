import { useState } from "react";
import { createContext } from "react";

export const ProductModalContext = createContext();

const ProductModalContextProvider = (props) => {
  const [modal, setModal] = useState(false);

  return (
    <ProductModalContext.Provider value={{ modal, setModal }}>
      {props.children}
    </ProductModalContext.Provider>
  );
};

export default ProductModalContextProvider;
