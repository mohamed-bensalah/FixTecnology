import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import OptionStyle from '../components/style/OptionStyle.css'

const Windows = () => {
  const [Windows, setWindows] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/allPro")
      .then((response) => {
        setWindows(response.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className='option'
    style={{display: 'flex',flexWrap:'wrap', gap:'80px'}}>
        {Windows.map((Windows, index) => {
              return (
                <tr style={{display: 'flex', flexDirection:'column'}}>
                  <Link to={"/DetailsPro/" + Windows._id}>
                  <img class="img"src={Windows.image}
                  style={{width: '225px', height:'225px'}}/>
                  <td class="h5">{Windows.title}</td>
                  </Link>
                  
                </tr>
                  );
                  })}
    </div>
  )
}

export default Windows