import React from 'react';
import { Link } from 'react-router-dom';
import OptionStyle from '../components/style/OptionStyle.css'

const AppsAndPro = () => {
  return (
    <div className='optionP'>
      <div>
      <Link className='link' to="/Android">
        <img src="/image/images__1_-removebg-preview.png" alt="img" className='imgHome'/>
        <h4>Android</h4>
        </Link>
      </div>

        <div >
        <Link className='link' to="/Windows">
        <img src="/image/icons8-windows-11-250.png" alt="img" className='imgHome'/>
        <h4>Windows</h4>
        </Link>
      </div>
    </div>
  )
}

export default AppsAndPro