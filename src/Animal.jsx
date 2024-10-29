const Animal = ({ animalType, imgUrl, description }) => {

  return (
    <>
      <h2>{animalType}</h2>
      <img src={imgUrl} />
      <p>{description}</p>
    </>
  );
}

export default Animal;