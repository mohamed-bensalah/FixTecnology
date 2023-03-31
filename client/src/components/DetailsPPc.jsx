import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from 'axios';

const Details = () => {
  const [AddPPC, setAddPPC] = useState();
  const { AddProductPPC_id } = useParams();

  useEffect((_id) => {
    axios
      .get(`http://localhost:8000/api/oneAddPPC/${AddProductPPC_id}`)
      .then((res) => {
        setAddPPC(res.data);
      })
      .catch((err) => console(err));
  }, []);

  return (
    <>
      <div className="center">
              {AddPPC ? (
                  <>
                  <h1>{AddPPC.name}</h1>
                  <img class="img"src={AddPPC.image}
                  style={{width: '225px', height:'225px'}}/><br/>
                  <h3> type : {AddPPC.type}</h3>
                  <h3> price : {AddPPC.price}</h3>
                  <h3> description : {AddPPC.description}</h3>
                  <button style={{backgroundColor: '#006400', width:'80px', height:"40px"}}>buy</button>
                </>
              ) : null}
      </div>
    </>
  );
};

export default Details;
