import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import OptionStyle from '../components/style/OptionStyle.css'

const Android = () => {
  const [Android, setAndroid] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/allApps")
      .then((response) => {
        setAndroid(response.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className='option'
    style={{display: 'flex',flexWrap:'wrap', gap:'80px'}}>
        {Android.map((Android, index) => {
              return (
                <tr style={{display: 'flex', flexDirection:'column'}}>
                  <Link to={"/DetailsAPP/" + Android._id}>
                  <img class="img"src={Android.image}
                  style={{width: '225px', height:'225px'}}/>
                  <td class="h5">{Android.title}</td>
                  </Link>
                  
                </tr>
                  );
                  })}
    </div>
  )
}

export default Android