import { useState } from "react";

const SubCategory = ({ selected, data }) => {
  const [subCategoryName, setSubCategoryName] = useState("");

  const handleChange = (e) => {
    setSubCategoryName({
      subCategoryName: e.target.value,
    });
  };

  const def = data.find((item) => item.id === selected.id);
  console.log(def);

  const subOptions = (
    <label className="form-add__sub-category-label">
      Wybierz odpowiednią podkategorię
      <select
        onChange={handleChange}
        name="sub-category"
        className="form-add__sub-category"
      >
        {/* <option key={category.id} value={category.id}>
            {category.name}
          </option> */}
      </select>
    </label>
  );

  return (
    <>
      {console.log(subCategoryName)}
      {subOptions}
    </>
  );
};

export default SubCategory;
