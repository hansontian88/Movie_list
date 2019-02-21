import React, { Fragment, Component } from 'react';
import Movie from './moviesTemplate' 
import {AddAction, RemoveAction} from './actions/index';
import {connect} from 'react-redux';
import './style/movies.css';


class App extends Component {
    constructor(props){
      super(props)
      this.state={
        show: null,
        titles:{
          myList: 'MyList:',
          Recommendations: 'Recommendations:'
        },
        buttonsName: {
          Add: 'Add',
          Remove: 'Remove'
        }
      }
     
     this.handleShow = this.handleShow.bind(this)
    }

  handleShow =(id)=>{
    this.setState({
      show: id
    })
  }

  handleOut = () =>{
    this.setState({
      show: null
    })
  }
  
  render() {
    return (
     <Fragment>
       <h1>NETFLIX</h1>
       <div>
        <Movie 
           handleShow={this.handleShow}
           handleOut = {this.handleOut}
           show = {this.state.show}
           title = {this.state.titles.myList}
           data = {this.props.data.mylist}
           buttonName = {this.state.buttonsName.Remove}
           handleClick = {this.props.handleRemove}
           />
      </div>
      <div> 
        <Movie 
           handleShow={this.handleShow}
           handleOut = {this.handleOut}
           show={this.state.show}
           title = {this.state.titles.Recommendations}
           data = {this.props.data.recommendations}
           buttonName = {this.state.buttonsName.Add}
           handleClick = {this.props.handleAdd}
           />
      </div>
      <div>
        <h2>My List Titles</h2>
        <ul>
        {this.props.data.mylist.map((item) => {            
             return <li key = {item.id}>{item.title}</li>
        })}
        </ul>
      </div>
     </Fragment>  
    );
  }
}

const mapStateToProps = (state, ownProps)=>{
  return{
     data: state
  }
}

const mapDispatchToProps = (dispatch, ownProps) =>{
return{
    handleAdd: (index)=>{
        dispatch(AddAction(index))
    },
    handleRemove: (index)=>{
        dispatch(RemoveAction(index))
    }
  }    
}

export default connect(mapStateToProps,mapDispatchToProps)(App)
