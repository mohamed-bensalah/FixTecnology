import axios from "axios";
import { useEffect, useState } from "react";

import { Link } from "react-router-dom";



const DashboardPro = () => {
  const [Pro, setPro] = useState([]);



  useEffect(() => {
    axios
      .get("http://localhost:8000/api/allPro")
      .then((response) => {
        setPro(response.data);
      })
      .catch((err) => console.log(err));
  }, []);


  const deleteHandler = (id) => {
    axios
      .delete(`http://localhost:8000/api/onePro/${id}`)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => console.log(err));
  };


  return (
    <>
      <div className="text-center">
        <h1>program</h1>
      </div>
      <br/>
      <div className="center">
        <div className="text-center">
          <Link to={"/AddPro"} className="btn btn-success">
            add a New program
          </Link>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th class="h3">title</th>
              <th class="h3">type</th>
              <th class="h3">Delete</th>
              <th class="h3">Details</th>
            </tr>
          </thead>
          <tbody>
          {Pro.map((Pro, index) => {
              return (
                <tr>
                  <td class="h5">{Pro.title}</td>
                  <td class="h5">{Pro.type}</td>
                  

                  <td class="h5"><Link
            to="/DashboardAdmin"
            class="btn btn-danger"
            onClick={(e) => deleteHandler(Pro._id)}
          >
            Delete
          </Link></td>

          <td class="h5"><Link
            to={"/DetailsPro/" + Pro._id}
            class="btn btn-primary"
          >
            Details
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
export default DashboardPro;
