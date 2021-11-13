import Advert from "../components/Advert.js";

const HomePage = ({ adverts }) => {
  const containerStyles = {
    margin: "100px 20px 20px",
  };
  console.log("homepage", adverts);
  const pageContent = adverts.map((advert, index) => (
    <Advert advert={advert} key={index} />
  ));

  return (
    <div className="adverts-container" style={containerStyles}>
      {adverts.length > 0 ? pageContent : null}
    </div>
  );
};

export default HomePage;
