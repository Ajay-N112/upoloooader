import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import uniqid from 'uniqid';
import { addVideo } from './Services/Allapi';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Add({ update }) {
  //  state to hold input data's
  const [input, setInputs] = useState({
    id: "",
    caption: "",
    cover_image: "",
    video_url: "",
  })
  // function for onclick
  const setValues = (e) => {
    let { value, name } = e.target
    // console.log(value,name);
    setInputs({ ...input, [name]: value })
    console.log(input);
  }
  const extractUrl = (e) => {
    let videoUrl = e.target.value
    // console.log(videoUrl);
    if (videoUrl.includes("v=")) {
      // let index=videoUrl.indexOf('v=')
      let subUrl = videoUrl.split("v=")[1]

      let finalUrl = `https://www.youtube.com/embed/${subUrl}`
      setInputs({ ...input, ["video_url"]: finalUrl })


    }
  }
  console.log(input);

  const addHandle = async () => {
    let id = uniqid
    setInputs({
      ...input, ["id"]: id
    })
    const { caption, cover_image, video_url } = input
    if (caption == "" || cover_image == "" || video_url == "") {
toast.error(" all inputs are required", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }      
    else {
      const result = await addVideo(input)
      console.log(result);

      if (result.status >= 200 && result.status < 300) {
        // update state form home
        update(result.data)
        toast.success("video added", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        setShow(false)
      }
    }




  }

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        <i class="fa-solid fa-upload fa-bounce"></i>
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Upload Videos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              {/* <Form.Label>Email address</Form.Label> */}
              <Form.Control name='caption' onChange={(e) => setValues(e)}
                type="email"
                placeholder="Video Caption"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              {/* <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} /> */}
            </Form.Group>
          </Form>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              {/* <Form.Label>Email address</Form.Label> */}
              <Form.Control name='cover_image' onChange={(e) => setValues(e)}
                type="email"
                placeholder="Video CoverImage URL"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              {/* <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} /> */}
            </Form.Group>
          </Form>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              {/* <Form.Label>Email address</Form.Label> */}
              <Form.Control onChange={(e) => extractUrl(e)}
                type="text"
                placeholder="YouTube Video URL"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              {/* <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} /> */}
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={addHandle}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>

      <ToastContainer />
    </div>
  )
}

export default Add