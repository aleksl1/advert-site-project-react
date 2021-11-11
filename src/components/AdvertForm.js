import Category from "./FormComponents/Category";
import InputComponent from "./FormComponents/InputComponent";
import SelectComponent from "./FormComponents/SelectComponent";

import { useState } from "react";

const AdvertForm = () => {
  const [category, setCategory] = useState();
  const [subCategory, setSubCategory] = useState();

  const mainCategories = [
    {
      id: "default",
      name: "",
      subCategories: [""],
    },
    {
      id: "Cars",
      name: "Samochody",
      subCategories: ["osobowe", "ciężarowe", "akcesoria"],
    },
    {
      id: "RealEstate",
      name: "Nieruchomości",
      subCategories: ["mieszkania", "domy", "działki"],
    },
    {
      id: "Electronics",
      name: "Elektronika",
      subCategories: ["komputery", "telefony", "akcesoria"],
    },
  ];

  const handleSubmitAdvertForm = (e) => {
    e.preventDefault();
  };

  // function getFormData(category, subcategory) {
  //   console.log(`getting data`);
  //   setCategory({
  //     category,
  //   });
  //   setSubCategory({
  //     subCategory,
  //   });
  // }

  const handleInputChange = (e) => {
    console.log(e.target.value);
  };
  const handleSelectChange = (e) => {
    console.log(e.target.value);
  };

  // const getSelectedCategory = (e) => {
  //   return e.target.value;
  // };

  return (
    <div className="form-wrapper">
      <form
        onSubmit={handleSubmitAdvertForm}
        action="submit"
        className="form-add"
      >
        {/* <Category categories={mainCategories} /> */}
        <SelectComponent
          mainCategories={mainCategories}
          handleSelectChange={handleSelectChange}
          // getSelectedCategory={getSelectedCategory}
        />
        <InputComponent handleInputChange={handleInputChange} />

        <input
          name="submit-btn"
          type="submit"
          className="form-add__button"
          value="Dodaj ogłoszenie"
        />
      </form>
    </div>
  );
};

export default AdvertForm;
