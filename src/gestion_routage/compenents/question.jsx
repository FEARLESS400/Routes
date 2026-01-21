import React from 'react'

import Nav from './nav';
import Fouter from './fouter';
import { useParams } from 'react-router-dom';


function Question() {


  return (
    <>
    <Nav />
    <h1 className='vh-100'>Question</h1>
    <Fouter />
    </>
  )
}

export default Question