import Category from "./FormComponents/Category";

const AdvertForm = () => {
  const mainCategories = [
    {
      id: "default",
      name: "default",
      subCategories: ["default"],
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

  return (
    <div className="form-wrapper">
      <form action="" className="form-add">
        <Category categories={mainCategories} />
        {/* <Category categories={subCategories} /> */}

        {/* <label for="" class="form-add__title-label">
          Tytuł Twojego ogłoszenia
        </label>
        <input name="title" type="text" class="form-add__title" required />

        <label for="" class="form-add__image-local-label">
          Dodaj url zdjęcia
        </label>
        <input name="image" type="url" class="form-add__image" />

        <label for="" class="form-add__advert-label">
          Ogłoszenie{" "}
        </label>
        <textarea
          name="advert"
          class="form-add_advert"
          id=""
          cols="30"
          rows="10"
        ></textarea>

        <label for="" class="form-add__price-label">
          Podaj cenę{" "}
        </label>
        <input name="price" type="text" class="form-add__price" />

        <label for="" class="form-add__phone-label">
          Wpisz numer telefonu do kontaktu
        </label>
        <input name="phone" type="tel" class="form-add__phone" />
        <input
          name="submit-btn"
          type="submit"
          class="form-add__button"
          value="Dodaj ogłoszenie"
        /> */}
      </form>
    </div>
  );
};

export default AdvertForm;
