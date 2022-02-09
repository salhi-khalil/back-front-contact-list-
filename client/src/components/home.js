import { Link } from "react-router-dom"
import {useDispatch} from 'react-redux'
import { getallcontact, togglefalse } from "../redux/actions/contactActions"
function Home(){

    const dispatch=useDispatch()
    return(
        <div>
    <input type="checkbox" id="active"/>
    <label for="active" class="menu-btn"><i class="fas fa-bars"></i></label>
    <div class="wrapper">
      <ul>
  <Link  to='/contacts'    onClick={()=> dispatch(getallcontact())    } > <li   style={{color:'black', margin: "25px"}}      >Contacts</li> </Link>
   <Link   to='/addContact'   onClick={()=>  dispatch(togglefalse()) }   >    <li  >Add </li> </Link>

</ul>
</div>
<div class="content">
      <div class="title">
Welcome to</div>
<p>
MERN APP</p>
</div>


        </div>
    )
}
export default Home