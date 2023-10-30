import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import { getAllVideos } from './Services/Allapi'
import { Col, Row } from 'react-bootstrap'

function View({updatedState}) {
// const accessAllVideos=async()=>{
//   const result=await getAllVideos()
//   console.log(result);
// }
// useEffect(() => {
//   accessAllVideos();
//   }, [])
  




const [allVideos,setAllVideos]=useState([])
// state to update delete
const [deleteUpadate,setUpdateDelete] = useState({})

const accessAllVideos=async()=>{
  const result=await getAllVideos()
  if(result.status>=200 && result.status<300){
    // console.log(result.data);
    setAllVideos(result.data)
  }
 
}
console.log(allVideos);
useEffect(() => {
  accessAllVideos();
  },[updatedState,deleteUpadate])
  return (
    <Row>
    {
      allVideos.length>0?(
        allVideos.map(i=>
         <Col lg={6} md={6}> <VideoCard video={i} deleteFunc={setUpdateDelete}></VideoCard> </Col>
        )
      ): <h1>no videos</h1>
    }
       
    </Row>
  )
}

export default View