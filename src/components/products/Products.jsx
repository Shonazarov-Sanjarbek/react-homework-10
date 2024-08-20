import React from "react";

const Products = ({ data, title }) => {
  let items = data?.map((product, inx) => (
    <div className="border p-3" key={inx}>
      <div className="w-full h-60 bg-gray-200">
        <img className="w-full h-full object-cover" src="" alt="Photo" />
      </div>
      <p>Lorem, ipsum dolor.</p>
      <strong>500 USD</strong>
    </div>
  ));
  return (
    <div className="container mx-auto">
      <h3 className="text-2xl font-bold mb-3">{title}</h3>
      <div className="grid grid-cols-4 gap-2">{items}</div>
    </div>
  );
};

export default Products;
