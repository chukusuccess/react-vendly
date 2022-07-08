// import {Produ}
import { useState, useEffect } from "react";

import Product from "../productPage/product";

export const ProductPage = () => {
  const [gridWidth, setGridWidth] = useState("10rem");

  const displaySearchInput = () => {
    if (window.scrollY >= 20) {
      console.log("displaye");
      //   setDisplaySearchInput(true);
    } else {
      console.log("remove");
      //   setDisplaySearchInput(false);
    }
    // console.log(window.scrollY)
  };

  // window.addEventListener('scroll', displaySearchInput)

  useEffect(() => {
    if (window.screen.width >= 500) {
      setGridWidth("14rem");
      console.log("grid width");
    }
  }, []);

  return (
    <div className="relative" id="prod">
      {/* start products tab view */}
      <div className="sm:pl-3 sm:mt-6 mt-[3rem] px-3">
        <h1>
          <b>PRODUCTS</b>
        </h1>

        <div
          style={{
            gridTemplateColumns: `repeat(auto-fit, minmax(${gridWidth}, 1fr))`,
          }}
          className="grid sm:gap-y-4 sm:gap-x-1 gap-y-2 gap-x-2"
        >
          {[1, 2, 3, 4, 5, 6, 7, 8].map((product) => (
            <Product key={product} />
          ))}
        </div>
      </div>
      {/* end products tab view */}

      {/* start create product button */}
      <div className="fixed bottom-2 z-20 sm:hidden block w-full px-3">
        <button className="w-full h-12 px-6 bg-primary font-Poppins tracking-wide text-white font-[500]">
          CREATE PRODUCT
        </button>
      </div>
      {/* end create product button */}
    </div>
  );
};
