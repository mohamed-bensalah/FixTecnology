import React from 'react'
import Slide from "../components/Slide"
import Option from '../components/Option';
import { Link } from 'react-router-dom';

const Home = props => {
  return (
    <div>
      <Link to="/">
      <Slide />
      <Option />
      </Link>
    </div>
  )
}

export default Home