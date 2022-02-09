import { GET_CONTACT, GET_CONTACTS, TOGGLE_FALSE, TOGGLE_TRUE } from "../types/ContactTypes";


const initalstate={
contacts:[],
contact:{},
edit:false
}

const contactReducer=(state=initalstate,action)=>{

  switch (action.type) {
      case GET_CONTACTS:
          return {...state, contacts:action.payload}
         
  case GET_CONTACT:
    return {...state, contact:action.payload}
    case TOGGLE_TRUE:
      return {...state, edit:true}
      case TOGGLE_FALSE:
        return {...state, edit:false}
      default:
         return state
  }
}

export default contactReducer