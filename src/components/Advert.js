import { Link } from "react-router-dom";

const Advert = (props) => {
  return (
    <>
      <div className="advert">
        <h1 className="advert__title">Ogłoszenie tekstowe numer {props.id}</h1>
        <p className="advert__text">
          Treść ogłoszenia Lorem ipsum dolor sit, amet consectetur adipisicing
          elit. Accusantium quos aut quasi doloremque laboriosam. Similique
          ducimus sequi soluta nulla, temporibus, commodi error fugiat dolorem
          debitis in quidem a quasi repellat est vel? Ab itaque aperiam eaque
          aspernatur illo officiis maiores et. Incidunt beatae ad voluptatem
          soluta, animi voluptatum exercitationem velit.
        </p>
        <div className="advert__tags">
          <Link to="/home">tag1</Link>
          <Link to="/home">tag1</Link>
          <Link to="/home">tag1</Link>
        </div>
      </div>
    </>
  );
};

export default Advert;
