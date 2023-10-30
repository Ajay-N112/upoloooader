import React from 'react'
// import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import uniqid from 'uniqid';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addCategory, deleteCat, getAllCat, getVideo, updateCategory } from './Services/Allapi';
import { useEffect } from 'react';
import { Trash2 } from 'react-feather';



function Categories() {
  // state to hold input id and video array
  const [catInputs, setCatInputs] = useState({
    id: "",
    name: "",
    videos: []
  })
  const [categories, setCategories] = useState([])
  const [show, setShow,] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const setInputs = (e) => {
    const { value, name } = e.target
    setCatInputs({ ...catInputs, [name]: value })
  }
  const addData = async () => {
    let id = uniqid();
    setCatInputs({ ...catInputs, id: id });

    const { name } = catInputs


    if (name == "") {
      toast.error("Please add inputs", {
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
      // api call
      const result = await addCategory(catInputs);
      if (result.status >= 200 && result.status < 300) {
        setShow(false);
        getAllCategories()
        console.log(result.data.name);

        toast.success("Category added successfully", {
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
    }
  };

  // console.log(catInputs);
  const getAllCategories = async () => {
    
    const result = await getAllCat()
    if (result.status >= 200 && result.status < 300) {

    setCategories(result.data);
    }

  }
  // console.log(categories);
  const removeCategories=async(id)=>{
    const result=await deleteCat(id)
    if (result.status >= 200 && result.status < 300) {

    // refresh categories list
    getAllCategories()
    }
  }

  useEffect(() => {
    getAllCategories()
  }, [])
  const dragOver=(e)=>{
    e.preventDefault()
    console.log("dragged over the category...");
  }
const dropped=async(e,id)=>{
  console.log("dropped...cat id -"+id);
  const videoId=e.dataTransfer.getData("cardId")
  console.log(videoId);
  // access video from backend
  const {data}=await getVideo(videoId)
  console.log(data);

// selected dropped category from all category 

const selectedCategory=categories.find(i=>i.id==id)
console.log(selectedCategory);
// update category object with video data
selectedCategory.videos.push(data)
console.log(selectedCategory);

// api call to update the changed category in backend

 await updateCategory(id,selectedCategory)
 getAllCategories()
}

  return (
    <div>
      {/* <Button variant="secondary">Secondary</Button>{' '} */}
      <Button variant="primary" onClick={handleShow}>
        Add Categories
      </Button>
      {
        categories.length>0?(
          categories.map(i=>(
            <div droppable
            onDragOver={(e)=>dragOver(e)}

            onDrop={(e)=>dropped(e,i?.id)}
             className='border mt-5  p-5' >
              <h1 className='fs-3'>{i.name} </h1>
              <div className='text-end'>
              <Trash2 onClick={()=>{removeCategories(i.id)}} size={55} className='btn'></Trash2>
            </div>
            {
              i.videos.map(j=>(
                <div ><img className='o5' style={{height:'30px',width:'30px', float:'left' }} src={j.cover_image} alt="" /></div>
              ))
            }
            </div>
          ))
        ):<h1> No Categories is added</h1>
      }

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>All new categories</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">

              <Form.Control onChange={(e) => setInputs(e)} name='name' type="text"


              />
            </Form.Group>
            {/* <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group> */}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={addData}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>

      <ToastContainer />
    </div>
  )
}

export default Categories