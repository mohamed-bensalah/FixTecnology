import React from 'react'
import { Link } from 'react-router-dom'
import OptionStyle from '../components/style/OptionStyle.css'

const Option = () => {
  return (
    <div className='option'>
      <div>
        <Link className='link' to="/Piece" >
        <img src="/image/37495.png" alt="img" className='imgHome'/>
        <h4 className='TextP'>Piece de Rechange</h4>
        </Link>
      </div>
      

      <div >
         <Link className="link" to="/Repair" >
        <img src="/image/6370562.png" alt="img" className='imgHome'/>
        <h4>How To Repair</h4>
        </Link>
      </div>

      <div >
      <Link className="link" to="/AppsAndPro" >
        <img src="/image/1085828.png" alt="img" className='imgHome'/>
        <h4>Application & Programs</h4>
        </Link>
      </div>

    </div>
  )
}

export default Option