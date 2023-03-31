import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import OptionStyle from '../components/style/OptionStyle.css'

const PieceGsm = () => {
  const [AddProduct, setAddProduct] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/allAddProduct")
      .then((response) => {
        setAddProduct(response.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className='option'
    style={{display: 'flex',flexWrap:'wrap', gap:'80px'}}>
        {AddProduct.map((AddProduct, index) => {
              return (
                <tr style={{display: 'flex', flexDirection:'column'}}>
                  <Link to={"/DetailsP/" + AddProduct._id}>
                  <img class="img"src={AddProduct.image}
                  style={{width: '225px', height:'225px'}}/>
                  <td class="h5">{AddProduct.name}</td>
                  </Link>
                  
                </tr>
                  );
                  })}
    </div>
  )
}

export default PieceGsm