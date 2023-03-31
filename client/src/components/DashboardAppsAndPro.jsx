import axios from "axios";
import { useEffect, useState } from "react";

import { Link } from "react-router-dom";



const DashboardAppsAndPro = () => {
  const [AppsAndPro, setAppsAndPro] = useState([]);



  useEffect(() => {
    axios
      .get("http://localhost:8000/api/allApps")
      .then((response) => {
        setAppsAndPro(response.data);
      })
      .catch((err) => console.log(err));
  }, []);


  const deleteHandler = (id) => {
    axios
      .delete(`http://localhost:8000/api/deleteOneApps/${id}`)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => console.log(err));
  };


  return (
    <>
      <div className="text-center">
        <h1>Apps</h1>
      </div>
      <br/>
      <div className="center">
        <div className="text-center">
          <Link to={"/addAppsOrPro"} className="btn btn-success">
            add a New Apps
          </Link>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th class="h3">title</th>
              <th class="h3">type</th>
              <th class="h3">Delete A/P</th>
              <th class="h3">Details</th>
            </tr>
          </thead>
          <tbody>
          {AppsAndPro.map((AppsAndPro, index) => {
              return (
                <tr>
                  <td class="h5">{AppsAndPro.title}</td>
                  <td class="h5">{AppsAndPro.type}</td>
                  

                  <td class="h5"><Link
            to="/DashboardAdmin"
            class="btn btn-danger"
            onClick={(e) => deleteHandler(AppsAndPro._id)}
          >
            Delete A/P
          </Link></td>

          <td class="h5"><Link
            to={"/DetailsAPP/" + AppsAndPro._id}
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
export default DashboardAppsAndPro;
