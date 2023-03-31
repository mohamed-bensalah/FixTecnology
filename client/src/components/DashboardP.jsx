import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';



const DashboardP = () => {
  const [AddProduct, setAddProduct] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/allAddProduct")
      .then((response) => {
        setAddProduct(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const deleteHandler = (id) => {
    axios
      .delete(`http://localhost:8000/api/deleteOneAddProduct/${id}`)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => console.log(err));
  };

  
  return (
    <>
      <div className="text-center">
        <h1>Product GSM</h1>
      
      </div>
      <br/>
      <div className="center">
        <div className="text-center">
          <Link to={`/AddProduct`} className="btn btn-success">
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
          {AddProduct.map((AddProduct, index) => {
              return (
                <tr>
                  <td class="h5">{AddProduct.name}</td>
                  <td class="h5">{AddProduct.type}</td>
                  <td class="h5">{AddProduct.price}</td>
                  <td class="h5">{AddProduct.description}</td>
                  <td class="h5"><Link
            to="/DashboardAdmin"
            class="btn btn-danger"
            onClick={(e) => deleteHandler(AddProduct._id)}
          >
            Delete
          </Link></td>

            <td class="h5"><Link
            to={"/DetailsP/" + AddProduct._id}
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
