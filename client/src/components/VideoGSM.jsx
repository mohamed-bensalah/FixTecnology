import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const VideoGsm = () => {
  const [Video, setVideo] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/allVideo")
      .then((response) => {
        setVideo(response.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className='option'
    style={{display: 'flex',flexWrap:'wrap', gap:'80px'}}>
        {Video.map((Video, index) => {
              return (
                <tr style={{display: 'flex', flexDirection:'column'}}>
                  <Link to={Video.link}>
                  <img class="img"src={Video.Image}
                  style={{width: '225px', height:'225px'}}/>
                  <td class="h5">{Video.title}</td>
                </Link>
                </tr>
                  );
                  })}
    </div>
  )
}

export default VideoGsm
