import SubCategory from "./SubCategory";

import { useState } from "react";

const Category = ({ categories }) => {
  const [selectedValue, setSelectedValue] = useState("");
  const [subCategory, setSubCategory] = useState(" ");

  function getSubCategory(subcategory) {
    console.log(`getting data from subcat`);

    setSubCategory({
      subCategory,
    });
  }

  const handleChange = (e) => {
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
        placeholder="---------"
      >
        {categories.map((category) => {
          if (category.id === "default") {
            return (
              <option key={category.id} value={category.id} hidden>
                {category.name}
              </option>
            );
          } else {
            return (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            );
          }
        })}
      </select>
    </label>
  );

  return (
    <>
      {mainOptions}
      {selectedValue ? (
        <SubCategory
          selected={selectedValue}
          data={categories}
          getSubCategory={getSubCategory}
        />
      ) : null}
    </>
  );
};

export default Category;
