import { useState } from "react";

const SelectComponent = ({ mainCategories, handleSelectChange }) => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const getSelectedCategory = (e) => {
    setSelectedCategory({
      selectedCategory: e.target.value,
    });
  };

  const handleSelectChangeAndGetSelectedCategory = (e) => {
    getSelectedCategory(e);
    handleSelectChange(e);
  };

  const displayOptions = mainCategories.map((option) => {
    if (option.id === "default") {
      return (
        <option key={option.id} value={option.id} hidden>
          {option.name}
        </option>
      );
    } else {
      return (
        <option key={option.id} value={option.id}>
          {option.name}
        </option>
      );
    }
  });

  const displayMainCategory = (
    <label className="form-add__main-category-label">
      Wybierz odpowiednią kategorię
      <select
        onChange={handleSelectChangeAndGetSelectedCategory}
        name="category"
        className="form-add__category"
      >
        {displayOptions}
      </select>
    </label>
  );
  const subOptions = () => {
    const temp = [];
    mainCategories.forEach((item) => temp.push(item.id));
    return temp;
  };
  const subOptionsTable = subOptions();

  const getSubCategories = () => {
    if (typeof selectedCategory.selectedCategory === "undefined") {
      return;
    } else {
      const selectedCategoryIndex = subOptionsTable.indexOf(
        selectedCategory.selectedCategory
      );

      const currentSubCategory =
        mainCategories[selectedCategoryIndex].subCategories;
      return currentSubCategory;
    }
  };

  let displaySubOptions;

  const current = getSubCategories();
  if (typeof current === "undefined") {
    displaySubOptions = "";
  } else {
    displaySubOptions = current.map((item, index) => {
      return (
        <option key={`${item[0]}${index}`} value={`${item[0]}${index}`}>
          {item}
        </option>
      );
    });
  }

  const displaySubCategory = (
    <label className="form-add__sub-category-label">
      Wybierz odpowiednią podkategorię
      <select
        onChange={handleSelectChange}
        name="subCategory"
        className="form-add__sub-category"
      >
        {displaySubOptions}
      </select>
    </label>
  );

  return (
    <>
      {displayMainCategory}

      {selectedCategory ? displaySubCategory : null}
    </>
  );
};

export default SelectComponent;
