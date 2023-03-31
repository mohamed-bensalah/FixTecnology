import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';



const DashboardP = () => {
  const [AddProductPPC, setAddProductPPC] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/allAddPPC")
      .then((response) => {
        setAddProductPPC(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const deleteHandler = (id) => {
    axios
      .delete(`http://localhost:8000/api/deleteOneAddPPC/${id}`)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="text-center">
        <h1>Product PC</h1>
      </div>
      <br/>
      <div className="center">
        <div className="text-center">
          <Link to={`/AddPPC`} className="btn btn-success">
            add a New Product
          </Link>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th class="h3">name</th>
              <th class="h3">type</th>
              <th class="h3">price</th>
              <th class="h3">description</th>
              <th class="h3">Delete</th>
              <th class="h3">Details</th>
            </tr>
          </thead>
          <tbody>
          {AddProductPPC.map((AddProductPPC, index) => {
              return (
                <tr>
                  <td class="h5">{AddProductPPC.name}</td>
                  <td class="h5">{AddProductPPC.type}</td>
                  <td class="h5">{AddProductPPC.price}</td>
                  <td class="h5">{AddProductPPC.description}</td>
                  <td class="h5"><Link
            to="/DashboardAdmin"
            class="btn btn-danger"
            onClick={(e) => deleteHandler(AddProductPPC._id)}
          >
            Delete
          </Link></td>
          <td class="h5"><Link
            to={"/DetailsPPc/" + AddProductPPC._id}
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
export default DashboardP;
