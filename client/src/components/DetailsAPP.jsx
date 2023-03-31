import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from 'axios';

const Details = () => {
  const [Android, setAndroid] = useState();
  const { Android_id } = useParams();

  useEffect((_id) => {
    axios
      .get(`http://localhost:8000/api/oneApps/${Android_id}`)
      .then((res) => {
        setAndroid(res.data);
      })
      .catch((err) => console(err));
  }, []);

  return (
    <>
      <div className="center">
              {Android ? (
                  <>
                  <h1>{Android.name}</h1>
                  <img class="img"src={Android.image}
                  style={{width: '225px', height:'225px'}}/><br/>
                  <h3> type : {Android.type}</h3>
                  <h2> description</h2>
                  <h3>{Android.description}</h3>
                  <button style={{backgroundColor: '#006400', width:'80px', height:"40px"}}>download</button>
                </>
              ) : null}
      </div>
    </>
  );
};

export default Details;
