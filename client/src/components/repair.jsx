import React from 'react';
import { Link } from 'react-router-dom';
import OptionStyle from '../components/style/OptionStyle.css'

const Repair = () => {
  return (
    <div className='optionP'>
      <div>
      <Link className='link' to="/RepairGSM">
        <img src="/image/37495.png" alt="img" className='imgHome'/>
        <h4>Repair GSM</h4>
        </Link>
      </div>

        <div >
        <Link className='link' to="/RepairPC">
        <img src="/image/settings.png" alt="img" className='imgHome'/>
        <h4>Repair PC</h4>
        </Link>
      </div>
    </div>
  )
}

export default Repair