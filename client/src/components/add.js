import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router"
import { addnewcontact, editcontact } from "../redux/actions/contactActions"

function Add() {

    const [name, setName]=useState("")
    const [email, setEmail]=useState("")
    const [age, setAge]=useState(0)
    const [pic, setPic]=useState("")
    const dispatch=useDispatch()
    const history= useHistory()
    const Onecontact=useSelector(state=>state.contactReducer.contact)
    const edit=useSelector(state=>state.contactReducer.edit)

useEffect(()=>{
    if(edit) {setName(Onecontact.name) ;setAge(Onecontact.age); setEmail(Onecontact.email) ; setPic(Onecontact.pic) }
    else {setName("") ; setAge(0); setEmail("") ; setPic("") }
}, [])

    return(
        <div class="containerAdd">
 
  <div class="brand-title">ADD NEW CONTACT</div>
  <div class="inputs">
    <label>EMAIL</label>
    <input type="email" placeholder="example@test.com"     value={email}   onChange={(e)=>setEmail(e.target.value)}  />
    <label>FULL NAME</label>
    <input type="TEXT" placeholder="FULL NAME"   value={name}   onChange={(e)=>setName(e.target.value)} />
    <label>AGE</label>
    <input type="text" placeholder="age"   value={age}  onChange={(e)=>setAge(e.target.value)}  />
    <label>PIC</label>
    <input type="text" placeholder="pic"   value={pic}    onChange={(e)=>setPic(e.target.value)}  />


{edit?  <button  onClick={()=>{dispatch(editcontact(Onecontact._id, {name,age,email,pic})) ; history.push('/contacts')  }}       >EDIT</button>  :  <button     onClick={()=>  {dispatch(addnewcontact({name,email,age,pic})) ;   history.push('/contacts')   } }   >ADD</button> }

  
  </div>

</div>
    )
}
export default Add