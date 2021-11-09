import SubCategory from "./SubCategory";

import { useState } from "react";

const Category = ({ categories }) => {
  const [selectedValue, setSelectedValue] = useState(categories[0]);
  // const [subCategory, setSubcategory] = useState(" ");

  const handleChange = (e) => {
    console.log(`change`);
    setSelectedValue({
      selectedValue: e.target.value,
    });

    // const tempCategory = categories.find((item) => item.id === e.target.value);

    // setSubcategory({
    //   subCategory: tempCategory,
    // });
  };

  const mainOptions = (
    <label className="form-add__main-category-label">
      Wybierz odpowiednią kategorię
      <select
        onChange={handleChange}
        name="category"
        className="form-add__category"
      >
        {categories.map((category) => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>
    </label>
  );

  return (
    <>
      {mainOptions}
      <SubCategory selected={selectedValue} data={categories} />
    </>
  );
};

export default Category;
