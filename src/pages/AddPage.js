import AdvertForm from "../components/AdvertForm";

const AddPage = ({ advertId, adverts, categories }) => {
  return <AdvertForm adverts={adverts} categories={categories} />;
};

export default AddPage;
