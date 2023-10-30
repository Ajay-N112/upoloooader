import { commonrequest } from "./commonrequest"
import { baseUrl } from "./baseurl"
// Add videos
export const addVideo=async(body)=>{
    return await commonrequest('POST',`${baseUrl}/videos`,body)
}
// get all videos
export const getAllVideos=async()=>{
    return  await commonrequest('GET',`${baseUrl}/videos`,{})
}
// delete video by id
export const deleteVideo=async(id)=>{
    return await commonrequest('DELETE',`${baseUrl}/videos/${id}`,{})
}
//  add  categories 
export const addCategory=async(body)=>{
    return await commonrequest('POST',`${baseUrl}/categories`,body)
}
// get all categories
export const getAllCat=async()=>{
    return  await commonrequest('GET',`${baseUrl}/categories`,{})
}
// delete categories
export const deleteCat=async(id)=>{
    return await commonrequest('DELETE',`${baseUrl}/categories/${id}`,{})
}
//Add history
export const addHistory=async(body)=>{
    return await commonrequest('post',`${baseUrl}/histories`,body)
} 
// get all histories
export const getAllHistory=async()=>{
    return  await commonrequest('GET',`${baseUrl}/histories`,{})
}
// delete History
export const deleteHis=async(id)=>{
    return await commonrequest('DELETE',`${baseUrl}/histories/${id}`,{})
}

// Drag and drop
// access single video
export const getVideo=async(id)=>{
    return await commonrequest('GET' ,`${baseUrl}/videos/${id}`,{})
}
// upadte category
export const updateCategory=async(id,body)=>{
    return await commonrequest('put',`${baseUrl}/categories/${id}`,body)
}

