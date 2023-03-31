import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddV = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [Image, setImage] = useState("");
  const [Error,setError] = useState([]);
  const [ErrorsH, setErrorH] = useState([]);
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/PostNewVideoPC", {
        title,
        description,
        link,
        Image
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
      <form onSubmit={(e) => submitHandler(e)} >
    <h1>Add Video PC</h1>
      <div>
        <label className="form-label" htmlFor="">
        title
        </label>
        <input
          className="form-control"
          type="text"
          name="title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
    />
      {ErrorsH.title ? <p>{ErrorsH.title}</p> : null}
      </div>
      
      <div>
        <label className="form-label" htmlFor="">
        description
        </label>
        <input
          className="form-control"
          type="staring"
          name="description"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
        {ErrorsH.description ? <p>{ErrorsH.description}</p> : null}
      </div>

      <div>
        <label className="form-label" htmlFor="">
        link
        </label>
        <input
          className="form-control"
          type="string"
          name="link"
          onChange={(e) => setLink(e.target.value)}
          />
          {ErrorsH.link ? <p>{ErrorsH.link}</p> : null}
      </div>

      <div>
        <label className="form-label" htmlFor="">
        Image
        </label>
        <input
          className="form-control"
          type="string"
          name="Image"
          onChange={(e) => setImage(e.target.value)}
          />
          {ErrorsH.Image ? <p>{ErrorsH.Image}</p> : null}
      </div>
      <br />
      <input type="submit" value="submit" className="btn btn-primary" />
    </form>
  </div>
  )
}

export default AddV