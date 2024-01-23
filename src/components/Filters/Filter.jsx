import React from "react";
import { Link } from "react-router-dom";

const Filter = ({ categories }) => {
  return (
    <div className="flex flex-col  mb-4">
      <div className="categoriesConainer md:mt-2">
        <h2 className="text-xl mb-4">Categories</h2>
        <div className="flex space-x-4 md:space-x-0 md:mt-2 md:flex-col justify-start">
          <Link to="/shop">All</Link>
          {categories.map((category) => (
            <Link
              key={category.attributes.id}
              to={`/shop/${category.attributes.Name.toLowerCase()}`}
            >
              {category.attributes.Name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filter;
