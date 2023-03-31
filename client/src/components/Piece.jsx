import React from 'react';
import { Link } from 'react-router-dom';
import OptionStyle from '../components/style/OptionStyle.css'

const Piece = () => {
  return (
    <div className='optionP'>
      <div>
      <Link className='link' to="/pieceGsm">
        <img src="/image/37495.png" alt="img" className='imgHome'/>
        <h4>Piece de Rechange GSM</h4>
        </Link>
      </div>

        <div >
        <Link className='link' to="/piecePC">
        <img src="/image/settings.png" alt="img" className='imgHome'/>
        <h4>Piece de Rechange PC</h4>
        </Link>
      </div>
    </div>
  )
}

export default Piece