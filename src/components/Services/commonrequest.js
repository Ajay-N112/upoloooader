import axios from "axios"

export const commonrequest=async(method,url,body)=>{
    let config={
        method,
        url,
        data:body
    }
    return await axios(config).then(data=>{
        return data
    }).catch(err=>{
        return err
    })

}