const InputComponent = ({ handleInputChange }) => {
  const formInputs = [
    {
      id: 0,
      description: "Tytuł Twojego ogłoszenia",
      descriptionClass: "form-add__title-label",
      name: "title",
      type: "text",
      inputClass: "form-add__title",
      isRequired: true,
    },
    {
      id: 1,
      description: "Dodaj url zdjęcia",
      descriptionClass: "form-add__image-local-label",
      name: "image",
      type: "url",
      inputClass: "form-add__image",
      isRequired: false,
    },
    {
      id: 2,
      description: "Ogłoszenie",
      descriptionClass: "form-add__advert-label",
      name: "advert",
      type: "textarea",
      inputClass: "form-add_advert",
      isRequired: true,
      cols: "30",
      rows: "10",
    },
    {
      id: 3,
      description: "Podaj cenę",
      descriptionClass: "form-add__price-label",
      name: "price",
      type: "text",
      inputClass: "form-add__price",
      isRequired: false,
    },
    {
      id: 4,
      description: "Wpisz numer telefonu do kontaktu",
      descriptionClass: "form-add__phone-label",
      name: "phone",
      type: "tel",
      inputClass: "form-add__phone",
      isRequired: false,
    },
  ];

  const displayFormInputs = formInputs.map((input, index) => {
    if (input.type === "textarea") {
      return (
        <label key={input.id} className={input.descriptionClass}>
          {input.description}
          <textarea
            onChange={handleInputChange}
            name={input.name}
            className={input.inputClass}
            required={input.isRequired}
            cols={input.cols}
            rows={input.rows}
          />
        </label>
      );
    } else {
      return (
        <label key={input.id} className={input.descriptionClass}>
          {input.description}
          <input
            onChange={handleInputChange}
            name={input.name}
            type={input.type}
            className={input.inputClass}
            required={input.isRequired}
          />
        </label>
      );
    }
  });

  return <>{displayFormInputs}</>;
};

export default InputComponent;
