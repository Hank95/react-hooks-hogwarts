import { useState } from "react";

const HogTile = ({ hog }) => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };
  return (
    <div className="pigTile" onClick={handleClick}>
      <img src={hog.image} alt={hog.name} width="300px" />
      <div> {hog.name}</div>
      {clicked ? (
        <div>
          <p>specialty:{hog.specialty}</p>
          <p>Weight: {hog.weight}</p>
          <p>Greased?: {hog.greased ? "yes" : "no"}</p>
          <p>highest medal achieved: {hog["highest medal achieved"]}</p>
        </div>
      ) : null}
    </div>
  );
};

export default HogTile;
