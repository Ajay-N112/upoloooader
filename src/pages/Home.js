import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Add from '../components/Add'
import View from '../components/View'
import Categories from '../components/Categories'
import './Home.css'
import { Link } from 'react-router-dom'



function Home() {
  // state for state-lifting
  const [addUpdate,setAddUpdate]=useState({})
  return (
    <div>
        <h1 className='up12'>
          Upload Videos For Free
        </h1>
        <br />
        
        <div >
          <Link to={'/watch-history'}  style={{textDecoration:"none"}}>
        <h2>
        <i class="fa-regular fa-clock fa-shake"></i>  <a  className='' style={{textDecoration:'none'}}> Show History</a>
        </h2>
        </Link>
        </div>
        <Row>
          <Col lg={1}>
       <Add update={setAddUpdate}>

       </Add>
          </Col>
          <Col lg={7}>
        <View updateState={addUpdate}>

        </View>
          </Col>
          <Col lg={4}>
         <Categories>

         </Categories>
          </Col>
        </Row>
    </div>
  )
}

export default Home