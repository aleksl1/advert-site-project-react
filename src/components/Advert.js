import { Link } from "react-router-dom";

const Advert = ({ advert }) => {
  console.log("tekst reklamy??", advert.advert);

  const created =
    advert.creationDate.getFullYear() +
    "-" +
    (advert.creationDate.getMonth() + 1) +
    "-" +
    advert.creationDate.getDate();

  const toBeDeletedOn =
    advert.creationDate.getFullYear() +
    "-" +
    (advert.creationDate.getMonth() + 1) +
    "-" +
    advert.creationDate.getDate();

  return (
    <>
      <div className="advert">
        <h1 className="advert__title">
          {advert.title} {advert.id}
        </h1>
        <p className="advert__text">{advert.advert}</p>
        <p className="advert__information">
          <span>Zdjęcie {advert.image}</span>
          <span>Cena {advert.price}</span>
          <span>Numer kontaktowy {advert.phone}</span>
          <span>Data utworzenia {created}</span>
          <span>Zakończenie ogłoszenia {toBeDeletedOn}</span>
          <span>Ogłoszenie użytkownika {advert.creatorName}</span>
        </p>
        <div className="advert__tags">
          <Link to="/home">{advert.category}</Link>
          <Link to="/home">{advert.subCategory}</Link>
        </div>
      </div>
    </>
  );
};

export default Advert;
