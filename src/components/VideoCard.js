import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import './VideoCard.css'
import { Trash2 } from 'react-feather';
import { addHistory, deleteVideo } from './Services/Allapi';
import uniqid from 'uniqid';
import format from 'date-fns/format';

function VideoCard({video,deleteFunc}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow =  async()=>{
       setShow(true);
      //  body
      // id
      var id=uniqid()
      // title
      var video_title=video.caption
      // url
      var url=video.video_url
      // date
      var date=format(new Date(),'yyyy-MM-dd h:mm:ss a')

      const body={id,video_title,url,date}
      if(body){

      // api call
       const result=await addHistory(body)
      console.log(result);
      }
    
    }

    const handleDelete=async(id)=>{
      const result=await deleteVideo(id)
      if(result.status>=200 && result.status<300)
      deleteFunc(result.data);
    }
const DragStart=(e,id)=>{
  console.log("drag started...source card id-"+id);
  //  store dragged data
  e.dataTransfer.setData("cardId",id)
}

  return (
    <div>
      <Row>
        <Col>
         <Card draggable onDragStart={(e)=>DragStart(e,video.id)} style={{ width: '18rem' }} >
      <Card.Img onClick={handleShow} variant="top" src={video.cover_image} />
      <Card.Body>
        <Card.Title><h5>{video.caption}</h5></Card.Title>
        {/* <Button variant="primary" >Watch Video</Button>  */}
        <div className='text-end'>
<Trash2 onClick={()=>handleDelete(video.id)} size={50} className='btn'></Trash2>
        {/* <i class="fa-solid fa-trash fa-beat  "></i> */}
        </div>
      </Card.Body>
    </Card>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body><iframe width="470" height="250" src={video.video_url} title="Channa Mereya - Lyric Video | Ae Dil Hai Mushkil | Karan Johar | Ranbir | Anushka | Pritam | Arijit" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      </Col>
      
   
      </Row>
    </div>
  )
}

export default VideoCard
