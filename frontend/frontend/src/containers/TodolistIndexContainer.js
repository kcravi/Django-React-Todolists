import React from 'react'
import { connect } from 'react-redux'
import TodolistIndexTile from "../components/TodolistIndexTile"
import TodolistFormContainer from "./TodolistFormContainer"

import { getTodolists } from "../modules/todolists"

class TodolistIndexContainer extends React.Component {
  // constructor(props){
  //   super(props)
    // this.state = {
    //   todolists: []
    // }
  // }

  componentDidMount(){
    // fetch('http://127.0.0.1:8000/api/')
    // .then(response => response.json())
    // .then(res => {
    //   this.setState({todolists: res})
    // })
    this.props.getTodolists()
  }

  render() {
    let datas = this.props.todolists.map(todolist => {
      return (
        <TodolistIndexTile
          key={todolist.id}
          id={todolist.id}
          title={todolist.title}
          body={todolist.body}
          created_at={todolist.created_at}
        />
      )
    })
    return (
      <div>
        <h1> ToDo Lists </h1>
        {datas}
        <br/>
        <hr/>
        <h3> Add New Todolist </h3>
        <TodolistFormContainer
          requestType='post'
          todolistId=''
          btn='Create Todolist'
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    todolists: state.todolists.todolists
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getTodolists: () => dispatch(getTodolists())
  }
}

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(TodolistIndexContainer)
