import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddAP = (props) => {
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [Error,setError] = useState([]);
  const [ErrorsH, setErrorH] = useState([]);
  const navigate = useNavigate();



  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/PostNewApps", {
        title,
        type,
        image,
        description,
        link
      })
      .then((response) => {
        navigate("/DashboardAdmin");
      })
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
    <h1>Add Apps or Programe</h1>
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
        type
        </label>
        <input
          className="form-control"
          type="type"
          name="type"
          onChange={(e) => setType(e.target.value)}
        />
        {ErrorsH.type ? <p>{ErrorsH.type}</p> : null}
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
          name="description"
          onChange={(e) => setDescription(e.target.value)}
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
      <input value="submit"
      type="submit"
      className="btn btn-primary" />
    </form>
  </div>
  )
}

export default AddAP;
