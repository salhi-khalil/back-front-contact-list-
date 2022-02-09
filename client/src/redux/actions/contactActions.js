import axios from "axios"
import { GET_CONTACT, GET_CONTACTS, TOGGLE_FALSE, TOGGLE_TRUE } from "../types/ContactTypes"




export const getallcontact=()=>  async (dispatch)=>{


try {
    //connect backend
    const res=  await   axios.get('/api/Contacts')

    //reducer
dispatch({type:GET_CONTACTS, payload:  res.data.collectionContact})


} catch (error) {
    console.log(error)
}


}


// action add 
export const addnewcontact=(newContact)=>  async (dispatch)=>{

    try {
        
const res=  await  axios.post('/api/Contacts',  newContact )
dispatch(getallcontact())

    } catch (error) {
        console.log(error)
    }

}
//delete
export const deletecontact=(id)=>async(dispatch)=>{

  
try {
    const res=  await axios.delete(`/api/Contacts/${id}`)
    dispatch(getallcontact())
} catch (error) {
    console.log(error)
    
}
}

// get one contact
export const getContact=(id)=>async(dispatch)=>{

    try {
        const res=  await axios.get(`/api/Contacts/${id}`)
        dispatch({type:GET_CONTACT, payload:res.data.collectionContact})
        
    } catch (error) {
        console.log(error)
    }
}

export const toggletrue=()=>{
 return {  type:TOGGLE_TRUE}
}
export const togglefalse=()=>{
    return {  type:TOGGLE_FALSE}
   }



   export const editcontact=(id,newContact)=>  async (dispatch)=>{
try {
    const res= await axios.put(`/api/Contacts/${id}`, newContact)
    dispatch(getallcontact())
} catch (error) {
    console.log(error)
}
   }