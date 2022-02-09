import { useSelector } from "react-redux"
import Card from "./card"

function List(){

    const contacts=useSelector(state=>  state.contactReducer.contacts   )

    return (

        <div   style={{display:"flex", justifyContent:'space-between' , flexWrap:"wrap"}}  >

{contacts.map(el=> <Card  el={el}    />  )}


        </div>
    )
}
export default List