import React from "react";

import InputComponent from "./FormComponents/InputComponent";
import SelectComponent from "./FormComponents/SelectComponent";

class AdvertForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      category: "",
      subCategory: "",
      title: "",
      image: "",
      advert: "",
      price: "",
      phone: "",
      creationDate: "",
      deletionDate: "",
      creatorName: "",
    };
  }

  handleSubmitAdvertForm = (e) => {
    e.preventDefault();
    const advert = this.state;
    this.props.adverts.push(advert);
    const elements = [...e.target];
    elements.forEach((element) => (element.value = ""));
  };

  handleInputChange = (e) => {
    switch (e.target.name) {
      case "title":
        this.setState({ title: e.target.value });
        break;
      case "image":
        this.setState({ image: e.target.value });
        break;
      case "advert":
        this.setState({ advert: e.target.value });
        break;
      case "price":
        this.setState({ price: e.target.value });
        break;
      case "phone":
        this.setState({ phone: e.target.value });
        break;
      default:
        throw Error("error");
    }
  };
  handleSelectChange = (e) => {
    this.setState({
      id: this.props.adverts.length,
      creationDate: new Date(),
      deletionDate: new Date(),
      creatorName: "admin",
    });
    if (e.target.name === "category") {
      this.setState({ category: e.target.value });
    } else if (e.target.name === "subCategory") {
      this.setState({ subCategory: e.target.value });
    } else {
      throw Error("error");
    }
  };

  render() {
    return (
      <div className="form-wrapper">
        <form
          onSubmit={this.handleSubmitAdvertForm}
          action="submit"
          className="form-add"
        >
          <SelectComponent
            mainCategories={this.props.categories}
            handleSelectChange={this.handleSelectChange}
          />
          <InputComponent handleInputChange={this.handleInputChange} />

          <input
            name="submit-btn"
            onSubmit={this.handleSubmitAdvertForm}
            type="submit"
            className="form-add__button"
            value="Dodaj ogłoszenie"
          />
        </form>
      </div>
    );
  }
}

export default AdvertForm;
