import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const VideoPc = () => {
  const [VideoPc, setVideoPc] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/allVideoPC")
      .then((response) => {
        setVideoPc(response.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className='option'
    style={{display: 'flex',flexWrap:'wrap', gap:'80px'}}>
        {VideoPc.map((VideoPc, index) => {
              return (
                <tr style={{display: 'flex', flexDirection:'column'}}>
                  <Link to={VideoPc.link}>
                  <img class="img"src={VideoPc.Image}
                  style={{width: '225px', height:'225px'}}/>
                  <td class="h5">{VideoPc.title}</td>
                </Link>
                </tr>
                  );
                  })}
    </div>
  )
}

export default VideoPc
