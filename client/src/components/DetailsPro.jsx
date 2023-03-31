import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from 'axios';

const Details = () => {
  const [Windows, setWindows] = useState();
  const { Windows_id } = useParams();

  useEffect((_id) => {
    axios
      .get(`http://localhost:8000/api/onePro/${Windows_id}`)
      .then((res) => {
        setWindows(res.data);
      })
      .catch((err) => console(err));
  }, []);

  return (
    <>
      <div className="center">
              {Windows ? (
                  <>
                  <h1>{Windows.name}</h1>
                  <img class="img"src={Windows.image}
                  style={{width: '225px', height:'225px'}}/><br/>
                  <h3> type : {Windows.type}</h3>
                  <h2> description</h2>
                  <h3>{Windows.description}</h3>
                  <button style={{backgroundColor: '#006400', width:'80px', height:"40px"}}>download</button>
                </>
              ) : null}
      </div>
    </>
  );
};

export default Details;
