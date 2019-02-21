import {ADD, REMOVE} from './constant';

export const AddAction =(index)=>{
    return{
        type: ADD,
        index
    }

}

export const RemoveAction =(index)=>{
    return{
        type: REMOVE,
        index
    }
}