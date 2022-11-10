
const intialState={
    data:null
}
export function Reducer(state=intialState,action){
   switch(action.type){
    case "GET_DATA":
        return{
          ...state,
          data:action.payload
        }
    default:
        return state;
   }
} 