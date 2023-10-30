import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { Trash2 } from 'react-feather';
import { deleteHis, getAllHistory } from '../components/Services/Allapi';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './History.css'
function History() {
    const [histories,setHistories]=useState([])
    const getHistories=async()=>{
        const {data}= await getAllHistory()
        setHistories(data);
    }
    useEffect(()=>{
        getHistories()
    },[])
    console.log(histories);

    

      const deleteHistory=async(id)=>{
        const result =await deleteHis(id)
        if (result.status >= 200 && result.status < 300) 
        getHistories()
        

            
      }
      useEffect(() => {
        deleteHistory()
      }, [])
  return (
    <div>
        <h1 className='text-center'>
          Watch  history
        </h1>
        <Link to={'/home'} >
        <Button className='text-end btn btn-dark'>Go  home</Button>
        </Link>
        {
            histories.length>0?(
    //     <Table className='w-75 container' striped bordered hover variant="primary" >
    //   <thead>
    //     <tr>
    //       <th>No.</th>
    //       <th>Date</th>
    //       <th> Video Title</th>
    //       <th>Video url</th>
    //       <th>Delete</th>
    //     </tr>
    //   </thead>
    //   <tbody>
    //   {  histories?.map((i,index)=>(
    //     <tr>
    //       <td>{index+1}</td>
    //       <td>{i?.date}</td>
    //       <td>{i?.video_title}</td>
    //       <td>{i?.url}</td>
    //       <td className='text-center'>
    //         <Trash2 onClick={()=>{deleteHistory(i.id)}} size={45} className='btn'></Trash2></td>

    //     </tr>
    //     ))
    //   }
    //   </tbody>
    // </Table>


    <Table striped bordered hover variant="primary" className='custom-table'>
  <thead>
    <tr>
      <th>No.</th>
      <th>Date</th>
      <th>Video Title</th>
      <th>Video URL</th>
      <th>Delete</th>
    </tr>
  </thead>
  <tbody>
    {histories?.map((i, index) => (
      <tr key={i.id}>
        <td>{index + 1}</td>
        <td>{i?.date}</td>
        <td>{i?.video_title}</td>
        <td>{i?.url}</td>
        <td className='text-center'>
          <Trash2 onClick={() => deleteHistory(i.id)} size={45} className='btn'></Trash2>
        </td>
      </tr>
    ))}
  </tbody>
</Table>

            ): <h1 className='text-center'>No watch history</h1>
}

    </div>
  )
}

export default History