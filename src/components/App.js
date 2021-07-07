import React, { useState } from "react";
import Nav from "./Nav";
import HogTileContainer from "./HogTileContainer";
import Form from "./Form";

import hogsData from "../porkers_data";

function App() {
  const [hogs, setHogs] = useState(hogsData);
  const [greasedButton, setGreasedButton] = useState(false);
  const [nameButton, setNameButton] = useState(false);
  const [weightButton, setWeightButton] = useState(false);

  const filteredHogs = hogsData.filter((hog) => hog.greased);
  const handleGreasedFilter = () => {
    handleDisplay();
    setGreasedButton(!greasedButton);
  };
  const handleDisplay = () => {
    greasedButton ? setHogs(filteredHogs) : setHogs(hogsData);
  };
  const newNameHogs = [...hogs];
  const sortNameHogs = newNameHogs.sort(function (a, b) {
    let nameA = a.name.toUpperCase();
    let nameB = b.name.toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });
  const newWeightHogs = [...hogs];

  const sortWeightHogs = newWeightHogs.sort(function (a, b) {
    return a.weight - b.weight;
  });
  console.log(sortWeightHogs);

  const handleNameDisplay = () => {
    nameButton ? setHogs(sortNameHogs) : setHogs(hogsData);
  };

  const handleWeightDislplay = () => {
    weightButton ? setHogs(sortWeightHogs) : setHogs(hogsData);
  };

  const handleNameSort = () => {
    setNameButton(!nameButton);
    handleNameDisplay();
  };
  const handleWeightSort = () => {
    setWeightButton(!weightButton);
    handleWeightDislplay();
  };

  // const handleForm = (formData) => {
  //   let piggies;
  //   if (formData.name) {
  //     piggies = sortNameHogs;
  //   } else if (formData.weight) {
  //     piggies = sortWeightHogs;
  //   }
  //   setHogs(piggies);
  // };

  return (
    <div className="App">
      <Nav />
      <Form
        handleWeightSort={handleWeightSort}
        handleNameSort={handleNameSort}
        handleGreasedFilter={handleGreasedFilter}
      />

      <HogTileContainer hogs={hogs} />
    </div>
  );
}

export default App;
