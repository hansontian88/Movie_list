import {ADD, REMOVE} from '../actions/constant';
import data from '../data/data.json';

const defaultState ={
     mylist: data.mylist,
     recommendations: data.recommendations
}

const moviesReducer = (state=defaultState, action) =>{
    const newState = JSON.parse(JSON.stringify(state));
    
    switch(action.type){
        case REMOVE: 
          const removeItem=newState.mylist.splice(action.index, 1);
          newState.recommendations.push(removeItem[0]);
          return newState;
        
          case ADD: 
          const addItem = newState.recommendations.splice(action.index,1);
          newState.mylist.push(addItem[0]);
         return newState;

        default:
        return state
    }
} 


export default moviesReducer