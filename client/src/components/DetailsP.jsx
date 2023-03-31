import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from 'axios';

const Details = () => {
  const [AddProduct, setAddProduct] = useState();
  const { AddProduct_id } = useParams();

  useEffect((_id) => {
    axios
      .get(`http://localhost:8000/api/oneAddProduct/${AddProduct_id}`)
      .then((res) => {
        setAddProduct(res.data);
      })
      .catch((err) => console(err));
  }, []);

  return (
    <>
      <div className="center">
              {AddProduct ? (
                  <>
                  <h1>{AddProduct.name}</h1>
                  <img class="img"src={AddProduct.image}
                  style={{width: '225px', height:'225px'}}/><br/>
                  <h3> type : {AddProduct.type}</h3>
                  <h3> price : {AddProduct.price}</h3>
                  <h3> description : {AddProduct.description}</h3>
                  <button style={{backgroundColor: '#006400', width:'80px', height:"40px"}}>buy</button>
                </>
              ) : null}
      </div>
    </>
  );
};

export default Details;
