import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddP = () => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [Error,setError] = useState([]);
  const [ErrorsH, setErrorH] = useState([]);
  const navigate = useNavigate();




  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/PostNewAddProduct", {
        name,
        type,
        price,
        image,
        description

      })
      .then((response) => {
        navigate("/DashboardAdmin");      })
      .catch((err) => {
        const errorResponce = err.response.data.errors;
        const errArr = [];
        const errObj = {};
        for (const key of Object.keys(errorResponce)) {
          errArr.push(errorResponce[key].message);
          errObj[key] = errorResponce[key].message;
        }
        console.log(errorResponce);
        setError(errArr);
        setErrorH(errObj);
      });
      }
  return (
    <div className='AddP'>
    <h1>Add Product</h1>

    <form onSubmit={(e) => submitHandler(e)} >
      <div>
        <label className="form-label" htmlFor="">
          Name
        </label>
        <input
          className="form-control"
          type="text"
          name="Name"
          onChange={(e) => setName(e.target.value)}
              value={name}
        />
          {ErrorsH.name ? <p>{ErrorsH.name}</p> : null}
      </div>

      <div>
        <label className="form-label" htmlFor="">
        type
        </label>
        <input
          className="form-control"
          type="text"
          name="type"
          onChange={(e) => setType(e.target.value)}
          />
          {ErrorsH.type ? <p>{ErrorsH.type}</p> : null}
      </div>


      <div>
        <label className="form-label" htmlFor="">
        price
        </label>
        <input
          className="form-control"
          type="number"
          name="price"
          onChange={(e) => setPrice(e.target.value)}
          value={price}
        />
        {ErrorsH.price ? <p>{ErrorsH.price}</p> : null}
      </div>


      <div>
        <label className="form-label" htmlFor="">
        image
        </label>
        <input
          className="form-control"
          type="string"
          name="image"
          onChange={(e) => setImage(e.target.value)}
          value={image}
        />
        {ErrorsH.image ? <p>{ErrorsH.image}</p> : null}
      </div>

      <div>
        <label className="form-label" htmlFor="">
        description
        </label>
        <input
          className="form-control"
          type="string"
          name="image"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
        {ErrorsH.description ? <p>{ErrorsH.description}</p> : null}
      </div>



      <br />
      <input type="submit" value="submit" className="btn btn-primary" />
    </form>
  </div>
  )
}

export default AddP