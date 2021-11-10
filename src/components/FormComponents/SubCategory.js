import { useState } from "react";

const SubCategory = ({ selected, data, getSubCategory }) => {
  const [subCategoryName, setSubCategoryName] = useState("");

  const handleChange = (e) => {
    setSubCategoryName({
      subCategoryName: e.target.value,
    });
  };

  const selectOptions = data.filter(
    (item) => item.id === selected.selectedValue
  )[0].subCategories;

  const subOptions = (
    <label className="form-add__sub-category-label">
      Wybierz odpowiednią podkategorię
      <select
        onChange={handleChange}
        name="sub-category"
        className="form-add__sub-category"
      >
        {selectOptions.map((option, index) => {
          return (
            <option
              key={index + 1}
              value={`${selected.selectedValue}${index + 1}`}
            >
              {option}
            </option>
          );
        })}
      </select>
    </label>
  );

  return <>{subOptions}</>;
};

export default SubCategory;
