import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const DashboardVPc = () => {
  const [VideoPc, setVideoPc] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/allVideoPC")
      .then((response) => {
        setVideoPc(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const deleteHandler = (id) => {
    axios
      .delete(`http://localhost:8000/api/deleteOneVideoPC/${id}`)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
      <div className="text-center">
        <h1>video Pc</h1>
      </div>
      <br/>
      <div className="center">
        <div className="text-center">
          <h3>Video List</h3>
          <Link to={`/addVPc`} className="btn btn-success">
            add a New video Pc
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
          {VideoPc.map((VideoPc, index) => {
              return (
                <tr>
                  <td class="h5">{VideoPc.title}</td>
                  <td class="h5">{VideoPc.description}</td>
                  <td class="h5"><Link
            to="/DashboardAdmin"
            class="btn btn-danger"
            onClick={(e) => deleteHandler(VideoPc._id)}
            >
              Delete video PC
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
export default DashboardVPc;
