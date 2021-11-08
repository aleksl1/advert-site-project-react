import Advert from "../components/Advert.js";

const HomePage = ({ adverts }) => {
  const containerStyles = {
    margin: "100px 20px 20px",
  };

  const pageContent = adverts.map((advert, index) => (
    <Advert id={advert} key={index} />
  ));

  return (
    <div className="adverts-container" style={containerStyles}>
      {pageContent}
    </div>
  );
};

export default HomePage;
