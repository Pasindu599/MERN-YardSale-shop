import React, { useState } from "react";

function CTASection({ props }) {
  const { cartCounter, setCartCounter } = props;
  const [productCounter, setProductCounter] = useState(0);

  const addProduct = () => productCounter + 1;
  const removeProduct = () => {
    return productCounter > 0 ? productCounter - 1 : 0;
  };

  const addToCard = () => {
    const totalCounter = cartCounter + productCounter;
    setCartCounter(totalCounter);
    setProductCounter(0);
  };
  return (
    <div className="flex flex-col justify-center items-center gap-4 md:flex-row">
      {/* Amount required */}
      <div
        className="flex w-full bg-orange-100 justify-between items-center px-6 py-2 rounded-xl mt-2
  md:w-1/3 md:px-3 md:mt-0"
      >
        {/* Minus button */}
        <div>
          <button
            onClick={() => setProductCounter(removeProduct)}
            className="font-bold text-orange-500 text-2xl pb-1"
          >
            -
          </button>
        </div>

        {/* Quantity */}
        <div className="font-bold">{productCounter}</div>

        {/* Plus button */}
        <div>
          <button
            onClick={() => setProductCounter(addProduct)}
            className="font-bold text-orange-400 text-2xl w-[1rem] pb-1"
          >
            +
          </button>
        </div>
      </div>

      {/* Add to cart Button */}
      <button
        onClick={addToCard}
        className="w-full bg-orange-500 text-white py-4 rounded-xl font-bold 
    shadow-[0_10px_30px_-12px] shadow-orange-500 md:w-2/3"
      >
        <div className="flex gap-4 justify-center">
          <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
              fill="currentColor"
              fillRule="nonzero"
            />
          </svg>
          Add to cart
        </div>
      </button>
    </div>
  );
}

export default CTASection;
