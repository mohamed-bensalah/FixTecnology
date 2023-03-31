import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const DashboardV = () => {
  const [Video, setVideo] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/allVideo")
      .then((response) => {
        setVideo(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const deleteHandler = (id) => {
    axios
      .delete(`http://localhost:8000/api/deleteOneVideo/${id}`)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
      <div className="text-center">
        <h1>video</h1>
      </div>
      <br/>
      <div className="center">
        <div className="text-center">
          <Link to={`/addVideo`} className="btn btn-success">
            add a New video
          </Link>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th class="h3">title</th>
              <th class="h3">description</th>
              <th class="h3">Delete</th>
            </tr>
          </thead>
          <tbody>
          {Video.map((Video, index) => {
              return (
                <tr>
                  <td class="h5">{Video.title}</td>
                  <td class="h5">{Video.description}</td>
                  <td class="h5"><Link
            to="/DashboardAdmin"
            class="btn btn-danger"
            onClick={(e) => deleteHandler(Video._id)}
          >
            Delete
          </Link></td>
                </tr>
                  );
                  })}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default DashboardV;
