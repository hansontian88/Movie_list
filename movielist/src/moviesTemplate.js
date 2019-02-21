import React, {Fragment} from 'react';
import './style/movies.css';


const Movies = (props) => {
        return(
            <Fragment>
                <div>
                  <h2 className='bigTitle'>{props.title}</h2>
                </div>
                <div className = 'Movie_box'>
                 {props.data.map((item,index)=>(
                   <div className='movie' key={item.id} onMouseOver={()=>props.handleShow(item.id)} 
                   onMouseOut = {props.handleOut}>
                      <div className='title'>{item.title}</div>
                      <div><img src={item.img} alt='mylist'/></div> 
                      <button className={
                          (props.show===(item.id))?'show':'hide'
                        } 
                        onClick={()=>{
                        props.handleClick(index)
                      }}>{props.buttonName}</button>
                   </div>
                ))}
                </div>
            </Fragment>
        )}

export default Movies