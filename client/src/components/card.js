import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { deletecontact, getContact, toggletrue } from "../redux/actions/contactActions"

function Card({el}){
    const dispatch=useDispatch()
    return (
        <div>

<div id="container">	
	
	<div class="product-details">
		
	<h1>{el.name}</h1>

		
			<p class="information">" Let's spread the joy , here is Christmas , the most awaited day of the year.Christmas Tree is what one need the most. Here is the correct tree which will enhance your Christmas.</p>

		
		
<div class="control">
	
	<button class="btn">
	 <span class="price">edit</span>
      <span class="shopping-cart"      >
          <Link    to='/editContact' > <i  onClick={()=>{dispatch(getContact(el._id)); dispatch(toggletrue())}}    class="fa fa-edit" aria-hidden="true"></i>
          </Link>
          </span>
   <span class="buy"    onClick={()=>dispatch(deletecontact(el._id))}  >Delete</span>
 </button>
	
</div>
			
</div>
	
<div class="product-image">
	
	<img src=  {el.pic}  alt=""/>
	

<div class="info">
	<h2> Description</h2>
	<ul>
		<li><strong>age: </strong>{el.age}</li>
		<li><strong>email : </strong> {el.email}  </li>
	
		
	</ul>
</div>
</div>

</div>



        </div>
    )
}

export default Card