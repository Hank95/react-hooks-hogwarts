import { useState } from "react";

const Form = ({ handleGreasedFilter, handleNameSort, handleWeightSort }) => {
  //   const [formData, setFormData] = useState({
  //     greased: false,
  //     name: false,
  //     weight: false,
  //   });

  //   const handleChange = (e) => {
  //     setFormData({
  //       ...formData,
  //       [e.target.name]: e.target.checked,
  //     });
  //   };
  //   handleForm(formData);
  //   console.log(formData);
  return (
    <div className="form">
      <button onClick={handleGreasedFilter}>Greased?</button>
      <button onClick={handleNameSort}>Sort by Name</button>
      <button onClick={handleWeightSort}>Sort by Weight</button>
      {/* <div className="checkDiv">
        <p>Want your Pigs greased?</p>
        <div>
          <input type="checkbox" name="greased" onChange={handleChange} />
          <label for="greased">Greased</label>
        </div>
      </div>
      <div className="checkDiv">
        <p>Sort By</p>
        <div>
          <input type="checkbox" name="name" onChange={handleChange} />
          <label for="Name">Sort by Name</label>
        </div>
        <div>
          <input type="checkbox" name="weight" onChange={handleChange} />
          <label for="weight">weight</label>
        </div>
      </div> */}
    </div>
  );
};

export default Form;
